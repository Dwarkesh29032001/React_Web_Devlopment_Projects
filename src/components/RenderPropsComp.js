import React, { Component } from 'react'

export class RenderPropsComp extends Component {

constructor(props) {
    super(props)

    this.state = {
         
    }
}

incrementCount= ()=>{
    this.setState((prevState)=>({count:prevState.count+1}))
}

    render() {
        return (
            <div>
                <h2>This is RenderPropsComp! <br></br> <p> {this.props.render(this.state.count,this.incrementCounter)}</p></h2>
            </div>
        )
    }
}

export default RenderPropsComp
