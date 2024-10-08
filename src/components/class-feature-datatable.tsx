import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { DataTable } from "./data-table";
import { ClassFeature, getClassFeatureId } from "../types/class";
import { View } from "react-native";
import { Text } from "./text";

const columnHelper = createColumnHelper<ClassFeature>();
const columns = [
    columnHelper.accessor("className", {
        header: "Class",
        meta: {
            maxWidth: 100,
        },
        cell: (cell) => (
            <View>
                <Text>{cell.getValue()}</Text>
                <Text
                    style={{
                        fontSize: 12,
                        color: "gray",
                    }}
                >
                    {cell.row.original.subclassShortName}
                </Text>
            </View>
        ),
    }),
    columnHelper.accessor("level", {
        header: "Lvl",
        meta: {
            maxWidth: 40,
            textAlign: "right",
        },
    }),
    columnHelper.accessor("name", {
        header: "Name",
    }),
] satisfies ColumnDef<ClassFeature, any>[];

export function ClassFeatureDataTable({
    classFeatures,
}: {
    classFeatures: ClassFeature[];
}) {
    return (
        <DataTable
            columns={columns}
            data={classFeatures}
            itemHeight={38}
            href={(row) => ({
                pathname: "/content/class-features/[id]",
                params: { id: getClassFeatureId(row.original) },
            })}
        />
    );
}
