import {
    Entry as EntryType,
    TableEntry as TableEntryType,
    ItemEntry as ItemEntryType,
    EntriesEntry as EntriesEntryType,
    ListEntry as ListEntryType,
} from "../types/entry";
import { View, Text } from "react-native";
import { getSpellId } from "../types/spell/spell";
import { Link } from "../components/ui/link";
import { getRuleId } from "../types/rule";
import { getActionId } from "../types/action";

export function Entry({ entry }: { entry: EntryType }) {
    if (typeof entry === "string") {
        return <EntryText entry={entry} />;
    }
    switch (entry.type) {
        case "table":
            return <TableEntry entry={entry} />;
        case "entries":
            return <EntriesEntry entry={entry} />;
        case "item":
            return <ItemEntry entry={entry} />;
        case "list":
            return <ListEntry entry={entry} />;
    }

    throw new Error(`Unknown entry type: ${entry}`);
}

export function TableEntry({ entry }: { entry: TableEntryType }) {
    return (
        <View>
            <Text>{entry.caption}</Text>
            TODO: Table
        </View>
    );
}

export function EntriesEntry({ entry }: { entry: EntriesEntryType }) {
    return (
        <View style={{ gap: 6 }}>
            {entry.caption && (
                <Text style={{ fontWeight: "bold" }}>{entry.caption}</Text>
            )}
            {entry.entries.map((e, i) => (
                <Entry entry={e} key={i} />
            ))}
        </View>
    );
}

export function ItemEntry({ entry }: { entry: ItemEntryType }) {
    return (
        <Text>
            <Text style={{ fontWeight: "bold" }}>
                {entry.name}
                {". "}
            </Text>
            {entry.entries.map((e, i) => (
                <>
                    <Entry entry={e} key={i} />
                    {i !== entry.entries.length - 1 && <Text>{"\n"}</Text>}
                </>
            ))}
        </Text>
    );
}

export function ListEntry({ entry }: { entry: ListEntryType }) {
    return (
        <View>
            {entry.items.map((e, i) => (
                <Entry entry={e} key={i} />
            ))}
        </View>
    );
}

export function EntryText({ entry }: { entry: string }) {
    const tagRegex = /(\{@.*?\})/g;
    const parts = entry.split(tagRegex);

    return (
        <Text>
            {parts.map((part, i) => {
                if (part.match(tagRegex)) {
                    const inner = part.slice(2, -1);
                    const [type, ...argsText] = inner.split(" ");
                    const args = argsText.length
                        ? argsText.join(" ").split("|")
                        : [];

                    switch (type) {
                        case "damage":
                            if (args.length !== 1) {
                                throw new Error(
                                    `Invalid damage tag: ${inner}, expected 1 argument`,
                                );
                            }
                            return <Text key={i}>{args[0]}</Text>;
                        case "dice":
                            if (args.length !== 1) {
                                throw new Error(
                                    `Invalid dice tag: ${inner}, expected 1 argument`,
                                );
                            }
                            return <Text key={i}>{args[0]}</Text>;
                        case "variantrule": {
                            if (args.length !== 3 && args.length !== 2) {
                                throw new Error(
                                    `Invalid variantrule tag: ${inner}, expected 2-3 arguments`,
                                );
                            }
                            const [text, source] = args;
                            return (
                                <Link
                                    key={i}
                                    href={{
                                        pathname: "/content/rules/[id]",
                                        params: {
                                            id: getRuleId({
                                                name: text,
                                                source,
                                            }),
                                        },
                                    }}
                                >
                                    {text}
                                </Link>
                            );
                        }
                        case "action": {
                            if (args.length !== 2) {
                                throw new Error(
                                    `Invalid action tag: ${inner}, expected 2 arguments`,
                                );
                            }
                            const [actionType, source] = args;
                            return (
                                <Link
                                    key={i}
                                    href={{
                                        pathname: "/content/actions/[id]",
                                        params: {
                                            id: getActionId({
                                                name: actionType,
                                                source,
                                            }),
                                        },
                                    }}
                                >
                                    {actionType}
                                </Link>
                            );
                        }
                        case "condition": {
                            if (args.length !== 2) {
                                throw new Error(
                                    `Invalid condition tag: ${inner}, expected 2 arguments`,
                                );
                            }
                            const [condition, source] = args;
                            return <Text key={i}>{condition}</Text>;
                        }
                        case "filter": {
                            const text = args[0];

                            return <Text key={i}>{text}</Text>;
                        }
                        case "creature": {
                            const creature = args[0];

                            return <Text key={i}>{creature}</Text>;
                        }
                        case "spell": {
                            const id = getSpellId({
                                name: args[0],
                                source: args[1],
                            });

                            return (
                                <Link
                                    key={i}
                                    href={{
                                        pathname: "/content/spells/[id]",
                                        params: { id },
                                    }}
                                    style={{ color: "blue" }}
                                >
                                    {args[0]}
                                </Link>
                            );
                        }
                        case "sense": {
                            const sense = args[0];

                            return <Text key={i}>{sense}</Text>;
                        }
                        case "scaledamage": {
                            if (args.length !== 3) {
                                throw new Error(
                                    `Invalid scaledamage tag: ${inner}, expected 3 arguments`,
                                );
                            }
                            const [baseDmg, levels, dicePerLevel] = args;
                            return <Text key={i}>{dicePerLevel}</Text>;
                        }
                        case "book": {
                            const book = args[0];

                            return <Text key={i}>{book}</Text>;
                        }
                        case "status": {
                            const status = args[0];

                            return <Text key={i}>{status}</Text>;
                        }
                        case "hazard": {
                            const hazard = args[0];

                            return <Text key={i}>{hazard}</Text>;
                        }
                        case "chance": {
                            const chance = args[0];

                            return <Text key={i}>{chance}% chance</Text>;
                        }
                        case "skill": {
                            const skill = args[0];

                            return <Text key={i}>{skill}</Text>;
                        }
                        case "scaledice": {
                            if (args.length !== 3) {
                                throw new Error(
                                    `Invalid scaledice tag: ${inner}, expected 3 arguments`,
                                );
                            }
                            const [baseDmg, levels, dicePerLevel] = args;
                            return <Text key={i}>{dicePerLevel}</Text>;
                        }
                        case "item": {
                            if (args.length !== 2 && args.length !== 1) {
                                throw new Error(
                                    `Invalid item tag: ${inner}, expected 1-2 arguments`,
                                );
                            }

                            const [item, ...source] = args;
                            return <Text key={i}>{item}</Text>;
                        }
                        default:
                            throw new Error(
                                `Unknown tag: ${type}, ${JSON.stringify(args)}`,
                            );
                    }
                }
                return <Text key={i}>{part}</Text>;
            })}
        </Text>
    );
}
