import React, { Component } from "react";
import ChildComp from "./ChildComp";
import MyPureComp from "./MyPureComp";
import ReactMemoComp from "./ReactMemoComp";

class ParentComp extends Component {
       
    constructor (){
        super();
        this.state = {
            count:0,
            name : "Dwarkesh"
        }
    }
    changeData = ()=>{
        this.setState((prevState)=>({count:prevState.count+1,name:"Dwarkesh Virkhare"}));
    }
    render() {
        console.log("this is parent component");
        const {count,name} = this.state;
        return (<div>
            <h2>this is Parent Component</h2>
            <p>My Name is :<strong>{name}</strong></p>
            <p>Count value is :<strong>{count}</strong></p>
            <button className="btn btn-primary" type="button" onClick={this.changeData}>change state property</button>
            <hr />
            {/* <ChildComp count ={count} name={name} changeData={this.changeData} /> */}
            <hr />
            <MyPureComp name = {name} />
            <hr />
            <ReactMemoComp  name = {name} />
        </div>)
    }
}
export default ParentComp;