import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { Rule as RuleType } from "../types/rule";
import { Text } from "./text";

export function Rule({ rule }: { rule: RuleType }) {
    return (
        <View style={{ gap: 8 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            >
                {rule.name}
            </Text>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: rule.entries,
                }}
            />
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {rule.source} {rule.page}
            </Text>
        </View>
    );
}
