import { useTheme } from "@react-navigation/native";
import { LinkProps, Link as ExpoLink, useRouter } from "expo-router";

export function Link<T extends string | object>(
    props: LinkProps<T> & {
        variant?: "link";
    },
) {
    const theme = useTheme();
    return (
        <ExpoLink
            {...props}
            style={[
                props.variant === "link" && {
                    color: theme.colors.primary,
                },
                props.style,
            ]}
        />
    );
}
