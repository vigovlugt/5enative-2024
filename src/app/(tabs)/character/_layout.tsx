import { CharacterSelector } from "@/src/components/character-selector";
import { Link } from "@/src/components/ui/link";
import { useSelectedCharacter } from "@/src/stores/character-store";
import { useTheme } from "@react-navigation/native";
import { Stack } from "expo-router";
import { Button, Text, View } from "react-native";

export default function CharacterLayout() {
    const theme = useTheme();
    const selectedCharacter = useSelectedCharacter();
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerRight: () => (
                    <View
                        style={{
                            flexDirection: "row",
                            gap: 8,
                            alignItems: "center",
                        }}
                    >
                        <Link
                            style={{
                                color: "white",
                                fontSize: 16,
                                fontWeight: "bold",
                                borderRadius: 6,
                                backgroundColor: theme.dark
                                    ? "rgb(27, 27, 27)"
                                    : "rgb(240, 240, 240)",
                                paddingVertical: 8,
                                paddingHorizontal: 16,
                            }}
                            href="/character-edit"
                        >
                            Edit
                        </Link>
                        <CharacterSelector />
                    </View>
                ),
                animation: "none",
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: selectedCharacter
                        ? selectedCharacter.name
                        : "Character",
                }}
            />
        </Stack>
    );
}
