import React, { Component } from "react";
import Hoc from "./Hoc";

class ClickCounterComp extends Component{

    // constructor (){
    //     super();
    //     this.state={
    //         count:0
    //     }
    // }
    // increamentCounter = ()=> {
    //     this.setState((prevState)=>
    //     ({count:prevState.count+1}))
    // }
    render(){
        return(<div>
            <h2>
                This is Click Counter Comp 
            </h2>
            {/* <p>Buttun Count value is : <strong>{this.state.count}</strong></p>
            <button type="button" onClick={this.increamentCounter}>Count++</button> */}

            <p>Counter value is :<strong>{this.props.count}</strong></p>
            <button type="button" onClick={this.props.increamentCounter}>Increament Counter</button>
        </div>)
    }
}
export default Hoc(ClickCounterComp,2);