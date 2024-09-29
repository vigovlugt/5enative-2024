import { Link } from "expo-router";
import { ComponentProps } from "react";
import { ScrollView, View, Text, StyleSheet, FlatList } from "react-native";

function Table({ ...props }: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={[
                {
                    borderWidth: 1,
                    borderColor: "rgb(216, 216, 216)",
                    borderRadius: 6,
                    overflow: "hidden",
                    backgroundColor: "white",
                    flex: 1,
                },
                props.style,
            ]}
        />
    );
}

function TableHeader({ ...props }: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={[
                {
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                },
                props.style,
            ]}
        />
    );
}

function TableBody<TItem>({
    ...props
}: ComponentProps<typeof FlatList<TItem>>) {
    return <FlatList {...props} style={[{}, props.style]} />;
}

function TableRow({
    ...props
}: ComponentProps<typeof Link> | ComponentProps<typeof View>) {
    const Component = (props as any).href ? Link : View;
    return (
        <Component
            {...(props as any)}
            style={[
                {
                    display: "flex",
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                },
                props.style,
            ]}
        />
    );
}

function TableCell({ ...props }: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={[
                {
                    padding: 8,
                    flex: 1,
                },
                props.style,
            ]}
        />
    );
}

function TableHead({ ...props }: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={[
                {
                    padding: 8,
                    flex: 1,
                },
                props.style,
            ]}
        />
    );
}

function TableHeadText({ ...props }: ComponentProps<typeof Text>) {
    return (
        <Text
            {...props}
            style={[
                {
                    fontWeight: "bold",
                },
                props.style,
            ]}
        />
    );
}

function TableFooter({ ...props }: ComponentProps<typeof View>) {
    return (
        <View
            {...props}
            style={[
                {
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "#ccc",
                    paddingBottom: 8,
                },
                props.style,
            ]}
        />
    );
}

function TableCaption({ ...props }: ComponentProps<typeof View>) {
    return <View {...props} />;
}

export {
    Table,
    TableHeader,
    TableBody,
    TableFooter,
    TableRow,
    TableHead,
    TableHeadText,
    TableCell,
    TableCaption,
};
