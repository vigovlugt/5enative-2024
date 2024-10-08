import { Pressable, PressableProps, View } from "react-native";
import { Text } from "../components/text";
import { useCharacterActions, useCharacters } from "../stores/character-store";
import { useTheme } from "@react-navigation/native";
import { Plus } from "lucide-react-native";
import { router } from "expo-router";
import * as Crypto from "expo-crypto";

function CharacterCard(props: PressableProps) {
    const theme = useTheme();

    return (
        <Pressable
            {...props}
            style={[
                {
                    backgroundColor: theme.colors.card,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 6,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 8,
                },
                props.style as any,
            ]}
        />
    );
}

export default function CharacterSelect() {
    const characters = useCharacters();
    const { setSelectedCharacterId, setCharacters } = useCharacterActions();
    const theme = useTheme();

    const chars = Object.values(characters).sort((a, b) =>
        a.name.localeCompare(b.name),
    );

    return (
        <View
            style={{
                padding: 8,
                gap: 8,
            }}
        >
            {chars.map((character) => (
                <CharacterCard
                    key={character.id}
                    onPress={() => {
                        setSelectedCharacterId(character.id);
                        if (router.canGoBack()) {
                            router.back();
                        } else {
                            router.push("/");
                        }
                    }}
                >
                    <Text
                        style={{ fontSize: 16, fontWeight: "bold" }}
                        key={character.id}
                    >
                        {character.name}
                    </Text>
                </CharacterCard>
            ))}
            <CharacterCard
                onPress={() => {
                    const id = Crypto.randomUUID();
                    setCharacters({
                        ...characters,
                        [id]: {
                            id,
                            name: "New Character",
                            classes: {},
                            spells: [],
                            species: "human_xphb",
                        },
                    });
                    setSelectedCharacterId(id);
                    if (router.canGoBack()) {
                        router.back();
                    } else {
                        router.push("/");
                    }
                }}
            >
                <Plus size={23} color={theme.colors.text} />
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "bold",
                        textAlignVertical: "center",
                    }}
                >
                    Create new character
                </Text>
            </CharacterCard>
        </View>
    );
}
