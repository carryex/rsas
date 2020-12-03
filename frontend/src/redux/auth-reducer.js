import {authAPI} from '../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const SET_AUTH_USER_TOKENS = 'SET_AUTH_USER_ACESS_TOKEN';

//initial state
let initialState = {
  email: null,
  id: null,
  username: null,
  isAuth: false,
  accessToken: null,
  refreshToken: null,
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
    case SET_AUTH_USER_TOKENS:
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

export const setAuthUserToken = (accessToken, refreshToken) => ({
  type: SET_AUTH_USER_TOKENS,
  payload: {accessToken, refreshToken},
});

//thunks
export const getAuthUserData = (accessToken) => async (dispach) => {
  try {
    let response = await authAPI.me(accessToken);
    if (response.status === 200) {
      let {email, id, username} = response.data;
      dispach(setAuthUserData(email, id, username, true));
    }
  } catch (e) {
    console.log(e);
  }

};

export const login = (username, password) => async (dispach) => {

  try {
    let response = await authAPI.create(username, password);
    if (response.status === 200) {
      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;
      localStorage.setItem('token', response.data.access);
      dispach(setAuthUserToken(accessToken, refreshToken));
      dispach(getAuthUserData(accessToken));
    }
  } catch (e) {
    console.log(e);
  }

};

export const logout = () => async (dispach) => {
    dispach(setAuthUserData(null, null, null, false));
    dispach(setAuthUserToken(null,null));
    localStorage.removeItem('token');
};

export default authReducer;
