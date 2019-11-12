import {createStore} from "redux";
import {ShopReducer} from "./ShopReducer";
import {CartReducer} from "./CartReducer";
import {CommonReducer} from "./CommonReducer";

//The Redux package provides the createStore function, which sets up a new data store using a reducer
//updated the data store configuration to use the commonReducer function to combine the shop and cart reducers
export const SportsStoreDataStore = createStore(CommonReducer(ShopReducer,CartReducer));