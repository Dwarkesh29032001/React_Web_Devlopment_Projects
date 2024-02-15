import React, { Component } from "react";

class CondRenderComp extends Component {

    constructor() {
        super();
        this.state = {
            isLogin: true
        }
    }
    render() {
        const { isLogin } = this.state;

        let msg = "";
        // 1. use of if else 
        // if (!isLogin) {
        //     //   return <h2>Admin Login Successfully</h2>
        //     msg = "Admin Login Successfully";
        // } else {
        //     // return <h2>User Login Successfully</h2>
        //     msg = "User Login Successfully";
        // }
        // // 2. element as variable 
        // return msg;

        // 3. use of ternary operator 
        // return (isLogin) ? <h2>Admin Login Successfully</h2> : <h2>User Login Successfully</h2>

        //4. use ot short circuit 
        return (isLogin) && <h2>Admin Login Successfully</h2>;
    }
}
export default CondRenderComp;