import React from "react";
import { View } from "react-native";

const styles = {
    container: {
        backgroundColor: "#C0C0C0",
        flex: 1
    }
};

const Container = ({ children, containerStyle }) => <View style={[containerStyle, styles.container]}>{children}</View>;

export default Container;
