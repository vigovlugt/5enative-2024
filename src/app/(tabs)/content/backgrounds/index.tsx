import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getBackgroundId, Background } from "@/src/types/background";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Background>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Background, any>[];

export default function BackgroundsPage() {
    const { backgrounds } = useData();
    const [search, setSearch] = React.useState("");

    const filteredBackgrounds = backgrounds.filter((background) =>
        background.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredBackgrounds}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/backgrounds/[id]",
                    params: { id: getBackgroundId(row.original) },
                })}
            />
        </View>
    );
}
