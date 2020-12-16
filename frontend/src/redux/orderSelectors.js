import { createSelector } from "reselect";

const getProductsSelector = (state) => {
  return state.order.products;
};

export const getOrder = createSelector(getProductsSelector, (products) => {
  return products.filter((p) => true);
});

export const getOrderTotalCost = (state) => {
  return state.order.cost;
};

export const getInPayment = (state) => {
  return state.order.inPayment;
}

export const getCurrentUser = (state) => {
  return state.order.currentUser;
}