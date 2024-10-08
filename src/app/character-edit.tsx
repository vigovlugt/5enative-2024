import {
    Button,
    Pressable,
    PressableProps,
    ScrollView,
    View,
} from "react-native";
import { Text } from "../components/text";
import {
    Character,
    CharacterClass,
    useCharacterActions,
    useCharacters,
    useSelectedCharacter,
} from "../stores/character-store";
import { useTheme } from "@react-navigation/native";
import { Plus } from "lucide-react-native";
import { router } from "expo-router";
import { Input } from "../components/ui/input";
import { useData } from "../contexts/data";
import { getClassId, getSubclassId } from "../types/class";
import { Select } from "../components/ui/select";
import { getSpeciesId } from "../types/species";

export default function CharacterEdit() {
    const character = useSelectedCharacter();
    const characters = useCharacters();
    const { setCharacters } = useCharacterActions();
    const theme = useTheme();
    const { classes, subClasses, species } = useData();

    if (!character) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Text>Select a character</Text>
            </View>
        );
    }

    const updateCharacter = (char: Partial<Character>) =>
        setCharacters({
            ...characters,
            [character.id]: {
                ...character,
                ...char,
            },
        });

    const addLevelToClass = (classId: string, increment: boolean) => {
        const currentLevel = character.classes[classId]?.level ?? 0;
        const newLevel = currentLevel + (increment ? 1 : -1);

        if (newLevel <= 0) {
            updateCharacter({
                ...character,
                classes: Object.fromEntries(
                    Object.entries(character.classes).filter(
                        ([cl]) => cl !== classId,
                    ),
                ),
            });
        } else {
            updateCharacter({
                ...character,
                classes: {
                    ...character.classes,
                    [classId]: {
                        ...(character.classes[classId] ?? {
                            class: classId,
                            subclass: null,
                            level: 0,
                        }),
                        level: newLevel,
                    },
                },
            });
        }
    };

    return (
        <ScrollView
            style={{
                flex: 1,
            }}
            contentContainerStyle={{
                padding: 8,
                gap: 8,
            }}
        >
            <View
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
            >
                <Text style={{ fontWeight: "bold" }}>Name </Text>
                <Input
                    value={character.name}
                    onChangeText={(name) => updateCharacter({ name })}
                />
            </View>

            <View
                style={{
                    flexDirection: "row",
                    gap: 8,
                    alignItems: "center",
                }}
            >
                <Text style={{ fontWeight: "bold" }}>Species </Text>
                <Select
                    selectedValue={character.species}
                    onValueChange={(species) =>
                        updateCharacter({
                            species: species,
                        })
                    }
                >
                    {species.map((s) => (
                        <Select.Item
                            label={s.name}
                            value={getSpeciesId(s)}
                            key={getSpeciesId(s)}
                        />
                    ))}
                </Select>
            </View>

            <View>
                <Text style={{ fontWeight: "bold" }}>Classes</Text>
                <View style={{ gap: 4 }}>
                    {classes.map((c) => {
                        const id = getClassId(c);
                        const characterClass = character.classes[id] as
                            | undefined
                            | CharacterClass;

                        return (
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 8,
                                    alignItems: "center",
                                }}
                                key={id}
                            >
                                <Text style={{ width: 65 }}>{c.name}</Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 8,
                                        alignItems: "center",
                                    }}
                                >
                                    <Pressable
                                        style={{
                                            borderWidth: 1,
                                            borderColor: theme.colors.border,
                                            padding: 8,
                                            borderRadius: 6,
                                            width: 30,
                                            alignItems: "center",
                                        }}
                                        onPress={() =>
                                            addLevelToClass(id, false)
                                        }
                                    >
                                        <Text>-</Text>
                                    </Pressable>
                                    <Text>{characterClass?.level ?? 0}</Text>
                                    <Pressable
                                        style={{
                                            borderWidth: 1,
                                            borderColor: theme.colors.border,
                                            padding: 8,
                                            borderRadius: 6,
                                            width: 30,
                                            alignItems: "center",
                                        }}
                                        onPress={() =>
                                            addLevelToClass(id, true)
                                        }
                                    >
                                        <Text>+</Text>
                                    </Pressable>
                                </View>
                                <Select
                                    selectedValue={characterClass?.subclass}
                                    onValueChange={(subclass) =>
                                        updateCharacter({
                                            classes: {
                                                ...character.classes,
                                                [id]: {
                                                    ...(characterClass ?? {
                                                        class: id,
                                                        level: 1,
                                                    }),
                                                    subclass,
                                                },
                                            },
                                        })
                                    }
                                >
                                    <Select.Item label="-" value={null} />
                                    {subClasses
                                        .filter(
                                            (s) =>
                                                getClassId({
                                                    source: s.classSource,
                                                    name: s.className,
                                                }) === id,
                                        )
                                        .map((s) => (
                                            <Select.Item
                                                label={s.name}
                                                value={getSubclassId(s)}
                                                key={getSubclassId(s)}
                                            />
                                        ))}
                                </Select>
                            </View>
                        );
                    })}
                </View>
            </View>

            <View style={{ marginTop: "auto" }}>
                <Pressable
                    style={{
                        backgroundColor: theme.colors.card,
                        padding: 8,
                        borderRadius: 6,
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 48,
                    }}
                    onPress={() => {
                        setCharacters(
                            Object.fromEntries(
                                Object.entries(characters).filter(
                                    ([id]) => id !== character.id,
                                ),
                            ),
                        );
                        router.navigate("/character-select");
                    }}
                >
                    <Text style={{ fontWeight: "bold" }}>Delete character</Text>
                </Pressable>
            </View>

            {/* <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Level {character.level}{" "}
                <Text
                    style={{
                        color: "gray",
                    }}
                >
                    <Pressable
                        onPress={() =>
                            updateCharacter({
                                level: Math.min(character.level + 1, 20),
                            })
                        }
                    >
                        +
                    </Pressable>{" "}
                    <Pressable
                        onPress={() =>
                            updateCharacter({
                                level: Math.max(1, character.level - 1),
                            })
                        }
                    >
                        -
                    </Pressable>
                </Text>
            </Text> */}
        </ScrollView>
    );
}
