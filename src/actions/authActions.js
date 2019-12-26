import axios from "axios";
import {
    GET_CODE,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED,
    USER_LOADING,
    CODE_ERROR,
    AUTH_ERROR
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

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });

    // Get token from localstorage
    const token = getState().auth.token;

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

    try {
        const res = await axios.get(
            "http://api.code.tavanito.ir/v1/user",
            config
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
