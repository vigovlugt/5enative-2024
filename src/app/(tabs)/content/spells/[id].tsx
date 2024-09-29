import { useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { useSpell } from "@/src/contexts/data";
import { Spell } from "@/src/components/spell";

export default function SpellPage() {
    const { id } = useLocalSearchParams();
    const spell = useSpell(id.toString());
    if (!spell) {
        return <Text>Spell not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Spell spell={spell} />
        </ScrollView>
    );
}
