import { createSelector } from "reselect";

const getProductsSelector = (state) => {
  return state.order.products;
};
export const getOrder = createSelector(getProductsSelector, (products) => {
  return products.filter((p) => true);
});