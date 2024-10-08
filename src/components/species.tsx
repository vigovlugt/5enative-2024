import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { speciesSizeName, Species as SpeciesType } from "../types/species";
import { Text } from "./text";

export function Species({ species }: { species: SpeciesType }) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {species.name}
                </Text>
                <Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Creature Type:{" "}
                    </Text>
                    {(
                        species.creatureTypes?.map(
                            (ct) => ct.charAt(0).toUpperCase() + ct.slice(1),
                        ) ?? []
                    ).join(", ")}
                </Text>
                <Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Size:{" "}
                    </Text>
                    {species.size?.map(speciesSizeName).join(", ")}
                </Text>
                <Text>
                    <Text
                        style={{
                            fontWeight: "bold",
                        }}
                    >
                        Speed:{" "}
                    </Text>
                    {JSON.stringify(species.speed)}
                </Text>
            </View>
            {species.entries && (
                <EntriesEntry
                    entry={{
                        type: "entries",
                        entries: species.entries,
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
                {species.source} {species.page}
            </Text>
        </View>
    );
}
