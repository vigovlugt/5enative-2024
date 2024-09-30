import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getSpellId, Spell } from "@/src/types/spell/spell";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<Spell>();
const columns = [
    columnHelper.accessor((s) => s.level, {
        id: "level",
        header: "Lvl",
        meta: {
            maxWidth: 38,
            textAlign: "center",
        },
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<Spell, any>[];

export default function SpellsPage() {
    const { spells } = useData();
    const [search, setSearch] = React.useState("");

    const filteredSpells = spells.filter((spell) =>
        spell.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredSpells}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/content/spells/[id]",
                    params: { id: getSpellId(row.original) },
                })}
            />
        </View>
    );
}
