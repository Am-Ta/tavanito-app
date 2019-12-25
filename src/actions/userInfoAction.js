import axios from "axios";
import { GET_CODE, TO_LOGIN, ERROR } from "./types";

export const getOTPCode = mobile => async dispatch => {
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
            type: ERROR,
            payload: err
        });
    }
};

export const loginWithOTP = (mobile, code) => async dispatch => {
    try {
        const res = await axios.post("http://api.code.tavanito.ir/v1/login", {
            mobile,
            code
        });

        dispatch({
            type: TO_LOGIN,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: ERROR,
            payload: err
        });
    }
};
