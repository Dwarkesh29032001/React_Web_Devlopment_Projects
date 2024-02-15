import React, { Component } from "react";


//importing data from constantData.js file
import data from '../shared/constant/constantData'

class ChangeMultipleImg extends Component{
    constructor(){
        super();
        this.state={
        //taking data from constantData 
        img:[data.bike1,data.bike2,data.bike3,data.bike4,data.bike5,data.bike6 ,data.bike7 , data.thar1,data.thar2,data.thar3  ],
        //taking index for array
        name:['GT1','GT2','GT3','GT4','GT5','GT6','GT7' ,'THAR1' ,'THAR2','THAR3' ],
        index:0
        }
    }
    previous=()=>{
        if(this.state.index===0){
            this.setState((prevState)=>({index:prevState.index+9}))
        }else{
            this.setState((prevState)=>({index:prevState.index-1}))
        }
        
        
    }
    next=()=>{
        if(this.state.index===9){
            
            this.setState((prevState)=>({index:prevState.index-9}))
            
        }else{
            
            this.setState((prevState)=>({index:prevState.index+1}))
        }
    }
    render(){
        const{img,name,index}=this.state;
        return(<div>
            <h2>This is ChangeMultipleImg component</h2>
            
            <img src={img[index]} alt="" width="300px" height="300px"/>
            <p className="mt-3"><strong>Image name:{name[index]}</strong></p>
            <br/>
            <button className="btn-btn-outline-danger mt-2" onClick={this.previous}>previous image</button>

            <button className="btn-btn-outline-primary mt-2" onClick={this.next}>next image</button>
            
        </div>)
     }
    }
 

export default ChangeMultipleImg;