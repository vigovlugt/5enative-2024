import { AbilityCheck } from "../ability-check";
import { Area } from "../area-tag";
import { Damage } from "../damage";
import { Distance } from "../distance";
import { Duration } from "../duration";
import { Ends } from "../ends";
import { Entry } from "../entry";
import { Range } from "../range";
import { School } from "./school";
import { SpellAttack } from "./spell-attack";

export type Spell = {
    name: string;
    source: string;
    page: number;
    freeRules2024?: boolean;
    level: number;
    school: School;
    time: SpellTime[];
    range: SpellRange;
    components: SpellComponents;
    duration: SpellDuration[];
    entries: Entry[];
    entriesHigherLevel?: Entry[];
    scalingLevelDice?: SpellScalingLevelDice[] | SpellScalingLevelDice;
    damageInflict?: Damage[];
    savingThrow?: AbilityCheck[];
    miscTags?: string[];
    areaTags?: Area[];
    meta?: SpellMeta;
    conditionInflict?: string[];
    affectsCreatureType?: string[];
    hasFluffImages?: boolean;
    damageResist?: Damage[];
    spellAttack?: SpellAttack[];
    abilityCheck?: AbilityCheck[];
    conditionImmune?: string[];
    damageVulnerable?: Damage[];
    damageImmune?: Damage[];
};

export type SpellTime = {
    number: number;
    unit: string;
    condition?: string;
    note?: string;
};

export type SpellDuration = {
    type: Duration;
    duration?: SpellDurationDistance;
    concentration?: boolean;
    condition?: string;
    ends?: Ends[];
};

export type SpellDurationDistance = {
    type: Distance;
    amount: number;
};

export type SpellRange = {
    type: Range;
    distance: SpellRangeDistance;
};

export type SpellRangeDistance = {
    type: Distance;
    amount: number;
};

export type SpellComponents = {
    v?: boolean;
    s?: boolean;
    m?: SpellMaterialComponent;
};

export type SpellMaterialComponent = {
    text: string;
    cost: number;
    consume?: boolean;
};

export type SpellScalingLevelDice = {
    label: string;
    scaling: { [key: string]: string };
};

export type SpellMeta = {
    ritual: boolean;
};

export function getSpellId(spell: Pick<Spell, "source" | "name">) {
    return `${spell.name.toLowerCase()}_${spell.source.toLowerCase()}`;
}
