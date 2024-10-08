import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { Background as BackgroundType } from "../types/background";
import { Text } from "./text";

export function Background({ background }: { background: BackgroundType }) {
    return (
        <View style={{ gap: 8 }}>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: "bold",
                }}
            >
                {background.name}
            </Text>
            {background.entries && (
                <EntriesEntry
                    entry={{
                        type: "entries",
                        entries: background.entries,
                    }}
                />
            )}
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {background.source} {background.page}
            </Text>
        </View>
    );
}
