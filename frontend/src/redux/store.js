import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from './app-reducer';
import restoranReducer from './restoran-reducer';
import navigationReducer from './navigationReducer';

let reducers = combineReducers({
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  restoran: restoranReducer,
  navigation: navigationReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware))
);

export default store;