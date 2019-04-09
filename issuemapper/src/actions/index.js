import React from "react";
import { Actions } from "react-native-router-flux";
import { LOGIN_TRY, LOGIN_SUCCESS } from "./types";

export const loginTry = () => {
    return dispatch => {
        dispatch({ type: LOGIN_TRY });
    };
};

const loginSuccess = (dispatch, user) => {
    dispatch({
        type: LOGIN_SUCCESS,
        payload: user
    });
    //    Actions.main();
};
