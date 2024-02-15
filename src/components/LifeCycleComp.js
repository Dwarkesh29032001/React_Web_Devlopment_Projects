import React, { Component } from 'react'
class LifeCycleComp extends Component {

constructor(props) {
    super(props)

    this.state = {
         color:"red"
    }
}

// static getDerivedStateFromProps(props){
//     return{
//         color : props.mycolor
//     }
// }

// componentDidMount(){
//     setTimeout(() => {
//         this.setState({color:"Green"})
//     }, 2000);
// }

shouldComponentUpdate(){
    return true;
}

changeColor=()=>{
    this.setState({color:"Yellow"})
}

getSnapshotBeforeUpdate(prevprops,prevState){
    document.getElementById("beforeupdate").innerHTML=`My Favourite color Before Update was :${prevState.color}` ;
}

componentDidUpdate(){
    document.getElementById("afterupdate").innerHTML=`My Favourite color After Update is :${this.state.color}` ;

}


    render() {

        // const{color}= this.state 
        return (
            <div>
                <h2>This is LifeCycleComp  Component !</h2>
                <p> You Have Selected  <strong>{this.state.color}</strong> !! </p>

                <div id="beforeupdate"> </div>
                <div id="afterupdate"> </div>
                <button type="button" className='btn btn-info mt-2' onClick={this.changeColor} >CHANGE COLOR</button>
            </div>
        )
    }
}

export default LifeCycleComp
