//The ProductList component generates HTML
// content that includes the value of each product’s name, price, and description properties, but it doesn’t
// have knowledge of how those products are defined in the application or whether they have been defined
// locally or retrieved from a remote server

import React, {Component} from "react";
export class ProductList extends Component{
    render(){
        if (this.props.products == null || this.props.products.length ===0) {
            return <h5 className="p-2">No Products</h5>
        }
        return this.props.products.map(p=>
            <div className="card m-1 p-1 bg-light" key={p.id} >
                <h4>
                    {p.name}
                    <span className="badge badge-pill badge-primary float-right">
                        ${p.price.toFixed(2)}
                    </span>
                </h4>
                <div className="card-text bg-white p-1">
                    {p.description}
                    /*Adding a Button in the ProductList */
                   <button className="btn btn-success btn-sm float-right"
                            onClick={ () => this.props.addToCart(p) } >
                                Add To Cart
                   </button>
                </div>
            </div>
        )
    }
}