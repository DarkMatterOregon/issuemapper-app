import React, { Component } from "react";
import { View, Text } from "react-native";
import Container from "../common/Container";
import connect from "react-redux";

class HomeView extends Component {
    render() {
        return (
            <Container>
                <Text>This is text!</Text>
            </Container>
        );
    }
}

export default connect(
    null,
    null
)(HomeView);
