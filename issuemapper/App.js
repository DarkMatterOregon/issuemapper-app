import React, { Component } from "react";
import { Text, View } from "react-native";
import Container from "./src/components/common/Container";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./src/reducers";
import ReduxThunk from "redux-thunk";
import Router from "./src/Router";

export default class App extends Component {
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
