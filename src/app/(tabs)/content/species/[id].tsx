import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useSpecies } from "@/src/contexts/data";
import { Species } from "@/src/components/species";
import { Text } from "@/src/components/text";

export default function SpeciesPage() {
    const { id } = useLocalSearchParams();
    const species = useSpecies(id.toString());
    if (!species) {
        return <Text>Species not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Species species={species} />
        </ScrollView>
    );
}
