import { Component } from "react";


class FavColorComp extends Component{


    constructor(props) {
        super(props)
    
        this.state = {
             colors : [
                {id:101 , name:"Red"} ,
                {id:102 , name:"Blue"} ,
                {id:103 , name:"Yellow"} ,
                {id:104 , name:"Pink"} ,
                {id:105 , name:"Purple"} ,
             ]
        }
    }
    

    render(){
        const{colors} = this.state;
        return(<div>
            <h2>This is FavColorComp component</h2>
            <ul>
                {
                colors.map((val,index)=>{    // traverse the array index 
                   // return <li key={val.id}> {val.id} {val.name} </li>  // val means complete object 
                    return <li key={index}> {val.id} {val.name} </li>  // val means complete object 
                })
                }
            </ul>
        </div>)
    }


}

export default FavColorComp;