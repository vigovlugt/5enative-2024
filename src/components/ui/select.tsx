import { useTheme } from "@react-navigation/native";
import { Picker, PickerProps } from "@react-native-picker/picker";
import { View } from "react-native";

export function Select<T>(props: PickerProps<T>) {
    const theme = useTheme();
    return (
        <View
            style={[
                {
                    color: theme.colors.text,
                    backgroundColor: theme.colors.card,
                    borderRadius: 6,
                    borderWidth: 1,
                    borderColor: theme.colors.border,
                    flex: 1,
                },
                props.style,
            ]}
        >
            <Picker
                {...props}
                dropdownIconColor={theme.colors.border}
                style={[
                    {
                        color: theme.colors.text,
                    },
                    props.style,
                ]}
            />
        </View>
    );
}
Select.Item = Picker.Item;
