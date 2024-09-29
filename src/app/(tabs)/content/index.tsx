import { Href, Link } from "expo-router";
import { FlatList, Text, View } from "react-native";

export function ContentCell({
    title,
    href,
}: {
    title: string;
    href: Href<string | object>;
}) {
    return (
        <Link
            style={{
                padding: 16,
                paddingTop: 32,
                paddingBottom: 32,
                backgroundColor: "white",
                borderRadius: 8,
                borderWidth: 1,
                borderColor: "rgb(216, 216, 216)",
                fontWeight: "bold",
                fontSize: 24,
                flexGrow: 1,
                textAlign: "center",
            }}
            href={href}
        >
            <Text>{title}</Text>
        </Link>
    );
}

export default function Content() {
    return (
        <View
            style={{
                padding: 16,
                justifyContent: "flex-end",
                height: "100%",
            }}
        >
            <FlatList
                inverted
                data={
                    [
                        { title: "Spells", href: "/content/spells" },
                        { title: "Rules", href: "/content/rules" },
                        { title: "Actions", href: "/content/actions" },
                    ] as const
                }
                numColumns={2}
                columnWrapperStyle={{
                    gap: 8,
                }}
                contentContainerStyle={{
                    gap: 8,
                }}
                renderItem={({ item }) => (
                    <ContentCell title={item.title} href={item.href} />
                )}
            />
        </View>
    );
}
