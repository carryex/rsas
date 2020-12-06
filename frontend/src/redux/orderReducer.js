const ADD_PRODUCT = 'ADD_PRODUCT';

//initial state
let initialState = {
  products: [],
};

//reducer
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        // postsData: state.postsData.filter((p) => p.id !== action.postId),
        products: [...state.products, action.payload],
      };
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
