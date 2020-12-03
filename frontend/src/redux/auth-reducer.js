import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA";
const SET_AUTH_USER_ACESS_TOKEN = "SET_AUTH_USER_ACESS_TOKEN";

//initial state
let initialState = {
    email: null,
    id: null,
    username: null,
    isAuth: false,
    accessToken: null,
    isFetching: false,
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case SET_AUTH_USER_ACESS_TOKEN:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};


//action creators
export const setAuthUserData = (email, id, username, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {email, id, username, isAuth},
});

export const setAuthUserToken = (accessToken) => ({
    type: SET_AUTH_USER_ACESS_TOKEN,
    payload: {accessToken},
});

export const getAuthUserData = (accessToken) => async (dispach) => {
    let response = await authAPI.me(accessToken);
    if (response.status === 200) {
        let {email, id, username} = response.data;
        dispach(setAuthUserData(email, id, username, true));
    }
};

export const login = (username, password) => async (dispach) => {
    let response = await authAPI.login(username, password);
    if (response.status === 200) {
        const accessToken = response.data.access;
        dispach(setAuthUserToken(accessToken));
        dispach(getAuthUserData(accessToken));
    }
};

export default authReducer;
