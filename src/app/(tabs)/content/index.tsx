import { useTheme } from "@react-navigation/native";
import { Href, Link } from "expo-router";
import { FlatList, View } from "react-native";

export function ContentCell({
    title,
    href,
}: {
    title: string;
    href: Href<string | object>;
}) {
    const theme = useTheme();
    return (
        <Link
            style={{
                padding: 8,
                paddingTop: 32,
                paddingBottom: 32,
                backgroundColor: theme.colors.card,
                borderRadius: 8,
                borderWidth: 1,
                borderColor: theme.colors.border,
                fontWeight: "bold",
                fontSize: 24,
                textAlign: "center",
                textAlignVertical: "center",
                color: theme.colors.text,
                flex: 1,
            }}
            href={href}
        >
            {title}
        </Link>
    );
}

export default function Content() {
    return (
        <View
            style={{
                padding: 8,
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
                        {
                            title: "Class Features",
                            href: "/content/class-features",
                        },
                        { title: "Feats", href: "/content/feats" },
                        { title: "Actions", href: "/content/actions" },
                        { title: "Conditions", href: "/content/conditions" },
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
