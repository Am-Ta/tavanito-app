import { GET_CODE, TO_LOGIN, ERROR } from "../actions/types";

const initialState = {
    code: null,
    error: null,
    mobile: null,
    info: null,
    isLogin: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CODE:
            return {
                ...state,
                code: action.payload.data,
                mobile: action.payload.mobile,
                error: null
            };
        case TO_LOGIN:
            return {
                ...state,
                error: null,
                isLogin: true
            };
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
