//Adding the Shop to the Application

import React, { Component } from "react";
import { SportsStoreDataStore } from "./data/DataStore";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch, Redirect }
  from "react-router-dom";
import { ShopConnector } from "./shop/ShopConnector";

//The data store is applied to the application using a Provider, with the store prop being assigned the
// data store

export default class App extends Component {
  render() {
    return <Provider store={ SportsStoreDataStore }>
      <Router>
        <Switch>
          <Route path="/shop" component={ ShopConnector } />
          <Redirect to="/shop" />
        </Switch>
      </Router>
    </Provider>
  }
}