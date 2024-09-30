import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { Condition as ConditionType } from "../types/condition";
import { Text } from "./text";

export function Condition({ condition }: { condition: ConditionType }) {
    return (
        <View style={{ gap: 8 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            >
                {condition.name}
            </Text>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: condition.entries,
                }}
            />
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {condition.source} {condition.page}
            </Text>
        </View>
    );
}
