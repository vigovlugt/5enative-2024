import { CharacterSelector } from "@/src/components/character-selector";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function ContentLayout() {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerRight: CharacterSelector,
                animation: "none",
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Content",
                }}
            />
            <Stack.Screen
                name="spells/index"
                options={{
                    title: "Spells",
                }}
            />
            <Stack.Screen
                name="spells/[id]"
                options={{
                    title: "Spell",
                }}
            />
        </Stack>
    );
}
