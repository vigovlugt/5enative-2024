export type TableEntry = {
    type: "table";
    caption: string;
    colStyles: string[];
    colLabels: string[];
    rows: string[][];
};

export type EntriesEntry = {
    type: "entries";
    name?: string;
    entries: Entry[];
};

export type ItemEntry = {
    type: "item";
    name: string;
    entries?: Entry[];
    entry?: Entry;
};

export type ListEntry = {
    type: "list";
    style:
        | "list-hang-notitle"
        | "list-hang"
        | "list"
        | "list-indent"
        | "list-indent-notitle";
    items: Entry[];
};

export type RefSubclassFeatureEntry = {
    type: "refSubclassFeature";
    subclassFeature: string;
};

export type RefFeatEntry = {
    type: "refFeat";
    feat: string;
};

export type Entry =
    | string
    | TableEntry
    | EntriesEntry
    | ItemEntry
    | ListEntry
    | RefSubclassFeatureEntry
    | RefFeatEntry;
