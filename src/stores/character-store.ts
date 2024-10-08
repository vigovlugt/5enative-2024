import { create, useStore } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
export type Character = {
    id: string;
    name: string;
    classes: Record<string, CharacterClass>;
    species: string;
    spells: string[];
};

export type CharacterClass = {
    class: string;
    subclass: string | null;
    level: number;
};

export type CharacterStore = {
    selectedCharacterId: string | null;
    characters: Record<string, Character>;
    isHydrated: boolean;
    actions: {
        setSelectedCharacterId: (selectedCharacterId: string) => void;
        setCharacters: (characters: Record<string, Character>) => void;
        setHydrated: () => void;
        setSelectedCharacter: (character: Character) => void;
    };
};

const useCharacterStore = create<CharacterStore>()(
    persist(
        (set) => ({
            selectedCharacterId: null,
            characters: {},
            isHydrated: false,
            actions: {
                setSelectedCharacterId: (selectedCharacterId: string) =>
                    set({ selectedCharacterId }),
                setCharacters: (characters: Record<string, Character>) =>
                    set({ characters }),
                setHydrated: () => set({ isHydrated: true }),
                setSelectedCharacter: (character: Character) =>
                    set((state) => ({
                        characters: {
                            ...state.characters,
                            [character.id]: character,
                        },
                    })),
            },
        }),
        {
            name: "characters",
            storage: createJSONStorage(() =>
                Platform.OS === "web" ? localStorage : AsyncStorage,
            ),
            onRehydrateStorage: (state) => () => state.actions.setHydrated(),
            partialize: (state) => ({
                selectedCharacterId: state.selectedCharacterId,
                characters: state.characters,
            }),
        },
    ),
);

export const useSelectedCharacterId = () =>
    useCharacterStore((s) => s.selectedCharacterId);
export const useCharacters = () => useCharacterStore((s) => s.characters);

export const useCharacter = (id: string) =>
    useCharacterStore((s) => s.characters[id]);

export const useSelectedCharacter = () =>
    useCharacterStore((s) =>
        s.selectedCharacterId ? s.characters[s.selectedCharacterId] : undefined,
    );

export const useCharacterActions = () => useCharacterStore((s) => s.actions);

export const useCharacterHydrated = () =>
    useCharacterStore((s) => s.isHydrated);
