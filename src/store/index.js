import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";

export const store = createStore(
    combineReducers({ profileReducer }),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);