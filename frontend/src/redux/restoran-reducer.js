import {restoranAPI} from '../api/api';

const SET_IS_OPEN = 'SET_IS_OPEN';
//initial state
let initialState = {
  isOpen: false,
};

//reducer
const restoranReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        isOpen: action.isOpen,
      };
    default:
      return state;
  }
};

//action creators
export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: {isOpen},
});

//thunks
export const getRestoranIsOpen = () => async (dispach) => {
  try {
    let response = await restoranAPI.isOpen();
    console.log(response);
    if (response.status === 200) {
      dispach(setIsOpen(true));
    }
  } catch (e) {
    console.log(e);
  }

};

export default restoranReducer;
