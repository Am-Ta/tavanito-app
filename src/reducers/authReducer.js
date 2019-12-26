import {
    GET_CODE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CODE_ERROR,
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR
} from "../actions/types";

const initialState = {
    code: null,
    error: null,
    mobile: null,
    token: null,
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case GET_CODE:
            return {
                ...state,
                code: action.payload.data.message,
                mobile: action.payload.mobile,
                isLoading: false,
                error: null
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem("token", action.payload.access_token);
            return {
                ...state,
                token: action.payload.access_token,
                isAuthenticated: true,
                isLoading: false,
                error: null
            };
        case CODE_ERROR:
        case LOGIN_FAIL:
        case AUTH_ERROR:
            localStorage.removeItem("token");
            return {
                ...state,
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading: false,
                error: action.payload
            };
        default:
            return state;
    }
};
