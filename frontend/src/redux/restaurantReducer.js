import {restoranAPI} from '../api/api';

const SET_IS_OPEN = 'SET_IS_OPEN';
const SET_PRODUCT_CATEGORIES = 'SET_PRODUCT_CATEGORIES';
const SET_PRODUCTS = 'SET_PRODUCTS';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
//initial state
let initialState = {
  isOpen: false,
  productCategories: [],
  products: [],
  isFetching: true,
};

//reducer
const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_OPEN:
      return {
        ...state,
        ...action.payload,
      };
    case SET_PRODUCT_CATEGORIES:
      return {
        ...state,
        ...action.payload,
      };
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.payload,
      };
    case TOOGLE_IS_FETCHING:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

//action creators
export const setProductCategories = (productCategories) => ({
  type: SET_PRODUCT_CATEGORIES,
  payload: {productCategories},
});
export const setIsOpen = (isOpen) => ({
  type: SET_IS_OPEN,
  payload: {isOpen},
});
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: {products},
});
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  payload: {isFetching},
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
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProductCategories = () => async (dispach) => {
  dispach(toogleIsFetching(true));
  try {
    let response = await restoranAPI.getСategories();
    if (response.status === 200) {
      const categoryID = response.data[0].id;
      dispach(setProductCategories(response.data));
      dispach(getProductsByCategoryID(categoryID));
      dispach(toogleIsFetching(false));
    }
  } catch (e) {
    console.log(e);
  }
};

export const getProductsByCategoryID = (categoryID) => async (dispach) => {
  dispach(toogleIsFetching(true));
  try {
    let response = await restoranAPI.getProductsWithСategories(categoryID);
    if (response.status === 200) {
      dispach(setProducts(response.data.products));
      dispach(toogleIsFetching(false));
    }
  } catch (e) {
    console.log(e);
  }
};

export default restaurantReducer;
