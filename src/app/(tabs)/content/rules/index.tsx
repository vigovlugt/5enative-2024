import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getRuleId, Rule } from "@/src/types/rule";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Rule>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Rule, any>[];

export default function RulesPage() {
    const { rules } = useData();
    const [search, setSearch] = React.useState("");

    const filteredRules = rules.filter((rule) =>
        rule.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredRules}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/rules/[id]",
                    params: { id: getRuleId(row.original) },
                })}
            />
        </View>
    );
}
