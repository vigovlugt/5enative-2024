import { useTheme } from "@react-navigation/native";
import { ComponentProps } from "react";
import { View, FlatList, Pressable } from "react-native";
import { Text } from "../text";

function Table({ ...props }: ComponentProps<typeof View>) {
    const theme = useTheme();
    return (
        <View
            {...props}
            style={[
                {
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                    borderRadius: 6,
                    overflow: "hidden",
                    backgroundColor: theme.colors.card,
                    flex: 1,
                },
                props.style,
            ]}
        />
    );
}

function TableHeader({ ...props }: ComponentProps<typeof View>) {
    const theme = useTheme();
    return (
        <View
            {...props}
            style={[
                {
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
                },
                props.style,
            ]}
        />
    );
}

function TableBody<TItem>({
    ...props
}: ComponentProps<typeof FlatList<TItem>>) {
    return (
        <FlatList
            {...props}
            style={[{}, props.style]}
            keyboardShouldPersistTaps="always"
            initialNumToRender={20}
        />
    );
}

function TableRow({ ...props }: ComponentProps<typeof Pressable>) {
    const theme = useTheme();
    const Component = props.onPress ? Pressable : View;
    return (
        <Component
            {...(props as any)}
            style={[
                {
                    display: "flex",
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
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
    const theme = useTheme();
    return (
        <View
            {...props}
            style={[
                {
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: theme.colors.border,
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
