const ADD_PRODUCT = 'ADD_PRODUCT';

//initial state
let initialState = {
  products: [],
};

//reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      let addItem = action.payload.product;
      let existed_item = state.products.find(item => addItem.id === item.id);
      if (existed_item) {
        existed_item.quantity += 1;
        return {
          ...state,
          products: [...state.products],
        };
      } else {
        addItem.quantity = 1;
        return {
          ...state,
          products: [...state.products, addItem],
        };
      }
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
