import { DataTable } from "@/src/components/data-table";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import { getClassFeatureId, ClassFeature } from "@/src/types/class";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { View } from "react-native";

const columnHelper = createColumnHelper<ClassFeature>();
const columns = [
    columnHelper.accessor("className", {
        header: "Class",
        meta: {
            maxWidth: 80,
        },
    }),
    columnHelper.accessor("subclassShortName", {
        header: "Subclass",
        meta: {
            maxWidth: 80,
        },
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

export default function ClassFeaturesPage() {
    const { classFeatures } = useData();
    const [search, setSearch] = React.useState("");

    const filteredClassFeatures = classFeatures.filter((classFeature) =>
        classFeature.name.toLowerCase().includes(search.toLowerCase()),
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
                data={filteredClassFeatures}
                itemHeight={38}
                href={(row) => ({
                    pathname: "/content/class-features/[id]",
                    params: { id: getClassFeatureId(row.original) },
                })}
            />
        </View>
    );
}
