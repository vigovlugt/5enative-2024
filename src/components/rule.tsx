import { View, Text } from "react-native";
import { EntriesEntry } from "./entry";
import { Rule as RuleType } from "../types/rule";

export function Rule({ rule }: { rule: RuleType }) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {rule.name}
                </Text>
            </View>
            <EntriesEntry
                entry={{
                    type: "entries",
                    caption: "",
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
