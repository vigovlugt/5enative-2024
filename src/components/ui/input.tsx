import { ComponentProps } from "react";
import { TextInput, TextInputComponent, TextInputProps } from "react-native";

export function Input({ ...props }: TextInputProps) {
    return (
        <TextInput
            {...props}
            style={[
                {
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    borderWidth: 1,
                    borderColor: "#ccc",
                    borderRadius: 6,
                    backgroundColor: "#fff",
                },
                props.style,
            ]}
        />
    );
}
