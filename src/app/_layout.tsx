import { Stack } from "expo-router";
import { DataContext } from "../contexts/data";
import spellsData from "../../assets/data/spells/spells-xphb.json";
import rulesData from "../../assets/data/variantrules.json";
import actionsData from "../../assets/data/actions.json";

export default function RootLayout() {
    return (
        <DataContext.Provider
            value={{
                spells: spellsData.spell as any,
                rules: rulesData.variantrule.filter(
                    (r) => r.source === "XPHB",
                ) as any,
                actions: actionsData.action.filter(
                    (a) => a.source === "XPHB",
                ) as any,
            }}
        >
            <Stack
                screenOptions={{
                    animation: "none",
                }}
            >
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </DataContext.Provider>
    );
}
