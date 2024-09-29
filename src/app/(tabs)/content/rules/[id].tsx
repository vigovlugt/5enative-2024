import { useLocalSearchParams } from "expo-router";
import { Text, ScrollView } from "react-native";
import { useRule } from "@/src/contexts/data";
import { Rule } from "@/src/components/rule";

export default function RulePage() {
    const { id } = useLocalSearchParams();
    const rule = useRule(id.toString());
    if (!rule) {
        return <Text>Rule not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Rule rule={rule} />
        </ScrollView>
    );
}
