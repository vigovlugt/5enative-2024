import { Entry } from "./entry";

export type Species = {
    name: string;
    source: string;
    page: number;
    size?: SpeciesSize[];
    speed?: SpeciesSpeed;
    ability?: SpeciesAbility[];
    traitTags?: string[] | null;
    languageProficiencies?: SpeciesLanguageProficiency[];
    entries?: Entry[];
    otherSources?: Source[];
    reprintedAs?: string[];
    age?: SpeciesAge;
    soundClip?: SpeciesSoundClip;
    hasFluff?: boolean;
    hasFluffImages?: boolean;
    lineage?: boolean | string;
    additionalSpells?: SpeciesAdditionalSpell[];
    darkvision?: number;
    resist?: SpeciesResist[];
    _versions?: RaceVersion[];
    heightAndWeight?: SpeciesHeightAndWeight | null;
    creatureTypes?: string[];
    sizeEntry?: SpeciesSizeEntry;
    skillProficiencies?: SpeciesSkillProficiency[];
    creatureTypeTags?: string[];
    toolProficiencies?: SpeciesToolProficiency[];
    conditionImmune?: string[];
    _copy?: Copy;
    feats?: SpeciesFeat[];
    srd?: boolean;
    basicRules?: boolean;
    weaponProficiencies?: SpeciesWeaponProficiency[];
    freeRules2024?: boolean;
    additionalSources?: Source[];
    blindsight?: number;
    immune?: SpeciesImmune[];
    armorProficiencies?: SpeciesArmorProficiency[];
    vulnerable?: string[];
};

export type Copy = {
    name: string;
    source: string;
    _mod: CopyMod;
    _preserve?: Preserve;
};

export type CopyMod = {
    entries: Entr[] | Entr;
};

export type Entr = {
    mode: Mode;
    replace?: string;
    items?: SpeciesSizeEntry;
    names?: string;
};

export type SpeciesSizeEntry = {
    name: string;
    type: SizeEntryType;
    entries?: string[];
    entry?: string;
};

export enum SizeEntryType {
    Entries = "entries",
    Item = "item",
    ItemSpell = "itemSpell",
}

export enum Mode {
    AppendArr = "appendArr",
    RemoveArr = "removeArr",
    ReplaceArr = "replaceArr",
}

export type Preserve = {
    reprintedAs: boolean;
};

export type RaceVersion = {
    name?: string;
    source?: PurpleSource;
    _mod?: PurpleMod;
    traitTags?: string[];
    skillProficiencies?: null;
    darkvision?: number | null;
    _abstract?: Abstract;
    _implementations?: PurpleImplementation[];
    additionalSpells?: VersionAdditionalSpell[] | null;
    speed?: number;
    resist?: SpeciesImmune[];
};

export type Abstract = {
    name: string;
    source: string;
    _mod: AbstractMod;
};

export type AbstractMod = {
    entries: Entr[];
};

export type PurpleImplementation = {
    _variables: PurpleVariables;
    resist?: string[];
};

export type PurpleVariables = {
    color: string;
    damageType: string;
};

export type PurpleMod = {
    entries: EntriesClass;
};

export type EntriesClass = {
    mode: Mode;
    replace?: string;
    items: Items;
};

export type Items = {
    name: string;
    type: SizeEntryType;
    entries: Entry[];
};

export type VersionAdditionalSpell = {
    innate?: { [key: string]: AdditionalSpellInnateClass };
    ability: AdditionalSpellAbilityClass;
    known: PurpleKnown;
};

export type AdditionalSpellAbilityClass = {
    choose: FromElement[];
};

export enum FromElement {
    Cha = "cha",
    Con = "con",
    Dex = "dex",
    Int = "int",
    Str = "str",
    Wis = "wis",
}

export type AdditionalSpellInnateClass = {
    daily: PurpleDaily;
};

export type PurpleDaily = {
    "1"?: string[];
    pb?: string[];
};

export type PurpleKnown = {
    "1": string[] | Purple1;
};

export type Purple1 = {
    _: The1__[];
};

export type The1__ = {
    choose: string;
};

export enum SpeciesImmune {
    Acid = "acid",
    Cold = "cold",
    Fire = "fire",
    Lightning = "lightning",
    Necrotic = "necrotic",
    Poison = "poison",
}

export enum PurpleSource {
    Mpmm = "MPMM",
    Psk = "PSK",
    Tce = "TCE",
    Xphb = "XPHB",
}

export type SpeciesAbility = {
    dex?: number;
    wis?: number;
    cha?: number;
    choose?: AbilityChoose;
    str?: number;
    int?: number;
    con?: number;
};

export type AbilityChoose = {
    from: FromElement[];
    count?: number;
    amount?: number;
};

export type Source = {
    source: string;
    page?: number;
};

export type SpeciesAdditionalSpell = {
    innate?: { [key: string]: string[] | PurpleInnate };
    ability?: AdditionalSpellAbilityClass | FromElement;
    known?: FluffyKnown;
};

export type PurpleInnate = {
    daily: RESTClass;
};

export type RESTClass = {
    "1": string[];
};

export type FluffyKnown = {
    "1"?: string[] | Fluffy1;
    _?: Known[];
};

export type Fluffy1 = {
    rest: RESTClass;
};

export type Known = {
    choose: string;
    count: number;
};

export type SpeciesAge = {
    mature?: number;
    max: number;
};

export type SpeciesArmorProficiency = {
    light: boolean;
};

export type SpeciesFeat = {
    any?: number;
    anyFromCategory?: AnyFromCategory;
};

export type AnyFromCategory = {
    category: string;
    count: number;
};

export type SpeciesHeightAndWeight = {
    baseHeight: number;
    heightMod: HeightMod;
    baseWeight: number;
    weightMod?: string;
};

export enum HeightMod {
    The1D10 = "1d10",
    The2D10 = "2d10",
    The2D12 = "2d12",
    The2D4 = "2d4",
    The2D6 = "2d6",
    The2D8 = "2d8",
}

export type SpeciesLanguageProficiency = {
    auran?: boolean;
    common?: boolean;
    other?: boolean;
    celestial?: boolean;
    anyStandard?: number;
    goblin?: boolean;
    sylvan?: boolean;
    draconic?: boolean;
    dwarvish?: boolean;
    elvish?: boolean;
    giant?: boolean;
    primordial?: boolean;
    gnomish?: boolean;
    terran?: boolean;
    undercommon?: boolean;
    orc?: boolean;
    halfling?: boolean;
    aquan?: boolean;
    choose?: ChooseElement;
    infernal?: boolean;
    abyssal?: boolean;
};

export type ChooseElement = {
    from: string[];
    count?: number;
};

export enum LineageEnum {
    Vrgr = "VRGR",
}

export type SpeciesResist =
    | {
          choose: ResistChoose;
      }
    | string;

export type ResistChoose = {
    from: string[];
};

export const SpeciesSize = {
    medium: "M",
    small: "S",
    varies: "V",
};
export type SpeciesSize = (typeof SpeciesSize)[keyof typeof SpeciesSize];
export function speciesSizeName(size: SpeciesSize) {
    return {
        M: "Medium",
        S: "Small",
        V: "Varies",
    }[size];
}

export type SpeciesSkillProficiency = {
    intimidation?: boolean;
    perception?: boolean;
    stealth?: boolean;
    choose?: ChooseElement;
    any?: number;
    athletics?: boolean;
    acrobatics?: boolean;
    performance?: boolean;
    persuasion?: boolean;
    survival?: boolean;
};

export type SpeciesSoundClip = {
    type: SoundClipType;
    path: string;
};

export enum SoundClipType {
    Internal = "internal",
}

export type SpeciesSpeed =
    | {
          walk: number;
          fly?: boolean | number;
          swim?: boolean | number;
          climb?: boolean | number;
          burrow?: number;
      }
    | number;

export type SpeciesToolProficiency = {
    any?: number;
    choose?: ResistChoose;
    anyArtisansTool?: number;
    "tinker's tools"?: boolean;
    "poisoner's kit"?: boolean;
    "musical instrument"?: boolean;
};

export type SpeciesWeaponProficiency = {
    "battleaxe|phb"?: boolean;
    "handaxe|phb"?: boolean;
    "light hammer|phb"?: boolean;
    "warhammer|phb"?: boolean;
    "longsword|phb"?: boolean;
    "shortsword|phb"?: boolean;
    "shortbow|phb"?: boolean;
    "longbow|phb"?: boolean;
    firearms?: boolean;
    choose?: WeaponProficiencyChoose;
    "spear|phb"?: boolean;
    "javelin|phb"?: boolean;
};

export type WeaponProficiencyChoose = {
    fromFilter: string;
    count: number;
};

export type Subspecies = {
    name?: string;
    source: string;
    raceName: string;
    raceSource: string;
    page: number;
    reprintedAs?: string[];
    ability?: SpeciesAbility[];
    entries?: Entry[];
    hasFluff?: boolean;
    hasFluffImages?: boolean;
    skillProficiencies?: SubspeciesSkillProficiency[] | null;
    speed?: SpeciesSpeed;
    traitTags?: string[];
    toolProficiencies?: SubspeciesToolProficiency[];
    srd?: boolean;
    _versions?: SubspeciesVersion[];
    darkvision?: number;
    resist?: SpeciesImmune[] | null;
    overwrite?: SubspeciesOverwrite;
    otherSources?: Source[] | null;
    languageProficiencies?: SubspeciesLanguageProficiency[];
    additionalSpells?: SubspeciesAdditionalSpell[] | null;
    basicRules?: boolean;
    heightAndWeight?: SpeciesHeightAndWeight;
    armorProficiencies?: SubspeciesArmorProficiency[];
    alias?: string[];
    weaponProficiencies?: { [key: string]: boolean }[];
    skillToolLanguageProficiencies?: SkillToolLanguageProficiency[];
    age?: SpeciesAge;
    soundClip?: SpeciesSoundClip;
    feats?: SkillProficiencyElement[];
};

export type SubspeciesVersion = {
    _abstract?: Abstract;
    _implementations?: FluffyImplementation[];
    name?: string;
    source?: FluffySource;
    _mod?: FluffyMod;
    skillProficiencies?: SkillProficiencyElement[] | null;
    speed?: FluffySpeed | number;
    overwrite?: VersionOverwrite;
    additionalSpells?: null;
    weaponProficiencies?: null;
};

export type FluffyImplementation = {
    _variables: FluffyVariables;
    resist?: SpeciesImmune[];
};

export type FluffyVariables = {
    color: string;
    damageType: SpeciesImmune;
    area: Area;
    savingThrow: SavingThrow;
};

export enum Area {
    The15FootCone = "15-foot cone",
    The5FootWide30FootLongLine = "5-foot-wide, 30-foot-long line",
}

export enum SavingThrow {
    Constitution = "Constitution",
    Dexterity = "Dexterity",
}

export type FluffyMod = {
    entries: Entr;
};

export type VersionOverwrite = {
    skillProficiencies: boolean;
};

export type SkillProficiencyElement = {
    any: number;
};

export enum FluffySource {
    Scag = "SCAG",
}

export type FluffySpeed = {
    walk: number;
    swim: number;
};

export type SubspeciesAdditionalSpell = {
    innate?: { [key: string]: string[] | FluffyInnate };
    ability: AdditionalSpellAbilityClass | FromElement;
    expanded?: Expanded;
    known?: TentacledKnown;
};

export type Expanded = {
    s1: string[];
    s2: string[];
    s3: string[];
    s4: string[];
    s5: string[];
};

export type FluffyInnate = {
    daily?: RESTClass;
    rest?: RESTClass;
};

export type TentacledKnown = {
    "1": string[] | Tentacled1;
};

export type Tentacled1 = {
    rest?: RESTClass;
    _?: The1__[];
};

export type SubspeciesArmorProficiency = {
    light: boolean;
    medium: boolean;
};

export type SubspeciesLanguageProficiency = {
    common: boolean;
    dwarvish?: boolean;
    undercommon?: boolean;
    elvish?: boolean;
    anyStandard?: number;
    aquan?: boolean;
    gnomish?: boolean;
    goblin?: boolean;
    other?: boolean;
};

export type SubspeciesOverwrite = {
    ability?: boolean;
    traitTags?: boolean;
    languageProficiencies?: boolean;
    skillProficiencies?: boolean;
};

export type SubspeciesSkillProficiency = {
    perception?: boolean;
    "animal handling"?: boolean;
    any?: number;
    athletics?: boolean;
    survival?: boolean;
    intimidation?: boolean;
    history?: boolean;
    nature?: boolean;
    "sleight of hand"?: boolean;
    stealth?: boolean;
    deception?: boolean;
    persuasion?: boolean;
    acrobatics?: boolean;
};

export type SkillToolLanguageProficiency = {
    choose: ChooseElement[];
};

export type TentacledSpeed = {
    walk: number;
    swim?: boolean | number;
    fly?: number;
};

export type SubspeciesToolProficiency = {
    any?: number;
    "tinker's tools"?: boolean;
    "thieves' tools"?: boolean;
    anyArtisansTool?: number;
    "navigator's tools"?: boolean;
};

export function getSpeciesId(species: Pick<Species, "name" | "source">) {
    return `${species.name.toLowerCase()}_${species.source.toLowerCase()}`;
}
