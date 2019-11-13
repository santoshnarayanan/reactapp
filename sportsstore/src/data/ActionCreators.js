// define an action creator function, which will create an action object that can be
// processed by the data store to alter the data it contains.

// When the action object created by the loadData function is received by the data store, the middleware
// defined in Listing 6-5 will wait for the response to be received from the web service and then pass on
// the action for normal processing, with the result that the SportsStore application displays data obtained
// remotely

import {ActionTypes, DataTypes} from "./Types";
import {data as phData} from "./placeholderData";
import {RestDataSource} from "./RestDataSource";
const dataSource = new RestDataSource();

export const loadData = (dataType,params) => ({
    type: ActionTypes.DATA_LOAD,
    payload:dataSource.GetData(dataType,params).then(response =>
        ({dataType, data:response.data, total:Number(response.headers["x-total-count"]),params})
    )
})

export const setPageSize = (newSize) =>
    ({type:ActionTypes.DATA_SET_PAGESIZE,payload:newSize});

export const setSortProperty = (newProp) =>
    ({type:ActionTypes.DATA_SET_SORT_PROPERTY,payload:newProp});

export const placeOrder = (order) => ({
    type:ActionTypes.DATA_STORE,
    payload:dataSource.StoreData(DataTypes.ORDERS,order).then(response => ({
        dataType:DataTypes.ORDERS, data:response.data
    }))
})