import { createSelector } from "reselect";

const getProductsSelector = (state) => {
  return state.restaurant.products;
};
export const getProducts = createSelector(getProductsSelector, (products) => {
  return products.filter((u) => true);
});

export const getWithCategoriesProducts = createSelector(getProductsSelector, (products) => {
  return products.filter((u) => u.category === categoryId);
});

const getCategoriesSelector = (state) => {
  return state.restaurant.productCategories;
};

export const getCategories = createSelector(getCategoriesSelector, (categories) => {
  return categories.filter((c) => true);
});

export const getIsFetching = (state) => {
  return state.restaurant.isFetching;
};
// export const getPageSize = (state) => {
//   return state.usersPage.pageSize;
// };
//
// export const getTotalUsersCount = (state) => {
//   return state.usersPage.totalUsersCount;
// };
//
// export const getCurrentPage = (state) => {
//   return state.usersPage.currentPage;
// };
//
// export const getIsFetching = (state) => {
//   return state.usersPage.isFetching;
// };
//
// export const getPageTitle = (state) => {
//   return state.usersPage.pageTitle;
// };
//
// export const getFollowingInProgress = (state) => {
//   return state.usersPage.followingInProgress;
// };
