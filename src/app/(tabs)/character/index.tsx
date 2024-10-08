import { ScrollView, View } from "react-native";
import { Text } from "@/src/components/text";
import { useSelectedCharacter } from "@/src/stores/character-store";
import { Link } from "@/src/components/ui/link";
import { useData, useSpecies } from "@/src/contexts/data";
import { getSpellId } from "@/src/types/spell/spell";
import { SpellDataTable } from "@/src/components/spell-datatable";
import { getClassId, getSubclassId } from "@/src/types/class";
import { ClassFeatureDataTable } from "@/src/components/class-feature-datatable";

export default function Index() {
    const { spells, classFeatures } = useData();
    const character = useSelectedCharacter();
    const species = useSpecies(character?.species);

    if (!character) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link variant="link" href="/character-select">
                    Select a character
                </Link>
            </View>
        );
    }

    const characterSpells = character.spells
        .map((id) => spells.find((s) => getSpellId(s) === id)!)
        .sort((a, b) => a.name.localeCompare(b.name));

    const characterClassFeatures = classFeatures.filter((f) => {
        const characterClass =
            character.classes[
                getClassId({
                    name: f.className,
                    source: f.source,
                })
            ];

        return (
            characterClass &&
            characterClass.level >= f.level &&
            (!f.subclassShortName ||
                characterClass.subclass ==
                    getSubclassId({
                        shortName: f.subclassShortName,
                        className: f.className,
                        source: f.source,
                        classSource: f.classSource,
                    }))
        );
    });

    return (
        <ScrollView
            contentContainerStyle={{
                gap: 16,
                padding: 8,
            }}
        >
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Spells</Text>
                <SpellDataTable spells={characterSpells} />
            </View>
            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Class Features
                </Text>
                <ClassFeatureDataTable classFeatures={characterClassFeatures} />
            </View>

            <View>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Species
                </Text>
                <Link
                    variant="link"
                    href={{
                        pathname: "/content/species/[id]",
                        params: { id: character.species },
                    }}
                >
                    {species?.name}
                </Link>
            </View>
        </ScrollView>
    );
}
