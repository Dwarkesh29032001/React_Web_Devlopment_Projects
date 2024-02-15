import React, { Component } from "react";

class MyStateComp extends Component {

    constructor() {
        super();
        this.state = {
            myName: "Dwarkesh",
            salary: 15000
        }
        setTimeout(()=>{
            // this.setState({salary:this.state.salary+1,myName:"Panchashil Wankhede"});

            this.setState((prevState)=>({salary:prevState.salary+800,myName:"Dwarkesh Virkhare"}));
        },2000);
        
    }
    render() {
        // destructring state 
        const { myName, salary } = this.state;
        return (<div>
            <h2>This is My State Comp</h2>
            {/* <p>My Name is:<strong>{this.state.myName}</strong> </p>
            <p>My Salary is:<strong>{this.state.salary}</strong> </p> */}
            <p>My Name is:<strong>{myName}</strong> </p>
            <p>My Salary is:<strong>{salary}</strong> </p>
        </div>)
    }
}
export default MyStateComp;