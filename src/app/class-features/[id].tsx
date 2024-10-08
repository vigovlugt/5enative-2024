import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useClassFeature } from "@/src/contexts/data";
import { ClassFeature } from "@/src/components/class-feature";
import { Text } from "@/src/components/text";

export default function ClassFeaturePage() {
    const { id } = useLocalSearchParams();
    const classFeature = useClassFeature(id.toString());
    if (!classFeature) {
        return <Text>ClassFeature not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <ClassFeature classFeature={classFeature} />
        </ScrollView>
    );
}
