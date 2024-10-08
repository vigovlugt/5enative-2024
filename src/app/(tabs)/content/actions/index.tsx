import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getActionId, Action } from "@/src/types/action";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Action>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Action, any>[];

export default function ActionsPage() {
    const { actions } = useData();
    const [search, setSearch] = React.useState("");

    const filteredActions = actions.filter((action) =>
        action.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredActions}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/actions/[id]",
                    params: { id: getActionId(row.original) },
                })}
            />
        </View>
    );
}
