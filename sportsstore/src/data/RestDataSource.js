//Creating Data Source

//onsolidate the code that is responsible for sending HTTP requests to the web service
// and processing the results

import Axios from "axios"
import {RestUrls} from "./Urls";
export class RestDataSource {
    GetData = async(dataType,params) => this.SendRequest("get",RestUrls[dataType],params);

    SendRequest = (method,url,params) => Axios.request({method,url,params});
}