import { ClassFeatureDataTable } from "@/src/components/class-feature-datatable";
import { Input } from "@/src/components/ui/input";
import { useData } from "@/src/contexts/data";
import React from "react";
import { View } from "react-native";

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
            <ClassFeatureDataTable classFeatures={filteredClassFeatures} />
        </View>
    );
}
