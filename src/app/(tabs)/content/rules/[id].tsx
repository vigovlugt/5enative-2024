import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useRule } from "@/src/contexts/data";
import { Rule } from "@/src/components/rule";
import { Text } from "@/src/components/text";

export default function RulePage() {
    const { id } = useLocalSearchParams();
    const rule = useRule(id.toString());
    if (!rule) {
        return <Text>Rule not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Rule rule={rule} />
        </ScrollView>
    );
}
