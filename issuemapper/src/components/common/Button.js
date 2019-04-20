import React, { Component } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { colors, padding, fontSizes } from "../../styles/base";

const styles = {
    buttonStyle: {
        justifyContent: "center",
        height: 80,
        backgroundColor: colors.githubWhite,
        borderColor: colors.githubGrey,
        borderRadius: 10,
        borderWidth: 1,
        shadowColor: colors.githubGrey,
        shadowOffset: { width: 5, height: 5 },
        shadowRadius: 1,
        elevation: 1
    },
    textStyle: {
        color: colors.githubGreen,
        textAlignVertical: "center",
        textAlign: "center",
        paddingVertical: 10
    }
};

const Button = ({ title, onPress, buttonStyle, textStyle }) => (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, buttonStyle]}>
        <Text style={[styles.textStyle, textStyle]}>{title}</Text>
    </TouchableOpacity>
);

export { Button };
