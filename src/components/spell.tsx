import { View } from "react-native";
import { Text } from "./text";
import { endsName } from "../types/ends";
import { schoolName } from "../types/spell/school";
import {
    SpellComponents,
    SpellDuration,
    SpellTime,
    Spell as SpellType,
} from "../types/spell/spell";
import { spellRange } from "../types/spell/spell-range";
import { EntriesEntry } from "./entry";

export function Spell({ spell }: { spell: SpellType }) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {spell.name}
                </Text>
                <Text
                    style={{
                        fontStyle: "italic",
                        color: "#666",
                    }}
                >
                    Level {spell.level} {schoolName(spell.school)}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Casting time: </Text>
                    {spellCastingTime(spell.time)}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Range: </Text>
                    {spellRange(spell.range)}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Components: </Text>
                    {spellComponents(spell.components)}
                </Text>
                <Text>
                    <Text style={{ fontWeight: "bold" }}>Duration: </Text>
                    {spellDuration(spell.duration)}
                </Text>
            </View>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: spell.entries,
                }}
            />
            {spell.entriesHigherLevel && (
                <EntriesEntry
                    entry={{
                        type: "entries",
                        entries: spell.entriesHigherLevel,
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
                {spell.source} {spell.page}
            </Text>
        </View>
    );
}

export function spellCastingTime(time: SpellTime[]) {
    function formatTime(t: SpellTime) {
        return `${t.number} ${t.unit}${t.number > 1 ? "s" : ""} ${t.condition ? `(${t.condition})` : ""} ${t.note ? `(${t.note})` : ""}`;
    }

    return time.map(formatTime).join(" or ");
}

export function spellComponents(components: SpellComponents) {
    return (
        Object.entries(components)
            .map(([k, v]) => (v ? k.toUpperCase() : ""))
            .join(", ") + (components.m ? " (" + components.m.text + ")" : "")
    );
}

export function spellDuration(durations: SpellDuration[]) {
    const durationParts = durations.map((duration) => {
        const conditionText = duration.condition
            ? ` (${duration.condition})`
            : "";

        switch (duration.type) {
            case "permanent":
                if (!duration.ends) {
                    return `Permanent${conditionText}`;
                }

                return `Until ${duration.ends.map(endsName).join(" or ")}${conditionText}`;
            case "special":
                if (duration.concentration) {
                    return `Concentration${conditionText}`;
                }
                return `Special${conditionText}`;

            case "instant":
                return `Instantaneous${conditionText}`;

            case "timed":
                const isConcentration = duration.concentration
                    ? "Concentration, "
                    : "";
                const upToPrefix = duration.concentration ? "up to " : "";
                const unitCount = duration.duration?.amount;
                const unitType =
                    unitCount === 1
                        ? duration.duration?.type
                        : `${duration.duration?.type}s`;

                return `${isConcentration}${upToPrefix}${unitCount} ${unitType}${conditionText}`;
        }
    });

    return durationParts.join(", ");
}
