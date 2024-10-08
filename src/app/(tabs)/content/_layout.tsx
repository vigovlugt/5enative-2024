import { CharacterSelector } from "@/src/components/character-selector";
import { Stack } from "expo-router";

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
        </Stack>
    );
}
