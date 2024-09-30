import { useTheme } from "@react-navigation/native";
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
