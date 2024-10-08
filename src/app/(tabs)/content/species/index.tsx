import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getSpeciesId, Species } from "@/src/types/species";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Species>();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Species, any>[];

export default function SpeciesPage() {
    const { species } = useData();
    const [search, setSearch] = React.useState("");

    const filteredSpecies = species.filter((s) =>
        s.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredSpecies}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/content/species/[id]",
                    params: { id: getSpeciesId(row.original) },
                })}
            />
        </View>
    );
}
