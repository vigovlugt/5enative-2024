import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getActionId, Action } from "@/src/types/action";
import { getRuleId } from "@/src/types/rule";
import { getSpellId } from "@/src/types/spell/spell";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Href } from "expo-router";
import React from "react";
import { View } from "react-native";

export type SearchItemType = "spell" | "rule" | "action";

type SearchItem = {
    source: string;
    name: string;
    type: SearchItemType;
};

function itemTypeName(type: SearchItemType) {
    return {
        spell: "Spell",
        rule: "Rule",
        action: "Action",
    }[type];
}

function itemHref(item: SearchItem): Href<string | object> {
    switch (item.type) {
        case "action":
            return {
                pathname: "/content/actions/[id]",
                params: { id: getActionId(item) },
            } satisfies Href;
        case "rule":
            return {
                pathname: "/content/rules/[id]",
                params: { id: getRuleId(item) },
            } satisfies Href;
        case "spell":
            return {
                pathname: "/content/spells/[id]",
                params: { id: getSpellId(item) },
            } satisfies Href;
    }
}

const columnHelper = createColumnHelper<SearchItem>();
const columns = [
    columnHelper.accessor("type", {
        header: "Type",
        cell: (cell) => itemTypeName(cell.row.original.type),
        meta: {
            maxWidth: 60,
        },
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("source", {
        header: "Source",
        meta: {
            maxWidth: 70,
        },
    }),
] satisfies ColumnDef<SearchItem, any>[];

export default function SearchPage() {
    const { actions, rules, spells } = useData();
    const [search, setSearch] = React.useState("");

    const searchItems: SearchItem[] = [
        ...actions.map(
            (action) =>
                ({
                    source: action.source,
                    name: action.name,
                    type: "action",
                }) as const,
        ),
        ...rules.map(
            (rule) =>
                ({
                    source: rule.source,
                    name: rule.name,
                    type: "rule",
                }) as const,
        ),
        ...spells.map(
            (spell) =>
                ({
                    source: spell.source,
                    name: spell.name,
                    type: "spell",
                }) as const,
        ),
    ];

    const filteredItems = searchItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
    );

    return (
        <View
            style={{
                flex: 1,
                padding: 8,
                gap: 8,
            }}
        >
            <View>
                <Input
                    value={search}
                    onChangeText={setSearch}
                    placeholder="Search..."
                    placeholderTextColor={"#666"}
                />
            </View>
            <DataTable
                columns={columns}
                data={filteredItems}
                itemHeight={38}
                href={(row) => itemHref(row.original)}
            />
        </View>
    );
}
