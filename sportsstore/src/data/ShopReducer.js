// Actions are processed by data store reducers, which are functions that receive the current contents of
// the data store and an action object and use them to make changes

import {ActionTypes} from "./Types";
export const ShopReducer = (storeData, action) => {
    switch(action.type) {
        case ActionTypes.DATA_LOAD:
            return {
                ...storeData,
                [action.payload.dataType]:action.payload.data
            };
        default: return storeData || {};
    }
}