const ChildComp = (props) => {
    console.log("this is childComp !")
    return (<div>
        <h2>This is Child Component</h2>
        <p>My Name is:<strong>{props.name}</strong></p>
        <p>Count value is:<strong>{props.count}</strong></p>
    </div>)
}
export default ChildComp;