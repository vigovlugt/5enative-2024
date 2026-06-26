import { useTheme } from "expo-router/react-navigation";
import { LinkProps, Link as ExpoLink, useRouter } from "expo-router";

export function Link(
    props: LinkProps & {
        variant?: "link";
    },
) {
    const theme = useTheme();
    return (
        <ExpoLink
            {...props}
            style={[
                {
                    color: theme.colors.text,
                },
                props.variant === "link" && {
                    color: theme.colors.primary,
                },
                props.style,
            ]}
        />
    );
}
