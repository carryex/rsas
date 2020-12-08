const ADD_PRODUCT = 'ADD_PRODUCT';
const DECREASE_PRODUCT = 'DECREASE_PRODUCT';

//initial state
let initialState = {
  products: [],
};

//reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let product = action.payload.product;
      let existing = false;
      const newProducts = state.products.map(item => {
        if (item.id !== product.id) return item;
        existing = true;
        item.quantity++;
        return item;
      });
      if (!existing) {
        product.quantity = 1;
        newProducts.push(product);
      };
      return {
        ...state,
        products: newProducts
      };
      // let existed_product = state.products.find(item => product.id === item.id);
      // if (existed_product) {
      //   existed_product.quantity += 1;
      //   return {
      //     ...state,
      //   };
      // } else {
      //   product.quantity = 1;
      //   return {
      //     ...state,
      //     products: [...state.products, product],
      //   };
      // }
    default:
      return state;
  }
};

//action creators
export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: {product},
});

export default orderReducer;
