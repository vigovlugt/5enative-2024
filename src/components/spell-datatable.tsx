import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { getSpellId, Spell } from "../types/spell/spell";
import { DataTable } from "./data-table";

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

export function SpellDataTable({ spells }: { spells: Spell[] }) {
    return (
        <DataTable
            columns={columns}
            data={spells}
            itemHeight={38}
            href={(row) => ({
                pathname: "/content/spells/[id]",
                params: { id: getSpellId(row.original) },
            })}
        />
    );
}
