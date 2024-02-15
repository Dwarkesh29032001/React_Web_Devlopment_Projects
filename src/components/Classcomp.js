import React, { Component } from "react";
import { Outlet } from "react-router-dom";

class Classcomp extends Component {

    render() {
        const { myName, post } = this.props;
        return (<div>
            <h2>This is Class component</h2>
            {/* <p>My Name is :<strong>{this.props.myName}</strong></p>
             <p>I am  :<strong>{this.props.post}</strong></p> */}
            <p>My Name is :<strong>{myName}</strong></p>
            <p>I am  :<strong>{post}</strong></p>
            <Outlet/>
        </div>)
    }
}
export default Classcomp;