import React, { Component } from "react";
import { View, Text } from "react-native";
import Container from "../common/Container";
import { connect } from "react-redux";
import { FormInput } from "../common/FormInput";
import { Button } from "../common/Button";
import { colors, padding, fontSizes } from "../../styles/base";

const styles = {
    body: { padding: 10 },
    header: {},
    input: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    button: {
        backgroundColor: colors.gitHubGreen,
        justifyContent: "center",
        height: 80
    },
    buttonText: {
        color: colors.gitHubWhite
    }
};

class LoginView extends Component {
    render() {
        return (
            <Container containerStyle={styles.body}>
                <Text>Log In</Text>
                <FormInput viewStyle={styles.input} text="Username" placeholder="Insert username here.." />
                <FormInput viewStyle={styles.input} text="Password" />

                <View style={{ flex: 1 }}>
                    <Button title="Log In" textStyle={styles.buttonText} />
                </View>
            </Container>
        );
    }
}

export default connect(
    null,
    null
)(LoginView);
