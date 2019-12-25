import { GET_CODE, ERROR } from "../actions/types";

const initialState = {
    code: null,
    error: null,
    mobile: null
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
        case ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
