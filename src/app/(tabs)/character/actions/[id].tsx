import { useLocalSearchParams } from "expo-router";
import { Text, ScrollView } from "react-native";
import { useAction } from "@/src/contexts/data";
import { Action } from "@/src/components/action";

export default function ActionPage() {
    const { id } = useLocalSearchParams();
    const action = useAction(id.toString());
    if (!action) {
        return <Text>Action not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Action action={action} />
        </ScrollView>
    );
}
