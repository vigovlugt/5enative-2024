import { Pressable } from "react-native";
import { useSelectedCharacter } from "../stores/character-store";
import { DarkTheme, useTheme } from "@react-navigation/native";
import { Text } from "./text";
import { Link } from "./ui/link";

export function CharacterSelector() {
    const selectedCharacter = useSelectedCharacter();
    const theme = useTheme();

    return (
        <Link
            href={"/character-select"}
            style={{
                borderRadius: 9999,
                width: 40,
                height: 40,
                backgroundColor: theme.dark
                    ? "rgb(27, 27, 27)"
                    : "rgb(240, 240, 240)",
                textAlign: "center",
                textAlignVertical: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                }}
            >
                {selectedCharacter ? selectedCharacter.name[0] : "-"}
            </Text>
        </Link>
    );
}
