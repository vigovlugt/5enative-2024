import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getConditionId, Condition } from "@/src/types/condition";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Condition>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Condition, any>[];

export default function ConditionsPage() {
    const { conditions } = useData();
    const [search, setSearch] = React.useState("");

    const filteredConditions = conditions.filter((condition) =>
        condition.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredConditions}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/content/conditions/[id]",
                    params: { id: getConditionId(row.original) },
                })}
            />
        </View>
    );
}
