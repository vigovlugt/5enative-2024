import { Tabs } from "expo-router";
import { Text } from "react-native";
import { Book, Search, User } from "lucide-react-native";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                lazy: false,
            }}
        >
            <Tabs.Screen
                name="character"
                options={{
                    title: "Character",
                    tabBarIcon: ({ color }) => <User size={28} color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="content"
                options={{
                    title: "Content",
                    tabBarIcon: ({ color }) => <Book size={28} color={color} />,
                    headerShown: false,
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    tabBarIcon: ({ color }) => (
                        <Search size={28} color={color} />
                    ),
                    headerShown: false,
                }}
            />
        </Tabs>
    );
}
