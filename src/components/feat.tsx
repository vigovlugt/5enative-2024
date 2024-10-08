import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { featCategoryName, Feat as FeatType } from "../types/feat";
import { Text } from "./text";

export function Feat({ feat }: { feat: FeatType }) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {feat.name}
                </Text>
                <Text
                    style={{
                        fontStyle: "italic",
                        color: "#333",
                    }}
                >
                    {featRequirements(feat)}
                </Text>
                <Text>
                    Ability Score Increase. {JSON.stringify(feat.ability)}
                </Text>
            </View>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: feat.entries,
                }}
            />
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {feat.source} {feat.page}
            </Text>
        </View>
    );
}

function featRequirements(feat: FeatType) {
    return (
        <Text>
            {feat.category ? featCategoryName(feat.category) : null}{" "}
            {feat.prerequisite
                ? `(Prerequisite: ${JSON.stringify(feat.prerequisite)})`
                : null}
        </Text>
    );
}
