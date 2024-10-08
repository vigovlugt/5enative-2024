import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useCondition } from "@/src/contexts/data";
import { Condition } from "@/src/components/condition";
import { Text } from "@/src/components/text";

export default function ConditionPage() {
    const { id } = useLocalSearchParams();
    const condition = useCondition(id.toString());
    if (!condition) {
        return <Text>Condition not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Condition condition={condition} />
        </ScrollView>
    );
}
