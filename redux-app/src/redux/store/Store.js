import { createStore } from "redux";
import CartReducers from "../reducers/CartReducers";

export const store = createStore(CartReducers);