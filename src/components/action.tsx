import { View } from "react-native";
import { EntriesEntry } from "./entry";
import { Action as ActionType, getActionId } from "../types/action";
import { Link } from "./ui/link";
import { Text } from "./text";

export function Action({ action }: { action: ActionType }) {
    return (
        <View style={{ gap: 8 }}>
            <View>
                <Text
                    style={{
                        fontSize: 24,
                        fontWeight: "bold",
                    }}
                >
                    {action.name}
                </Text>
            </View>
            <EntriesEntry
                entry={{
                    type: "entries",
                    entries: action.entries,
                }}
            />
            {action.seeAlsoAction?.length ? (
                <Text
                    style={{
                        fontStyle: "italic",
                        marginTop: 16,
                        color: "#666",
                    }}
                >
                    See also:{" "}
                    {action.seeAlsoAction.map((a, i) => {
                        const parts = a.split("|");
                        const name = parts[0];
                        const source =
                            parts.length > 1 ? parts[1] : action.source;
                        return (
                            <Link
                                key={i}
                                variant="link"
                                href={{
                                    pathname: "/actions/[id]",
                                    params: {
                                        id: getActionId({ name, source }),
                                    },
                                }}
                            >
                                {name}
                            </Link>
                        );
                    })}
                </Text>
            ) : null}
            <Text
                style={{
                    fontStyle: "italic",
                    marginTop: 16,
                    color: "#666",
                }}
            >
                {action.source} {action.page}
            </Text>
        </View>
    );
}
