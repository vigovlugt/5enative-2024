import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useAction } from "@/src/contexts/data";
import { Action } from "@/src/components/action";
import { Text } from "@/src/components/text";

export default function ActionPage() {
    const { id } = useLocalSearchParams();
    const action = useAction(id.toString());
    if (!action) {
        return <Text>Action not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Action action={action} />
        </ScrollView>
    );
}
