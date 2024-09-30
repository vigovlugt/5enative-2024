import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { ClassFeature as ClassFeatureType } from "../types/class";
import { Text } from "./text";

export function ClassFeature({
    classFeature,
}: {
    classFeature: ClassFeatureType;
}) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {classFeature.name}
                </Text>
                <Text style={{ color: "#666", fontStyle: "italic" }}>
                    {classFeature.className}
                    {classFeature.subclassShortName
                        ? ` (${classFeature.subclassShortName})`
                        : ""}{" "}
                    Level {classFeature.level}
                </Text>
            </View>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: classFeature.entries,
                }}
            />
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {classFeature.source} {classFeature.page}
            </Text>
        </View>
    );
}
