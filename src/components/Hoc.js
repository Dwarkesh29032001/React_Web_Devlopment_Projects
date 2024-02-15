import { Component } from "react"

const Hoc = (Wrapper,val) =>
{

    class HocComp extends Component{
        constructor (){
            super();
            this.state={
                count:0
            }
        }

        increamentCounter = ()=> {
            this.setState((prevState)=>
            ({count:prevState.count+val}))
        } 

        render(){
            return <Wrapper count ={this.state.count} increamentCounter={this.increamentCounter} ></Wrapper>
        }
            
    }
    return(
        HocComp
    )
}
export default Hoc;