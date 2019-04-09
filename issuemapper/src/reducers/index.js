import { LOGIN_TRY, LOGIN_SUCCESS } from "../actions/types";

const INITIAL_STATE = { user: null };

export default (state, action) => {
    switch (action.type) {
        case LOGIN_TRY:
            return { ...state };
        case LOGIN_SUCCESS:
            return { user: action.payload };
        default:
            return state;
    }
};
