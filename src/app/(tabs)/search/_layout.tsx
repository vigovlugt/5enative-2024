import { CharacterSelector } from "@/src/components/character-selector";
import { Stack } from "expo-router";
import { Text } from "react-native";

export default function SearchLayout() {
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
                    title: "Search",
                }}
            />
        </Stack>
    );
}
