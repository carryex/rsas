import {restoranAPI} from '../api/api';

const SET_IS_OPEN = 'SET_IS_OPEN';
//initial state
let initialState = {
  isOpen: false,
};

//reducer
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        ...action.payload,
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
export const getRestaurantIsOpen = () => async (dispach) => {
  try {
    let response = await restoranAPI.isOpen();
    if (response.status === 200) {
      dispach(setIsOpen(response.data.open));
    }
  } catch (e) {
    console.log(e);
  }

};

export const closeDay = () => async (dispach) => {
  try {
    let response = await restoranAPI.closeDay();
    if (response.status === 200) {
      dispach(setIsOpen(response.data.open));
      console.log(response.data);
    }
  } catch (e) {
    console.log(e);
  }
};

export const openDay = () => async (dispach) => {
  try {
    let response = await restoranAPI.openDay();
    if (response.status === 201) {
      dispach(setIsOpen(response.data.open));
      console.log(response.data);
    }
  } catch (e) {
    console.log(e);
  }
};

export default restaurantReducer;
