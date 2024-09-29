import { Entry } from "./entry";

export const RuleType = {
    core: "C",
    optional: "O",
    variant: "V",
    variantOptional: "VO",
};
export type RuleType = (typeof RuleType)[keyof typeof RuleType];

export const RuleEntryType = {
    entries: "entries",
    image: "image",
    inline: "inline",
    inset: "inset",
    list: "list",
    section: "section",
    table: "table",
};
export type RuleEntryType = (typeof RuleEntryType)[keyof typeof RuleEntryType];

export type RuleAdditionalSource = {
    source: string;
    page: number;
};
export type RuleReprintedAs =
    | {
          source: string;
          page: number;
      }
    | string;

export type Rule = {
    name: string;
    source: string;
    page: number;
    freeRules2024?: boolean;
    ruleType?: RuleType;
    entries: Entry[];
    type?: RuleEntryType;
    additionalSources?: RuleAdditionalSource[];
    reprintedAs?: RuleReprintedAs;
    srd?: boolean;
};

export function getRuleId(rule: Pick<Rule, "source" | "name">) {
    return `${rule.name.toLowerCase()}_${rule.source.toLowerCase()}`;
}
