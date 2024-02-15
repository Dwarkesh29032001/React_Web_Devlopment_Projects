
const FuntionComp = (props) => {
      
    // destructuring props 
    const { myName, post } = props;
    return (<div>
        <h2>This is Function Component</h2>
        {/* <p>My Name is :<strong>{props.myName}</strong></p>
         <p>I am  :<strong>{props.post}</strong></p> */}
        <p>My Name is :<strong>{myName}</strong></p>
        <p>I am  :<strong>{post}</strong></p>
    </div>)



}

export default FuntionComp;