import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useFeat } from "@/src/contexts/data";
import { Feat } from "@/src/components/feat";
import { Text } from "@/src/components/text";

export default function FeatPage() {
    const { id } = useLocalSearchParams();
    const feat = useFeat(id.toString());
    if (!feat) {
        return <Text>Feat not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Feat feat={feat} />
        </ScrollView>
    );
}
