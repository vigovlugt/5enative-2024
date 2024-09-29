import { createContext, useContext } from "react";
import { getSpellId, Spell } from "../types/spell/spell";
import { getRuleId, Rule } from "../types/rule";
import { Action, getActionId } from "../types/action";

export type Data = {
    spells: Spell[];
    rules: Rule[];
    actions: Action[];
};

export const DataContext = createContext<Data | null>(null);

export function useData() {
    const data = useContext(DataContext);
    if (!data) {
        throw new Error("useData must be used within a DataProvider");
    }

    return data;
}

export function useSpell(id: string) {
    const { spells } = useData();
    return spells.find((spell) => getSpellId(spell) === id);
}

export function useRule(id: string) {
    const { rules } = useData();
    return rules.find((rule) => getRuleId(rule) === id);
}

export function useAction(id: string) {
    const { actions } = useData();
    return actions.find((action) => getActionId(action) === id);
}
