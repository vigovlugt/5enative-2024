import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { useBackground } from "@/src/contexts/data";
import { Background } from "@/src/components/background";
import { Text } from "@/src/components/text";

export default function BackgroundPage() {
    const { id } = useLocalSearchParams();
    const background = useBackground(id.toString());
    if (!background) {
        return <Text>Background not found</Text>;
    }

    return (
        <ScrollView contentContainerStyle={{ padding: 8 }}>
            <Background background={background} />
        </ScrollView>
    );
}
