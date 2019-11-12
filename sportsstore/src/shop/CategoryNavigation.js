//The selection of a category will be handled by navigating to a new URL, which is done using the Link
// component provided by the React Router package. When the user clicks a Link, the browser is asked to
// navigate to a new URL without sending any HTTP requests or reloading the application. The details included
// in the new URL, such as the selected category in this case, allow different parts of the application to work
// together.

import React, { Component } from "react";
// import { Link } from "react-router-dom";
import {ToggleLink} from "../ToggleLink";

//Using ToggleLinks in the CategoryNavigation

export class CategoryNavigation extends Component{
    render(){
        return <React.Fragment>
            <ToggleLink to={this.props.baseUrl} exact = {true}>All</ToggleLink>
            {this.props.categories && this.props.categories.map(cat =>
                <ToggleLink key={cat} to = {`${this.props.baseUrl}/${cat.toLowerCase()}`}>
                    {cat}
                </ToggleLink>
            )}
        </React.Fragment>
    }
}