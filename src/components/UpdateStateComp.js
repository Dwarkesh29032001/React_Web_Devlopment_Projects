import React, { Component } from "react";

class UpdateStateComp extends Component {
    
    constructor(){
        super();
        this.state = {
            count:0
        }
    }

    incrementCounter = ()=>{
        this.setState((prevState)=>({count:prevState.count+1}))
    }
    decrementCounter = ()=>{
        this.setState((prevState)=>({count:prevState.count-1}))
    }

    render(){
        const {count} = this.state;
        return (<div>
            <h2>this is UpdateStateComp components</h2>
            <div>Counter value is : <strong>{count}</strong></div>
            <button type="buton" class="btn btn-primary" onClick={this.incrementCounter}>Counter ++</button> {" "}
            <button type="buton" class="btn btn-primary" onClick={this.decrementCounter} >Counter --</button>
        </div>)
    }
}
export default UpdateStateComp;