import { useLocalSearchParams } from "expo-router";
import { Spell } from "@/src/components/spell";
import { useSpell } from "@/src/contexts/data";
import { ScrollView, Text, View } from "react-native";

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
