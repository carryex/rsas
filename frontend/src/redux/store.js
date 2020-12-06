import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import restaurantReducer from "./restaurantReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from './app-reducer';
import navigationReducer from './navigationReducer';
import orderReducer from './orderReducer';

let reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  restaurant: restaurantReducer,
  navigation: navigationReducer,
  order: orderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;