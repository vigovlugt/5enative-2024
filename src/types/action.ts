import { Entry } from "./entry";

export type ActionTime = {
    number: number;
    unit: ActionUnit;
};

export const ActionUnit = {
    action: "action",
    bonus: "bonus",
    reaction: "reaction",
};
export type ActionUnit = (typeof ActionUnit)[keyof typeof ActionUnit];

export type ActionReprintedAs =
    | {
          uid: string;
          tag: string;
      }
    | string;

export type Action = {
    name: string;
    source: string;
    page: number;
    srd?: boolean;
    basicRules?: boolean;
    time?: Array<ActionTime | string>;
    entries: Entry[];
    reprintedAs?: ActionReprintedAs[];
    seeAlsoAction?: string[];
    fromVariant?: string;
    freeRules2024?: boolean;
};

export function getActionId(action: Pick<Action, "name" | "source">) {
    return `${action.name.toLowerCase()}_${action.source.toLowerCase()}`;
}
