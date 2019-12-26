import axios from "axios";
import {
    GET_CODE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    USER_LOADING,
    CODE_ERROR,
    AUTH_ERROR,
    SET_CURRENT,
    UPDATE_USER,
    UPDATE_ERROR
} from "./types";

export const getOTPCode = mobile => async dispatch => {
    // User Loading
    dispatch({ type: USER_LOADING });

    try {
        const res = await axios.post(
            "http://api.code.tavanito.ir/v1/login/otp",
            { mobile }
        );

        dispatch({
            type: GET_CODE,
            payload: { data: res.data, mobile }
        });
    } catch (err) {
        dispatch({
            type: CODE_ERROR,
            payload: err
        });
    }
};

// load user
export const loadUser = () => async (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    try {
        const res = await axios.get(
            "http://api.code.tavanito.ir/v1/user",
            tokenConfig(getState())
        );

        dispatch({
            type: USER_LOADED,
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR,
            payload: err
        });
    }
};

// Login User
export const loginWithOTP = ({ mobile, value }) => async dispatch => {
    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // Request body
    const body = JSON.stringify({ mobile, code: value });

    try {
        const res = await axios.post(
            "http://api.code.tavanito.ir/v1/login",
            body,
            config
        );

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err
        });
    }
};

// Update User
export const updateUser = ({ first_name, last_name, email }) => async (
    dispatch,
    getState
) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    const body = JSON.stringify({ first_name, last_name, email });
    try {
        const res = await axios.put(
            "http://api.code.tavanito.ir/v1/user",
            body,
            tokenConfig(getState())
        );

        dispatch({
            type: UPDATE_USER,
            payload: res.data.data
        });
    } catch (error) {}
};

// Set current
export const setCurrent = user => ({
    type: SET_CURRENT,
    payload: user
});

// config token
const tokenConfig = state => {
    // Get token from localstorage
    const token = state.auth.token;

    // Headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };

    // If token, add to headers
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
};
