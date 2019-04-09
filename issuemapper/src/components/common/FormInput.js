import React from "react";
import { View, Text, TextInput } from "react-native";

const styles = {
    view: {
        height: 80
    },
    text: {
        flex: 1
        // height: 80
    },
    input: {
        flex: 1,
        // height: 80,
        borderColor: "#808080",
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: "#FFFFFF"
    }
};

const FormInput = ({ onChangeText, text, placeholder, viewStyle, textStyle, inputStyle }) => (
    <View style={[viewStyle, styles.view]}>
        <Text style={[textStyle, styles.text]}>{text}</Text>
        <TextInput style={[inputStyle, styles.input]} placeholder={placeholder} onChangeText={onChangeText} />
    </View>
);

export { FormInput };
