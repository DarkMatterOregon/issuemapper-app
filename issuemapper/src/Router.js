import React, { Component } from "react";
import { Scene, Router, Stack } from "react-native-router-flux";
import HomeView from "./components/views/HomeView";
import LoginView from "./components/views/LoginView";

class RouterComponent extends Component {
    stateHandler = (prevState, newState, action) => {
        console.log("onStateChange: ACTION: ", action);
    };

    render() {
        return (
            <Router onStateChange={this.stateHandler}>
                <Stack key="main">
                    <Scene key="login" component={LoginView} title="Login" />
                    <Scene key="home" component={HomeView} title="Home" />
                </Stack>
            </Router>
        );
    }
}

export default RouterComponent;
