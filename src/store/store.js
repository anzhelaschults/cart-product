import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {cartReducer} from "./cartReducer";

export const store = createStore (cartReducer, applyMiddleware(thunk, logger))