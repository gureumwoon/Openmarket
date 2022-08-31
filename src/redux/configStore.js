import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import user from './modules/user';
import product from './modules/product';

const rootReducer = combineReducers({ user, product });
const middlewares = [thunk];
const enhancer = applyMiddleware(...middlewares);
const store = createStore(rootReducer, enhancer);

export default store;

