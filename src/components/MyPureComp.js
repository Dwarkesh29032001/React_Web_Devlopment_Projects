
import React, { Component, PureComponent } from "react";

class MyPureComp extends PureComponent {
  
    render(){
        console.log("this is mypure component")
        return (<div>
            <h2>This is MyPure Component</h2>
            <p>My Name is : <strong>{this.props.name}</strong></p>
        </div>)

    }
}
export default MyPureComp;