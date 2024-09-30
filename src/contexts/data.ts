import { createContext, useContext } from "react";
import { getSpellId, Spell } from "../types/spell/spell";
import { getRuleId, Rule } from "../types/rule";
import { Action, getActionId } from "../types/action";
import { Condition, getConditionId } from "../types/condition";
import { Feat, getFeatId } from "../types/feat";
import {
    Class,
    ClassFeature,
    getClassFeatureId,
    getClassId,
    getSubclassId,
    Subclass as SubClass,
} from "../types/class";

export type Data = {
    spells: Spell[];
    rules: Rule[];
    actions: Action[];
    conditions: Condition[];
    feats: Feat[];
    classes: Class[];
    classFeatures: ClassFeature[];
    subClasses: SubClass[];
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

export function useCondition(id: string) {
    const { conditions } = useData();
    return conditions.find((condition) => getConditionId(condition) === id);
}

export function useFeat(id: string) {
    const { feats } = useData();
    return feats.find((feat) => getFeatId(feat) === id);
}

export function useSubClass(id: string) {
    const { subClasses } = useData();
    return subClasses.find((subClass) => getSubclassId(subClass) === id);
}

export function useClass(id: string) {
    const { classes } = useData();
    return classes.find((cls) => getClassId(cls) === id);
}

export function useClassFeature(id: string) {
    const { classFeatures } = useData();
    return classFeatures.find((cls) => getClassFeatureId(cls) === id);
}
