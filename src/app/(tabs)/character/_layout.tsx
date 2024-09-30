import { Stack } from "expo-router";
import { Text } from "react-native";

export default function CharacterLayout() {
    return (
        <Stack
            initialRouteName="index"
            screenOptions={{
                headerRight: () => <Text>Right</Text>,
                animation: "none",
            }}
        >
            <Stack.Screen
                name="index"
                options={{
                    title: "Character",
                }}
            />
        </Stack>
    );
}
