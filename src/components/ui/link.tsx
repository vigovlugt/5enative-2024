import { LinkProps, Link as ExpoLink } from "expo-router";

export function Link<T extends string | object>(props: LinkProps<T>) {
    return (
        <ExpoLink
            {...props}
            style={[
                {
                    color: "rgb(0, 122, 255)",
                },
                props.style,
            ]}
        />
    );
}
