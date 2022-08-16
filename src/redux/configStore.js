import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history"
import { connectRouter } from "connected-react-router";