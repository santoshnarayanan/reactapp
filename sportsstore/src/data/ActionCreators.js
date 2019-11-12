// define an action creator function, which will create an action object that can be
// processed by the data store to alter the data it contains.

import {ActionTypes} from "./Types";
import {data as phData} from "./placeholderData";
export const loadData = (dataType) => ({
    type: ActionTypes.DATA_LOAD,
    payload:{
        dataType:dataType,
        data:phData[dataType]
    }
});