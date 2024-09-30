import { Entry } from "./entry";

export type Welcome = {
    feat: Feat[];
};

export type Feat = {
    name: string;
    source: string;
    page?: number;
    prerequisite?: FeatPrerequisite[];
    ability?: FeatAbility[];
    additionalSpells?: FeatAdditionalSpell[];
    entries: Entry[];
    freeRules2024?: boolean;
    category?: FeatCategory;
    repeatable?: boolean;
    reprintedAs?: string[];
    hasFluffImages?: boolean;
    toolProficiencies?: FeatToolProficiency[];
    senses?: Sense[];
    resist?: FeatResist;
    skillProficiencies?: FeatSkillProficiency[];
    expertise?: FeatExpertise[];
    optionalfeatureProgression?: FeatOptionalFeatureProgression[];
    languageProficiencies?: FeatLanguageProficiency[];
    srd?: boolean;
    weaponProficiencies?: FeatWeaponProficiency[];
    armorProficiencies?: FeatArmorProficiency[];
    bonusSenses?: FeatBonusSense[];
    traitTags?: string[];
    savingThrowProficiencies?: FeatSavingThrowProficiency[];
    skillToolLanguageProficiencies?: FeatSkillToolLanguageProficiency[];
    additionalSources?: FeatAdditionalSource[];
};

export type FeatAbility = {
    con?: number;
    choose?: AbilityChoose;
    hidden?: boolean;
    cha?: number;
    max?: number;
    dex?: number;
    str?: number;
    int?: number;
};

export type AbilityChoose = {
    from: FromElement[];
    amount?: number;
    count?: number;
    entry?: string;
};

export enum FromElement {
    Cha = "cha",
    Con = "con",
    Dex = "dex",
    Inherit = "inherit",
    Int = "int",
    Str = "str",
    Wis = "wis",
}

export type FeatAdditionalSource = {
    source: string;
    page: number;
};

export type FeatAdditionalSpell = {
    ability?: AbilityAbilityClass | FromElement;
    innate?: Innate;
    known?: AdditionalSpellKnown;
    name?: string;
    prepared?: { [key: string]: Prepared[] };
};

export type AbilityAbilityClass = {
    choose: FromElement[];
};

export type Innate = {
    _?: Empty;
    known?: InnateKnown;
};

export type Empty = {
    rest?: REST;
    daily?: Daily;
    will?: string[];
    ritual?: string[];
};

export type Daily = {
    "1e"?: Array<The1EClass | string>;
    "1"?: Array<Prepared | string>;
};

export type Prepared = {
    choose: string;
    count?: number;
};

export type The1EClass = {
    choose: FeatChoose | string;
};

export type FeatChoose = {
    from: string[];
    count?: number;
};

export type REST = {
    "1": The1[];
};

export type The1 = {
    choose: string;
};

export type InnateKnown = {
    _: string[];
};

export type AdditionalSpellKnown = {
    _: Array<Prepared | string>;
};

export type FeatArmorProficiency = {
    heavy?: boolean;
    light?: boolean;
    shield?: boolean;
    medium?: boolean;
};

export type FeatBonusSense = {
    darkvision: number;
};

export const FeatCategory = {
    general: "G",
    origin: "O",
    fightingStyle: "FS",
    fightingStyleReplacementPaladin: "FS:P",
    fightingStyleReplacementRanger: "FS:R",
    epicBoon: "EB",
};
export type FeatCategory = (typeof FeatCategory)[keyof typeof FeatCategory];

export function featCategoryName(category: FeatCategory) {
    return {
        G: "General",
        O: "Origin",
        FS: "Fighting Style",
        "FS:P": "Fighting Style Replacement (Paladin)",
        "FS:R": "Fighting Style Replacement (Ranger)",
        EB: "Epic Boon",
    }[category];
}

export type PurpleEntry = {
    type: EntryType;
    items?: Array<ItemClass | string>;
    caption?: string;
    colLabels?: string[];
    colStyles?: string[];
    rows?: Array<string[]>;
    entries?: Array<FluffyEntry | string>;
    name?: string;
    style?: Style;
    page?: number;
};

export type FluffyEntry = {
    type: EntryType;
    entries?: TentacledEntry[];
    caption?: string;
    colStyles?: string[];
    colLabels?: string[];
    rows?: Array<string[]>;
};

export type TentacledEntry = {
    type: EntryType;
    name: string;
    entries: string[];
};

export enum EntryType {
    Entries = "entries",
    Inset = "inset",
    List = "list",
    Section = "section",
    Table = "table",
}

export type ItemClass = {
    type: ItemType;
    name?: string;
    entries?: Array<FluffyEntry | string>;
    items?: string[];
};

export enum ItemType {
    Item = "item",
    List = "list",
}

export enum Style {
    ListHangNotitle = "list-hang-notitle",
}

export type FeatExpertise = {
    anyProficientSkill: number;
};

export type FeatLanguageProficiency = {
    sylvan?: boolean;
    any?: number;
};

export type FeatOptionalFeatureProgression = {
    name: string;
    featureType: string[];
    progression: Progression;
};

export type Progression = {
    "*": number;
};

export type FeatPrerequisite = {
    other?: string;
    level?: LevelClass | number;
    ability?: PrerequisiteAbility[];
    feat?: string[];
    otherSummary?: OtherSummary;
    feature?: Feature[];
    spellcasting2020?: boolean;
    race?: Race[];
    spellcastingFeature?: boolean;
    campaign?: string[];
    spellcasting?: boolean;
    proficiency?: Proficiency[];
    spellcastingPrepared?: boolean;
    background?: Background[];
};

export type PrerequisiteAbility = {
    cha?: number;
    str?: number;
    dex?: number;
    wis?: number;
    int?: number;
    con?: number;
};

export type Background = {
    name: string;
    displayEntry: string;
};

export enum Feature {
    FightingStyle = "Fighting Style",
}

export type LevelClass = {
    level: number;
    class: Class;
};

export type Class = {
    name: string;
    visible: boolean;
};

export type OtherSummary = {
    entry: string;
    entrySummary: string;
};

export type Proficiency = {
    weapon?: string;
    armor?: string;
    weaponGroup?: string;
};

export type Race = {
    name: string;
    subrace?: string;
    displayEntry?: string;
};

export type FeatResist =
    | {
          choose: FeatChoose;
      }
    | string;

export type FeatSavingThrowProficiency = {
    choose: SavingThrowProficiencyChoose;
};

export type SavingThrowProficiencyChoose = {
    from: string[];
};

export type Sense = {
    blindsight?: number;
    truesight?: number;
};

export type FeatSkillProficiency = {
    athletics?: boolean;
    acrobatics?: boolean;
    "sleight of hand"?: boolean;
    stealth?: boolean;
    arcana?: boolean;
    history?: boolean;
    investigation?: boolean;
    nature?: boolean;
    religion?: boolean;
    "animal handling"?: boolean;
    insight?: boolean;
    medicine?: boolean;
    perception?: boolean;
    survival?: boolean;
    deception?: boolean;
    intimidation?: boolean;
    performance?: boolean;
    persuasion?: boolean;
    choose?: SavingThrowProficiencyChoose;
    any?: number;
};

export type FeatSkillToolLanguageProficiency = {
    choose: FeatChoose[];
};

export type FeatToolProficiency = {
    anyArtisansTool?: number;
    "cook's utensils"?: boolean;
    choose?: FeatChoose;
    anyMusicalInstrument?: number;
    "poisoner's kit"?: boolean;
    any?: number;
};

export type FeatWeaponProficiency = {
    firearms?: boolean;
    martial?: boolean;
    improvised?: boolean;
    choose?: WeaponProficiencyChoose;
};

export type WeaponProficiencyChoose = {
    fromFilter: string;
    count: number;
};

export function getFeatId(feat: Pick<Feat, "source" | "name">) {
    return `${feat.name.toLowerCase()}_${feat.source.toLowerCase()}`;
}
