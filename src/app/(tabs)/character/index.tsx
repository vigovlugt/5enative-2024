import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text>HI</Text>
            <Link
                href={{
                    pathname: "/character/spells/[id]",
                    params: {
                        id: "1",
                    },
                }}
            >
                Spell
            </Link>
            {/* <Spells spells={spells.spell as any} /> */}
            {/* <Spell spell={spells.spell[index] as any} /> */}
        </View>
    );
}
