import {restoranAPI} from '../api/api';

const SET_IS_OPEN = 'SET_IS_OPEN';
const SET_PRODUCT_CATEGORIES = 'SET_PRODUCT_CATEGORIES';
const SET_PRODUCTS = 'SET_PRODUCTS';
const SET_FIRST_CATEGORY_ID = 'SET_FIRST_CATEGORY_ID';
const TOOGLE_IS_FETCHING = 'TOOGLE_IS_FETCHING';
//initial state
let initialState = {
  isOpen: false,
  productCategories: [],
  products: [],
  firstCategoryId: null,
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
    case SET_FIRST_CATEGORY_ID:
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

export const setFirstCategoryId = (categoryId) => ({
  type: SET_FIRST_CATEGORY_ID,
  payload: {categoryId},
});
export const toogleIsFetching = (isFetching) => ({
  type: TOOGLE_IS_FETCHING,
  payload: {isFetching}
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
  try {
    let response = await restoranAPI.getСategories();
    if (response.status === 200) {
      dispach(setProductCategories(response.data));
      dispach(setFirstCategoryId(response.data[0].id));
    }
  } catch (e) {
    console.log(e);
  }
};

export const requestProducts = () => async (dispach) => {
  dispach(toogleIsFetching(true));
  try {
    let response = await restoranAPI.getProducts();
    if (response.status === 200) {
      dispach(setProducts(response.data));
      dispach(toogleIsFetching(false));
    }
  } catch (e) {
    console.log(e);
  }

};

// export const requestUsers = (page, pageSize) => async (dispach) => {
//   dispach(toogleIsFetching(true));
//   dispach(setCurrentPage(page));
//   let response = await userAPI.getUsers(page, pageSize);
//   dispach(toogleIsFetching(false));
//   dispach(setUsers(response.items));
//   dispach(setTotalUsersCount(response.totalCount));
// };

export default restaurantReducer;
