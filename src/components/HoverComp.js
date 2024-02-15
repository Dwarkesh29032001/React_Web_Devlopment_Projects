const HoverComp = () => {
    //  default arrow function 
    const greet = ()=>{
        window.alert("Welcome You All");
    }
    // parameterize arrow function 
    const welcomeStudent = (stdName)=>{
        window.alert(`Welcome You ${stdName}`)
    }

    return (<div>
        <h2>This is Hover Component</h2>
        <h2 onMouseOver={greet}>Hover on me to call greet function</h2>
        <button type="button" onClick={()=>welcomeStudent("Dwarkesh")}>click on me!</button>
    </div>)
}
export default HoverComp;