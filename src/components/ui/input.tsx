import { useTheme } from "@react-navigation/native";
import { TextInput, TextInputProps } from "react-native";
import React, { forwardRef } from "react";

export const Input = forwardRef<TextInput, TextInputProps>(
    ({ ...props }, ref) => {
        const theme = useTheme();
        return (
            <TextInput
                {...props}
                ref={ref}
                style={[
                    {
                        paddingHorizontal: 8,
                        paddingVertical: 4,
                        borderWidth: 1,
                        borderColor: theme.colors.border,
                        borderRadius: 6,
                        backgroundColor: theme.colors.card,
                        color: theme.colors.text,
                    },
                    props.style,
                ]}
            />
        );
    },
);
