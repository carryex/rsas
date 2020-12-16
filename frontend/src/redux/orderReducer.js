import { orderAPI } from "../api/api";
import { userAPI } from "../api/api";

const ADD_PRODUCT = "ADD_PRODUCT";
const DECREASE_PRODUCT = "DECREASE_PRODUCT";
const SET_IN_PAYMENT = "SET_IN_PAYMENT";
const CLEAR_ORDER = "CLEAR_ORDER";
const SET_CURRENT_USER = "SET_CURRENT_USER";
const ADD_DISCOUNT = "ADD_DISCOUNT";

//initial state
let initialState = {
  products: [],
  cost: 0,
  inPayment: false,
  currentUser: {
    discount: 0,
  },
};

const withDiscountTotalCost = (cost, discount) => {
  const newCost = (cost / 100) * (100 - discount);
  return parseFloat(newCost.toFixed(2));
};
//reducer
const orderReducer = (state = initialState, action) => {
  let newCost = state.cost;
  let existing = false;
  const currentUser = state.currentUser;
  let deleting = false;
  switch (action.type) {
    case ADD_PRODUCT: {
      let product = action.payload.product;
      const newProducts = state.products.map((item) => {
        if (item.id !== product.id) return item;
        existing = true;
        item.quantity++;
        item.totalCost = withDiscountTotalCost(
          item.quantity * item.price,
          currentUser.discount
        );
        newCost =
          newCost +
          withDiscountTotalCost(Number(product.price), currentUser.discount);
        return item;
      });

      if (!existing) {
        let totalCost = withDiscountTotalCost(
          Number(product.price),
          currentUser.discount
        );
        newProducts.push({
          ...product,
          quantity: 1,
          totalCost: totalCost,
        });
        newCost = newCost + totalCost;
      }
      return {
        ...state,
        products: newProducts,
        cost: parseFloat(newCost.toFixed(2)),
      };
    }
    case DECREASE_PRODUCT: {
      let product = action.payload.product;
      let newProducts = state.products.map((item) => {
        if (item.id !== product.id) return item;
        if (item.quantity !== 1) {
          item.quantity--;
          item.totalCost = withDiscountTotalCost(
            item.quantity * item.price,
            currentUser.discount
          );
          newCost =
            newCost - withDiscountTotalCost(item.price, currentUser.discount);
          return item;
        }
        deleting = true;
        return item;
      });

      if (deleting) {
        newProducts = newProducts.filter((item) => item.id !== product.id);
        newCost =
          newCost - withDiscountTotalCost(product.price, currentUser.discount);
      }
      return {
        ...state,
        products: newProducts,
        cost: parseFloat(newCost.toFixed(2)),
      };
    }
    case SET_IN_PAYMENT: {
      return {
        ...state,
        inPayment: action.payload.inPayment,
      };
    }
    case CLEAR_ORDER: {
      return {
        ...state,
        products: [],
        cost: 0,
        inPayment: false,
        currentUser: {
          discount: 0,
        },
      };
    }
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload.user,
      };
    }
    case ADD_DISCOUNT: {
      newCost = 0;
      const newProducts = state.products.map((item) => {
        item.totalCost = withDiscountTotalCost(
          item.quantity * item.price,
          currentUser.discount
        );
        newCost = newCost + item.totalCost;
        return item;
      });
      return {
        ...state,
        products: newProducts,
        cost: parseFloat(newCost.toFixed(2)),
      };
    }
    default: {
      return state;
    }
  }
};

//action creators
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: { product },
});

export const decreaseProduct = (product) => ({
  type: DECREASE_PRODUCT,
  payload: { product },
});

export const setInPayment = (inPayment) => ({
  type: SET_IN_PAYMENT,
  payload: { inPayment },
});

export const clearOrder = () => ({
  type: CLEAR_ORDER,
});

export const setCurrentUser = (user) => ({
  type: SET_CURRENT_USER,
  payload: { user },
});

export const addDiscount = () => ({
  type: ADD_DISCOUNT,
});

export const payOrder = (order, orderTotalCost) => async (dispach) => {
  const accessToken = localStorage.getItem("token");
  try {
    let response = await orderAPI.pay(order, orderTotalCost, accessToken);
    if (response.status === 201) {
      dispach(clearOrder());
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export const addUser = (userID) => async (dispach) => {
  if (userID === "") {
    const user = {discount: 0}
    dispach(setCurrentUser(user));
    dispach(addDiscount());
  } else {
    const accessToken = localStorage.getItem("token");
    try {
      let response = await userAPI.getUser(userID, accessToken);
      if (response.status === 200) {
        dispach(setCurrentUser(response.data));
        dispach(addDiscount());
      }
    } catch (e) {
      console.log(e);
    }
  }
};

export default orderReducer;
