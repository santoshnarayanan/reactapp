//Connecting to the Data Store and the URL Router
//********************************************************************************************
//The Shop component and its CategoryNavigation and ProductList children need access to the data store.
// To connect these components to the features they require, I added a file called ShopConnector.js to the
// src/shop folder

import React, { Component } from "react";
import {Switch , Route, Redirect} from "react-router-dom"
import { connect } from "react-redux";
import { loadData } from "../data/ActionCreators";
import { DataTypes } from "../data/Types";
import { Shop } from "./Shop";

//connected the cart-related additions from the data store to the rest of the application,
// along with the action creator functions.
import { addToCart, updateCartQuantity, removeFromCart, clearCart} from "../data/CartActionCreators";

//Adding the Cart URL to the Routing Configuration
import { CartDetails } from "./CartDetails";

const mapStateToProps = (dataStore) => ({ ...dataStore})

//connected the cart-related additions from the data store to the rest of the application,
// along with the action creator functions.

const mapDispatchToProps = { loadData, addToCart,updateCartQuantity, removeFromCart, clearCart }

const filterProducts = (products = [], category) =>
    (!category || category === "ALL") ? products : products.filter(p => p.category.toLowerCase() === category.toLowerCase());


//The Redux package provides the connect function, which is used to link a component to a data
// store so that its props are either values from the data store or functions that dispatch data store actions when
// they are invoked

export const ShopConnector = connect(mapStateToProps, mapDispatchToProps) (
    class extends Component {
        render() {
            return <Switch>
                <Route path="/shop/products/:category?"
                       render={(routeProps) =>
                            <Shop {...this.props } {...routeProps }
                                products = {filterProducts(this.props.products,
                                    routeProps.match.params.category) } /> } />
                  /*Adding the Cart URL to the Routing Configuration*/
                  <Route path="/shop/cart" render={ (routeProps) =>
                      <CartDetails { ...this.props } { ...routeProps } />} />
                  <Redirect to="/shop/products" />
            </Switch>
        }

        componentDidMount() {
            this.props.loadData(DataTypes.CATEGORIES);
            this.props.loadData(DataTypes.PRODUCTS);
        }
    }
)