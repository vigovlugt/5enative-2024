import { Stack } from "expo-router";
import { DataContext } from "../contexts/data";
import { DarkTheme, ThemeProvider } from "@react-navigation/native";

import spellsData from "../../assets/data/spells/spells-xphb.json";
import rulesData from "../../assets/data/variantrules.json";
import actionsData from "../../assets/data/actions.json";
import conditionData from "../../assets/data/conditionsdiseases.json";
import featData from "../../assets/data/feats.json";
import artificerData from "../../assets/data/class/class-artificer.json";
import barbarianData from "../../assets/data/class/class-barbarian.json";
import bardData from "../../assets/data/class/class-bard.json";
import clericData from "../../assets/data/class/class-cleric.json";
import druidData from "../../assets/data/class/class-druid.json";
import fighterData from "../../assets/data/class/class-fighter.json";
import monkData from "../../assets/data/class/class-monk.json";
import paladinData from "../../assets/data/class/class-paladin.json";
import rangerData from "../../assets/data/class/class-ranger.json";
import rogueData from "../../assets/data/class/class-rogue.json";
import sorcererData from "../../assets/data/class/class-sorcerer.json";
import warlockData from "../../assets/data/class/class-warlock.json";
import wizardData from "../../assets/data/class/class-wizard.json";
import raceData from "../../assets/data/races.json";
import { useCharacterHydrated } from "../stores/character-store";
import { SafeAreaProvider } from "react-native-safe-area-context";

const classData = {
    artificer: artificerData,
    barbarian: barbarianData,
    bard: bardData,
    cleric: clericData,
    druid: druidData,
    fighter: fighterData,
    monk: monkData,
    paladin: paladinData,
    ranger: rangerData,
    rogue: rogueData,
    sorcerer: sorcererData,
    warlock: warlockData,
    wizard: wizardData,
} as const;

export default function RootLayout() {
    const characterStoreHydrated = useCharacterHydrated();
    if (!characterStoreHydrated) {
        return null;
    }

    return (
        <ThemeProvider value={DarkTheme}>
            <DataContext.Provider
                value={{
                    spells: spellsData.spell as any,
                    rules: rulesData.variantrule.filter(
                        (r) => r.source === "XPHB",
                    ) as any,
                    actions: actionsData.action.filter(
                        (a) => a.source === "XPHB",
                    ) as any,
                    conditions: [
                        ...conditionData.condition,
                        ...conditionData.disease,
                        ...conditionData.status,
                    ]
                        .filter((c) => c.source === "XPHB")
                        .sort((a, b) => a.name.localeCompare(b.name)) as any,
                    feats: featData.feat.filter(
                        (f) => f.source === "XPHB",
                    ) as any,
                    classes: Object.values(classData)
                        .flatMap((c) => c.class as any)
                        .filter((c) => c.source === "XPHB") as any,
                    classFeatures: Object.values(classData)
                        .flatMap((c) => [
                            ...(c.classFeature as any),
                            ...(c.subclassFeature as any),
                        ])
                        .filter((c) => c.source === "XPHB") as any,
                    subClasses: Object.values(classData)
                        .flatMap((c) => c.subclass as any)
                        .filter((c) => c.source === "XPHB") as any,
                    species: raceData.race.filter(
                        (r) => r.source === "XPHB",
                    ) as any,
                }}
            >
                <Stack
                    screenOptions={{
                        animation: "none",
                    }}
                    initialRouteName="(tabs)"
                >
                    <Stack.Screen
                        name="(tabs)"
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="character-select"
                        options={{ presentation: "modal" }}
                    />
                </Stack>
            </DataContext.Provider>
        </ThemeProvider>
    );
}
