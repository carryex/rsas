import {getAuthUserData} from './auth-reducer';

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});

export const initializeApp = () => (dispatch) => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    let promise = dispatch(getAuthUserData(accessToken));
    Promise.all([promise]).then(() => {
      dispatch(initializedSuccess());
    });
  } else {
    dispatch(initializedSuccess());
  }

};

export default appReducer;
