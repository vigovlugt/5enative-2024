import { Entry } from "./entry";

export type Background = {
    name: string;
    source: string;
    page: number;
    srd?: boolean;
    basicRules?: boolean;
    reprintedAs?: string[];
    skillProficiencies?: BackgroundSkillProficiency[];
    languageProficiencies?: BackgroundLanguageProficiency[];
    startingEquipment?: BackgroundStartingEquipment[];
    entries?: Entry[];
    hasFluff?: boolean;
    freeRules2024?: boolean;
    edition?: "one";
    ability?: BackgroundAbility[];
    feats?: { [key: string]: boolean }[];
    toolProficiencies?: BackgroundToolProficiency[];
    hasFluffImages?: boolean;
    fromFeature?: BackgroundFromFeature;
    _copy?: Copy;
    additionalSpells?: BackgroundAdditionalSpell[];
    additionalSources?: BackgroundSource[];
    prerequisite?: BackgroundPrerequisite[];
    skillToolLanguageProficiencies?: BackgroundSkillToolLanguageProficiency[];
    otherSources?: BackgroundSource[];
    weaponProficiencies?: BackgroundWeaponProficiency[];
};

export type Copy = {
    name: string;
    source: CopySource;
    _mod?: Mod;
};

export type Mod = {
    entries: EntriesEntry[] | EntriesClass;
};

export type EntriesEntry = {
    mode: Mode;
    index?: number;
    items: ItemsClass;
    replace?: ReplaceClass | string;
};

export type ItemsClass = {
    type: ItemsType;
    name?: string;
    page?: number;
    entries?: string[];
    style?: "list-hang-notitle";
    items?: PurpleItem[];
    data?: ItemsData;
};

export type ItemsData = {
    isFeature: boolean;
};

export type PurpleItem = {
    type: "item";
    name: string;
    entry: string;
};

export type ItemsType = "entries" | "list" | "table" | "inset" | "section";

export type Mode = "insertArr" | "replaceArr";

export type ReplaceClass = {
    index: number;
};

export type EntriesClass = {
    mode: Mode;
    index?: number;
    items: FluffyItem[] | ItemsClass;
    replace?: ReplaceClass | string;
};

export type FluffyItem = {
    name: string;
    type: ItemsType;
    entries: Array<PurpleEntry | string>;
    data?: ItemsData;
};

export type PurpleEntry = {
    type: ItemsType;
    caption?: string;
    colLabels?: string[];
    colStyles?: ColStyle[];
    rows?: Array<string[]>;
    name?: string;
    entries?: string[];
};

export type ColStyle =
    | "col-1 text-center"
    | "col-11"
    | "col-2 text-center"
    | "col-10"
    | "text-center col-2"
    | "col-5"
    | "col-6"
    | "col-6 text-center"
    | "col-4"
    | "col-7";

export type CopySource = "PHB" | "PSA" | "TDCSR" | "DoDk";

export type BackgroundAbility = {
    choose: AbilityChoose;
};

export type AbilityChoose = {
    weighted: Weighted;
};

export type Weighted = {
    from: From[];
    weights: number[];
};

export type From = "int" | "wis" | "cha" | "str" | "dex" | "con";

export type BackgroundSource = {
    source: AdditionalSourceSource;
    page: number;
};

export type AdditionalSourceSource = "PHB" | "CoS";

export type BackgroundAdditionalSpell = {
    expanded: Expanded;
};

export type Expanded = {
    s0?: string[];
    s1: string[];
    s2: string[];
    s3: string[];
    s4: string[];
    s5: string[];
};

export type FluffyEntry = {
    type: ItemsType;
    style?: "list-hang-notitle";
    items?: EntryItem[];
    name?: string;
    entries?: Array<TentacledEntry | string>;
    data?: EntryData;
    page?: number;
    id?: string;
    caption?: string;
    colLabels?: string[];
    colStyles?: string[];
    rows?: Array<string[]>;
};

export type EntryData = {
    isFeature: boolean;
    isAlternateFeature?: boolean;
};

export type TentacledEntry = {
    type: ItemsType;
    colLabels?: string[];
    colStyles?: ColStyle[];
    rows?: Array<Array<number | string>>;
    caption?: string;
    name?: string;
    page?: number;
    entries?: Array<StickyEntry | string>;
    style?: "list-hang-notitle";
    items?: EntryItem[];
};

export type StickyEntry = {
    type: ItemsType;
    caption: string;
    colLabels: ColLabel[];
    colStyles: ColStyle[];
    rows: Array<string[]>;
};

export type ColLabel = "d6" | "Trinket" | "Personality Trait";

export type EntryItem = {
    type: "item";
    name: string;
    entries?: string[];
    entry?: string;
};

export type BackgroundFromFeature = {
    feats: boolean;
    additionalSpells?: boolean;
};

export type BackgroundLanguageProficiency = {
    anyStandard?: number;
    primordial?: boolean;
    choose?: LanguageProficiencyChoose;
    dwarvish?: boolean;
    "thieves' cant"?: boolean;
    draconic?: boolean;
    undercommon?: boolean;
    giant?: boolean;
    any?: number;
    elvish?: boolean;
    other?: boolean;
    auran?: boolean;
};

export type LanguageProficiencyChoose = {
    from: string[];
    count?: number;
};

export type BackgroundPrerequisite = {
    level?: Level;
    campaign?: string[];
};

export type Level = {
    level: number;
    class: Class;
};

export type Class = {
    name: string;
    visible: boolean;
};

export type BackgroundSkillProficiency = {
    insight?: boolean;
    religion?: boolean;
    history?: boolean;
    survival?: boolean;
    investigation?: boolean;
    persuasion?: boolean;
    nature?: boolean;
    choose?: LanguageProficiencyChoose;
    acrobatics?: boolean;
    athletics?: boolean;
    intimidation?: boolean;
    deception?: boolean;
    "animal handling"?: boolean;
    perception?: boolean;
    performance?: boolean;
    "sleight of hand"?: boolean;
    stealth?: boolean;
    any?: number;
    medicine?: boolean;
    arcana?: boolean;
};

export type BackgroundSkillToolLanguageProficiency = {
    anyLanguage?: number;
    anyTool?: number;
};

export type BackgroundStartingEquipment = {
    _?: Array<AClass | string>;
    a?: Array<AClass | string>;
    b?: Array<AClass | string>;
    c?: C[];
    d?: C[];
};

export type AClass = {
    item?: string;
    displayName?: string;
    special?: string;
    quantity?: number;
    containsValue?: number;
    equipmentType?: EquipmentType;
    worthValue?: number;
    value?: number;
};

export type EquipmentType = "toolArtisan" | "instrumentMusical" | "setGaming";

export type C = {
    special: string;
};

export type BackgroundToolProficiency = {
    "calligrapher's supplies"?: boolean;
    choose?: LanguageProficiencyChoose;
    anyArtisansTool?: number;
    "herbalism kit"?: boolean;
    "vehicles (land)"?: boolean;
    "disguise kit"?: boolean;
    "gaming set"?: boolean;
    "musical instrument"?: boolean;
    "forgery kit"?: boolean;
    "thieves' tools"?: boolean;
    "vehicles (water)"?: boolean;
    "carpenter's tools"?: boolean;
    "poisoner's kit"?: boolean;
    "artisan's tools"?: boolean;
    "cartographer's tools"?: boolean;
    "alchemist's supplies"?: boolean;
    "tinker's tools"?: boolean;
    "brewer's supplies"?: boolean;
    "cook's utensils"?: boolean;
    "vehicles (air)"?: boolean;
    "navigator's tools"?: boolean;
    "vehicles (space)"?: boolean;
};

export type BackgroundWeaponProficiency = {
    firearms: boolean;
};

export function getBackgroundId(b: Pick<Background, "source" | "name">) {
    return `${b.name.toLowerCase()}_${b.source.toLowerCase()}`;
}
