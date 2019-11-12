//The applyMiddleware is used to wrap the middleware so that it receives the actions, and the result
// is passed as an argument to the createStore function that creates the data store.

import {createStore, applyMiddleware} from "redux";
import {ShopReducer} from "./ShopReducer";
import {CartReducer} from "./CartReducer";
import {CommonReducer} from "./CommonReducer";
import {asyncActions} from "./AsyncMiddleware";

//The Redux package provides the createStore function, which sets up a new data store using a reducer
//updated the data store configuration to use the commonReducer function to combine the shop and cart reducers
export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer,CartReducer),
    applyMiddleware(asyncActions));