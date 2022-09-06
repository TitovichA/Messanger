import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from "./conversations";
import { messagesReducer } from "./messages";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "gbchat",
    storage,
    whitelist: ["profile"],
};

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messagesReducer,
    })
);


export const store = createStore(
    persistedReducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
    ));

export const persistor = persistStore(store);