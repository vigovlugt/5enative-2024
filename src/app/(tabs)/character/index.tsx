import { Link } from "expo-router";
import { View } from "react-native";
import { Text } from "@/src/components/text";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>TODO</Text>

            {/* <Spells spells={spells.spell as any} /> */}
            {/* <Spell spell={spells.spell[index] as any} /> */}
        </View>
    );
}
