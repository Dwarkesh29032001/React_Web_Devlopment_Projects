import React, { Component } from 'react'

class ErrorBoundary extends Component {

constructor(props) {
    super(props)

    this.state = {
         hasError:false
    }
}

static getDerivedStateFromError(){
    return{
        hasError : true 
    }
}


componentDidCatch(err){
    console.log(err);
}
    render() {

        if(this.state.hasError){
            return "Something went wrong! this is not a User"; 
        }
        return this.props.children;

        
    }
}

export default ErrorBoundary
