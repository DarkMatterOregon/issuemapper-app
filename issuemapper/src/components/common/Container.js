import React from "react";
import { View } from "react-native";
import { colors, padding, fontSizes } from "../../styles/base";

const styles = {
    container: {
        backgroundColor: colors.githubWhite,
        // backgroundColor: "#C0C0C0",
        flex: 1
    }
};

const Container = ({ children, containerStyle }) => <View style={[styles.container, containerStyle]}>{children}</View>;

export default Container;
