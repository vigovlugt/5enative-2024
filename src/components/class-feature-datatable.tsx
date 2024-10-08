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
                {cell.row.original.subclassShortName && (
                    <Text
                        style={{
                            fontSize: 12,
                            color: "gray",
                        }}
                    >
                        {cell.row.original.subclassShortName}
                    </Text>
                )}
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
    ...props
}: {
    classFeatures: ClassFeature[];
} & Partial<React.ComponentProps<typeof DataTable>>) {
    return (
        <DataTable
            {...props}
            columns={columns}
            data={classFeatures}
            itemHeight={38}
            href={(row) => ({
                pathname: "/class-features/[id]",
                params: { id: getClassFeatureId(row.original) },
            })}
        />
    );
}
