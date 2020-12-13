import { orderAPI } from "../api/api";

const ADD_PRODUCT = "ADD_PRODUCT";
const DECREASE_PRODUCT = "DECREASE_PRODUCT";
const SET_IN_PAYMENT = "SET_IN_PAYMENT";

//initial state
let initialState = {
  products: [],
  cost: 0,
  inPayment: false,
};

//reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let product = action.payload.product;
      let newCost = state.cost;
      let existing = false;
      const newProducts = state.products.map((item) => {
        if (item.id !== product.id) return item;
        existing = true;
        item.quantity++;
        item.totalCost = item.quantity * item.price;
        newCost = newCost + Number(item.price);
        return item;
      });
      if (!existing) {
        newProducts.push({
          ...product,
          quantity: 1,
          totalCost: Number(product.price),
        });
        newCost = newCost + product.price * 1;
      }
      return {
        ...state,
        products: newProducts,
        cost: newCost,
      };
    }
    case DECREASE_PRODUCT: {
      let deleting = false;
      let product = action.payload.product;
      let newCost = state.cost;
      let newProducts = state.products.map((item) => {
        if (item.id !== product.id) return item;
        if (item.quantity !== 1) {
          item.quantity--;
          item.totalCost = item.quantity * item.price;
          newCost = newCost - item.price;
          return item;
        }
        deleting = true;
        return item;
      });
      if (deleting) {
        newProducts = newProducts.filter((item) => item.id !== product.id);
        newCost = newCost - product.price;
      }
      return {
        ...state,
        products: newProducts,
        cost: newCost,
      };
    }
    case SET_IN_PAYMENT: {
      return {
        ...state,
        inPayment: action.payload.inPayment,
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

export const payOrder = (order, orderTotalCost) => async (dispach) => {
  try {
    let response = await orderAPI.pay(order, orderTotalCost);
    if (response.status === 201) {
      console.log(response);
    }
  } catch (e) {
    console.log(e);
  }
};

export default orderReducer;
