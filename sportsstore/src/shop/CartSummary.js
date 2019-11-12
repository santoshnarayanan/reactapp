//To show the user a summary of their shopping cart added a file called CartSummary

//The component defined receives the data it requires through cartItems and cartPrice props,
// which are used to create a summary of the component, along with a Link that will navigate to the
// shop/cart URL when clicked.

// The Link is disabled when the value of the items prop is zero to prevent the
// user from progressing without selecting at least one product.

import React, {Component } from "react";
import {Link} from "react-router-dom";
export class CartSummary extends  Component{
    getSummary = () => {
        if (this.props.cartItems > 0){
            return <spa>
                {this.props.cartItems} item(s), ${this.props.cartPrice.toFixed(2)}
            </spa>
        }
        else { return <span>Your cart: (empty) </span> }
    }
    getlinkClasses = () => {
        return `btn btn-sm bg-dark text-white ${this.props.cartItems === 0 ? "disabled" : ""}`;
    }

    render(){
        return <div className ="float-right">
            <small>
                {this.getSummary()}
                <Link className={this.getlinkClasses() } to ="/shop/cart">
                    <i className="fa fa-shopping-cart"></i>
                </Link>
            </small>
        </div>
    }
}