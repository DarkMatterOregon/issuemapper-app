import React, { Component } from "react";
import { View, Text } from "react-native";
import Container from "../common/Container";
import { connect } from "react-redux";
import { FormInput } from "../common/FormInput";

const styles = {
    header: {},
    input: {
        marginHorizontal: "10",
        marginVertical: "5"
    },
    button: {}
};

class LoginView extends Component {
    render() {
        return (
            <Container>
                <Text>Log In</Text>
                <FormInput viewStyle={styles.input} text="Username" placeholder="Insert username here.." />
                <FormInput viewStyle={styles.input} text="Password" />
            </Container>
        );
    }
}

export default connect(
    null,
    null
)(LoginView);
