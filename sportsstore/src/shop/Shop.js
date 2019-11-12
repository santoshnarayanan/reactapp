//To bring together the product table and the category buttons, I added a file called Shop.js to the
// src/shop folder

import React, { Component } from "react";
import { CategoryNavigation} from "./CategoryNavigation";
import {ProductList} from "./ProductList";
//added a CartSummary to the content rendered by the Shop component, which will
// ensure that details of the user’s selections are shown above the list of products
import {CartSummary} from "./CartSummary";
import { ProductPageConnector } from "./ProductPageConnector";
import { PaginationControls } from "../PaginationControls";

const ProductPages = ProductPageConnector(PaginationControls);

//The new Route handles the /shop/cart URL by displaying the CartDetails component, which receives
// props from both the data store and the routing system
export class Shop extends Component {
    handleAddToCart = (...args) => {
        this.props.addToCart(...args);
        this.props.history.push("/shop/cart");
    }
    render() {
        return <div className="container-fluid">
            <div className="row">
                <div className="col bg-dark text-white">
                    <div className="navbar-brand">SPORTS STORE</div>
                    <CartSummary {...this.props} />
                </div>
            </div>
            <div className="row">
                <div className="col-3 p-2">
                    <CategoryNavigation baseUrl="/shop/products" categories={this.props.categories}/>
                </div>
                <div className="col-9 p-2">
                    <ProductPages />
                     <ProductList products={ this.props.products }
                        addToCart={ this.handleAddToCart } />
                 </div>
            </div>
        </div>
    }
}