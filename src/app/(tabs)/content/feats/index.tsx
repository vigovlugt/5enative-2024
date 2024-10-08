import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getFeatId, Feat } from "@/src/types/feat";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Feat>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Feat, any>[];

export default function FeatsPage() {
    const { feats } = useData();
    const [search, setSearch] = React.useState("");

    const filteredFeats = feats.filter((feat) =>
        feat.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredFeats}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/feats/[id]",
                    params: { id: getFeatId(row.original) },
                })}
            />
        </View>
    );
}
