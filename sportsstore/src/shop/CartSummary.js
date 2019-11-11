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