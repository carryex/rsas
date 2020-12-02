const SET_AUTH_USER_DATA = "SET_AUTH_USER_DATA"

//initial state
let initialState = {
    userId: null,
    login: null,
    isAuth: false,
};

//reducer
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};


//action creators
export const setAuthUserData = (userId, login, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, login, isAuth},
});

export const login = (login, password) => async (dispach) => {
    dispach(setAuthUserData(1, login, true));
};

export default authReducer;
