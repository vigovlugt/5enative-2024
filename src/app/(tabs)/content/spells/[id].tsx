import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useSpell } from "@/src/contexts/data";
import { Spell } from "@/src/components/spell";
import { Text } from "@/src/components/text";

export default function SpellPage() {
    const { id } = useLocalSearchParams();
    const spell = useSpell(id.toString());
    if (!spell) {
        return <Text>Spell not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Spell spell={spell} />
        </ScrollView>
    );
}
