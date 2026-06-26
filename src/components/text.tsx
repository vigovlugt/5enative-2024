import { useTheme } from "expo-router/react-navigation";
import { Text as NativeText, TextProps } from "react-native";

export function Text(props: TextProps) {
    const theme = useTheme();
    return (
        <NativeText
            {...props}
            style={[
                {
                    color: theme.colors.text,
                },
                props.style,
            ]}
        />
    );
}
