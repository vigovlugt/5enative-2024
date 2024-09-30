import { Entry } from "./entry";

export type Meta = {
    internalCopies: string[];
};

export type Class = {
    name: string;
    source: string;
    page: number;
    srd?: boolean;
    reprintedAs?: string[];
    edition: Edition;
    hd: HitDie;
    proficiency: string[];
    spellcastingAbility: string;
    casterProgression: string;
    spellsKnownProgression?: number[];
    optionalfeatureProgression?: ClassOptionalfeatureProgression[];
    startingProficiencies: ClassStartingProficiencies;
    startingEquipment: ClassStartingEquipment;
    multiclassing: ClassMulticlassing;
    classTableGroups: ClassTableGroup[];
    classFeatures: ClassFeatureClassFeature[];
    subclassTitle: string;
    hasFluff: boolean;
    hasFluffImages: boolean;
    primaryAbility?: ClassPrimaryAbility[];
    additionalSpells?: ClassAdditionalSpell[];
    featProgression?: ClassFeatProgression[];
};

export type ClassAdditionalSpell = {
    prepared: Prepared;
};

export type Prepared = {
    "1": string[];
};

export type ClassFeatureClassFeature =
    | {
          classFeature: string;
          gainSubclassFeature: boolean;
      }
    | string;

export type ClassTableGroup = {
    colLabels: string[];
    rows?: number[][];
    title?: string;
    rowsSpellProgression?: number[][];
};

export enum Edition {
    Classic = "classic",
    One = "one",
}

export type ClassFeatProgression = {
    name: string;
    category: string[];
    progression: Progression;
};

export type Progression = {
    "2": number;
};

export type HitDie = {
    number: number;
    faces: number;
};

export type ClassMulticlassing = {
    requirements?: Requirements;
    proficienciesGained: ClassStartingProficiencies;
};

export type ClassStartingProficiencies = {
    armor: Armor[];
    skills: Skill[];
    weapons: string[];
};

export enum Armor {
    Light = "light",
    Medium = "medium",
    Shield = "shield",
}

export type Skill = {
    choose: Choose;
};

export type Choose = {
    from: string[];
    count: number;
};

export type Requirements = {
    dex: number;
    wis: number;
};

export type ClassOptionalfeatureProgression = {
    name: string;
    featureType: string[];
    progression: Progression;
};

export type ClassPrimaryAbility = {
    dex: boolean;
    wis: boolean;
};

export type ClassStartingEquipment = {
    additionalFromBackground?: boolean;
    default?: string[];
    goldAlternative?: string;
    defaultData: DefaultDatum[];
    entries?: string[];
};

export type DefaultDatum = {
    a?: Array<AClass | string>;
    b?: Array<BClass | string>;
    _?: string[];
    A?: A[];
    B?: B[];
};

export type A = {
    item?: string;
    value?: number;
};

export type B = {
    value: number;
};

export type AClass = {
    item: string;
    quantity: number;
};

export type BClass = {
    equipmentType: string;
    quantity: number;
};

export type Subclass = {
    name: string;
    shortName: string;
    source: string;
    className: string;
    classSource: string;
    page?: number;
    reprintedAs?: string[];
    edition?: "one" | "classic";
    subclassFeatures?: string[];
    srd?: boolean;
    additionalSpells?: SubclassAdditionalSpell[];
    hasFluffImages?: boolean;
    fluff?: Fluff;
};

export type Copy = {
    name: string;
    source: string;
    shortName: string;
    className: string;
    classSource: string;
    _preserve?: Preserve;
};

export type Preserve = {
    page: boolean;
    otherSources: boolean;
    srd: boolean;
    basicRules: boolean;
    reprintedAs: boolean;
};

export type SubclassAdditionalSpell = {
    known?: { [key: string]: string[] };
    prepared?: { [key: string]: string[] };
};

export type Fluff = {
    _subclassFluff: Copy;
};

export type ClassFeature = {
    name: string;
    source: string;
    page: number;
    className: string;
    classSource: string;
    level: number;
    isClassFeatureVariant?: boolean;
    entries: Entry[];
    srd?: boolean;
    subclassShortName?: string;
    subclassSource?: string;
    header?: number;
};

export function getClassId(cls: Pick<Class, "name" | "source">) {
    return `${cls.name.toLowerCase()}_${cls.source}`;
}

export function getSubclassId(cls: Subclass) {
    return `${cls.className.toLowerCase()}_${cls.classSource}_${cls.shortName.toLowerCase()}_${cls.source}`;
}

export function getClassFeatureId(
    cls: Pick<
        ClassFeature,
        | "name"
        | "source"
        | "level"
        | "classSource"
        | "className"
        | "subclassShortName"
        | "subclassSource"
    >,
) {
    return (
        `${cls.className.toLowerCase()}_${cls.classSource}_` +
        (cls.subclassShortName
            ? `${cls.subclassShortName.toLowerCase()}_${cls.subclassSource}_`
            : "") +
        `${cls.level}_${cls.name.toLowerCase()}_${cls.source}`
    );
}

export function getClassFeatureName(
    cls: Pick<
        ClassFeature,
        "name" | "level" | "className" | "subclassShortName"
    >,
) {
    return `${cls.name} (${cls.className}${cls.subclassShortName ? ` ${cls.subclassShortName}` : ""} ${cls.level})`;
}
