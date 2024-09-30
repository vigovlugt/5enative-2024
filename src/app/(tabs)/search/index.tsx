import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getActionId, Action } from "@/src/types/action";
import { getRuleId } from "@/src/types/rule";
import { getSpellId } from "@/src/types/spell/spell";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { Href, useFocusEffect } from "expo-router";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { TextInput, View } from "react-native";
import { Text } from "@/src/components/text";
import { getClassFeatureId, getClassFeatureName } from "@/src/types/class";
import { getConditionId } from "@/src/types/condition";
import { getFeatId } from "@/src/types/feat";

export type SearchItemType =
    | "spell"
    | "rule"
    | "action"
    | "classFeature"
    | "feat"
    | "condition";

type SearchItem = {
    id: string;
    name: string;
    source: string;
    type: SearchItemType;
};

function itemTypeName(type: SearchItemType) {
    return {
        spell: "Spell",
        rule: "Rule",
        action: "Action",
        classFeature: "Class Feature",
        feat: "Feat",
        condition: "Condition",
    }[type];
}
function itemHref(item: SearchItem): Href<string | object> {
    switch (item.type) {
        case "action":
            return {
                pathname: "/content/actions/[id]",
                params: { id: item.id },
            } satisfies Href;
        case "rule":
            return {
                pathname: "/content/rules/[id]",
                params: { id: item.id },
            } satisfies Href;
        case "spell":
            return {
                pathname: "/content/spells/[id]",
                params: { id: item.id },
            } satisfies Href;
        case "classFeature":
            return {
                pathname: "/content/class-features/[id]",
                params: { id: item.id },
            } satisfies Href;
        case "feat":
            return {
                pathname: "/content/feats/[id]",
                params: { id: item.id },
            } satisfies Href;
        case "condition":
            return {
                pathname: "/content/conditions/[id]",
                params: { id: item.id },
            } satisfies Href;
    }
}

const columnHelper = createColumnHelper<SearchItem>();
const columns = [
    columnHelper.accessor("type", {
        header: "Type",
        cell: (cell) => itemTypeName(cell.row.original.type),
        meta: {
            maxWidth: 80,
        },
    }),
    columnHelper.accessor("name", {
        header: "Name",
        cell: (cell) => (
            <Text style={{ fontWeight: "bold" }}>{cell.row.original.name}</Text>
        ),
    }),
    columnHelper.accessor("source", {
        header: "Source",
        meta: {
            maxWidth: 70,
        },
    }),
] satisfies ColumnDef<SearchItem, any>[];

export default function SearchPage() {
    const { actions, rules, spells, conditions, classFeatures, feats } =
        useData();
    const [search, setSearch] = React.useState("");
    const searchRef = useRef<TextInput>(null);

    const searchItems: SearchItem[] = useMemo(
        () => [
            ...actions.map(
                (action) =>
                    ({
                        source: action.source,
                        name: action.name,
                        type: "action",
                        id: getActionId(action),
                    }) as const,
            ),
            ...rules.map(
                (rule) =>
                    ({
                        source: rule.source,
                        name: rule.name,
                        type: "rule",
                        id: getRuleId(rule),
                    }) as const,
            ),
            ...spells.map(
                (spell) =>
                    ({
                        source: spell.source,
                        name: spell.name,
                        type: "spell",
                        id: getSpellId(spell),
                    }) as const,
            ),
            ...conditions.map(
                (condition) =>
                    ({
                        source: condition.source,
                        name: condition.name,
                        type: "condition",
                        id: getConditionId(condition),
                    }) as const,
            ),
            ...classFeatures.map(
                (classFeature) =>
                    ({
                        source: classFeature.source,
                        name: getClassFeatureName(classFeature),
                        type: "classFeature",
                        id: getClassFeatureId(classFeature),
                    }) as const,
            ),
            ...feats.map(
                (feat) =>
                    ({
                        source: feat.source,
                        name: feat.name,
                        type: "feat",
                        id: getFeatId(feat),
                    }) as const,
            ),
        ],
        [actions, rules, spells, conditions, classFeatures, feats],
    );

    const filteredItems = searchItems.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
    );

    useFocusEffect(
        useCallback(() => {
            if (searchRef.current) {
                searchRef.current.focus();
            }
        }, [searchRef.current]),
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
                    ref={searchRef}
                />
            </View>
            <DataTable
                columns={columns}
                data={filteredItems}
                itemHeight={38}
                href={(row) => itemHref(row.original)}
                onPress={() => setSearch("")}
            />
        </View>
    );
}
