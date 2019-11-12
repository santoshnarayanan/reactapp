//Extending the Data Store
//For the SportsStore application, I am going to take a different approach and add support for actions
// whose payload is a Promise,  The middleware will wait until the
// Promise is resolved and then pass on the action using the outcome of the Promise as the payload
const isPromise = (payLoad) => (typeof (payLoad) === "object" || typeof(payLoad) === "function")
&& typeof(payLoad.then) ==="function";

export const asyncActions = () => (next) => (action) => {
    if (isPromise(action.payload)) {
        action.payload.then(result => next({...action, payload: result}));
    } else {
        next(action)
    }
}
