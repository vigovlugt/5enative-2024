export type TableEntry = {
    type: "table";
    caption: string;
    colStyles: string[];
    colLabels: string[];
    rows: string[][];
};

export type EntriesEntry = {
    type: "entries";
    caption: string;
    entries: Entry[];
};

export type ItemEntry = {
    type: "item";
    name: string;
    entries: Entry[];
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

export type Entry = string | TableEntry | EntriesEntry | ItemEntry | ListEntry;
