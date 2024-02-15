import React from "react";

const ReactMemoComp = (props)=>{
    console.log("this is react memo component");
    return (<div>
        <h2>This is React Memo Component</h2>
        <p>My Name is :<strong>{props.name}</strong></p>
    </div>)
}
export default React.memo(ReactMemoComp);