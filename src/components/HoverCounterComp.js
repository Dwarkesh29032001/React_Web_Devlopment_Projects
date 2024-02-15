import React, { Component } from "react";
import Hoc from "./Hoc";

class HoverCounterComp extends Component{
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
        // const {count} = this.state;
        return(<div>
            <h2>
                This is Hover Counter Comp 
            </h2>
            {/* <p>Count value is : <strong>{this.state.count}</strong></p>
            <h2 on onMouseOver={this.increamentCounter}>Hover on me to Increament Hover</h2> */}
            <p>Counter value is :<strong>{this.props.count}</strong></p>
            <h2 on onMouseOver={this.props.increamentCounter}>Hover on me to Increament Hover</h2>
            <br/>
        </div>)
    }
}
export default Hoc(HoverCounterComp,5);