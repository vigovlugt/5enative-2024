import { useLocalSearchParams } from "expo-router";
import { Pressable, ScrollView } from "react-native";
import { useSpell } from "@/src/contexts/data";
import { Spell } from "@/src/components/spell";
import { Text } from "@/src/components/text";
import { useTheme } from "@react-navigation/native";
import {
    useCharacterActions,
    useCharacters,
    useSelectedCharacter,
} from "@/src/stores/character-store";
import { getSpellId } from "@/src/types/spell/spell";

export default function SpellPage() {
    const { id } = useLocalSearchParams();
    const spell = useSpell(id.toString());
    const theme = useTheme();
    const character = useSelectedCharacter();
    const { setSelectedCharacter } = useCharacterActions();

    if (!spell) {
        return <Text>Spell not found</Text>;
    }

    const characterHasSpell = character
        ? character.spells.includes(getSpellId(spell))
        : false;

    return (
        <ScrollView contentContainerStyle={{ padding: 8, flex: 1 }}>
            <Spell spell={spell} />
            {character && (
                <Pressable
                    style={{
                        backgroundColor: theme.colors.card,
                        padding: 8,
                        borderRadius: 6,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "auto",
                    }}
                    onPress={() => {
                        if (characterHasSpell) {
                            setSelectedCharacter({
                                ...character,
                                spells: character.spells.filter(
                                    (s) => s !== getSpellId(spell),
                                ),
                            });
                        } else {
                            setSelectedCharacter({
                                ...character,
                                spells: [
                                    ...character.spells,
                                    getSpellId(spell),
                                ],
                            });
                        }
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>
                        {characterHasSpell
                            ? "Remove from character"
                            : "Add to character"}
                    </Text>
                </Pressable>
            )}
        </ScrollView>
    );
}
