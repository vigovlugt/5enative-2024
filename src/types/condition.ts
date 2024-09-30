import { Entry } from "./entry";

export type Condition = {
    name: string;
    source: string;
    page: number;
    srd?: boolean;
    basicRules?: boolean;
    otherSources?: ConditionOtherSource[];
    reprintedAs?: string[];
    entries: Entry[];
    hasFluffImages?: boolean;
    freeRules2024?: boolean;
};

export type ConditionOtherSource = {
    source: string;
    page: number;
};

export function getConditionId(condition: Pick<Condition, "source" | "name">) {
    return `${condition.name.toLowerCase()}_${condition.source.toLowerCase()}`;
}
