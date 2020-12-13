const ADD_PRODUCT = 'ADD_PRODUCT';
const DECREASE_PRODUCT = 'DECREASE_PRODUCT';

//initial state
let initialState = {
  products: [],
};

//reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      let product = action.payload.product;
      let existing = false;
      const newProducts = state.products.map(item => {
        if (item.id !== product.id) return item;
        existing = true;
        item.quantity++;
        item.totalCost = item.quantity * item.price;
        return item;
      });
      if (!existing) {
        newProducts.push({...product, quantity: 1, totalCost: product.price});
      }
      return {
        ...state,
        products: newProducts,
      };
    }
    case DECREASE_PRODUCT: {
      let deleting = false;
      let product = action.payload.product;
      let newProducts = state.products.map(item => {
        if (item.id !== product.id) return item;
        if (item.quantity !== 1) {
          item.quantity--;
          item.totalCost = item.quantity * item.price;
          return item;
        }
        deleting = true;
        return item;
      });
      if (deleting) {
        newProducts = newProducts.filter(item => item.id !== product.id);
      }
      return {
        ...state,
        products: newProducts,
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
  payload: {product},
});

export const decreaseProduct = (product) => ({
  type: DECREASE_PRODUCT,
  payload: {product},
});

export default orderReducer;
