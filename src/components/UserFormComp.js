
import React, { Component } from 'react'

export class UserFormComp extends Component {

    course = ["Angular" , "React" ,"NodeJS" , "JavaScript" , "Ajax" ,"TypeScript"] ;

   constructor(props) {
    super(props)
   
    this.state = {
         fname:"",
         email:"",
         courses:"",
         password:"",
         contact:""
    }
   }

   inputChangeHandler = (event) =>{

    // console.log(event.target.type);
    // console.log(event.target.name);
    // console.log(event.target.value);

    const {type,name,value} = event.target ;
    this.setState({[name]:value})
   }


   checkData = (event) =>{
    event.preventDefault();
    if(this.state.fname===""){
        window.alert("Full name id reuired !");
        return false ;
    }
    if(this.state.courses===""){
        window.alert("Plaese Select Your Course !");
        return false ;
    }
    if(this.state.password===""){
        window.alert("Password is reuired !");
        return false ;
    }
    if(this.state.contact===""){
        window.alert("Contact is reuired !");
        return false ;
    }

    //validation for fname
    if(!this.state.fname.match("^[a-zA-Z]{3,20}$")){
        window.alert("Full name should contain only characters and be between 3 to 20 characters.");
        return false;
    }
    //validation for password
    if(!this.state.password.match("^[a-zA-Z0-9]{3,20}$")){
        window.alert("Password must contain only alphanumeric characters and be between 3 to 20 characters.");
        return false;
    }
     // validation for contact number 
    if (!this.state.contact.match("^[0-9]{10}$")) {
        window.alert("Contact number should be a 10-digit number.");
        return false;
      }

    window.alert(JSON.stringify(this.state))

   }
    
    render() {

        const{fname} = this.state ;  //destructing the constructor

         return (
            <div>

                <div className='container text-center'>
                <h2>This is UserForm Component !</h2>
                <form className='myform' onSubmit={this.checkData}>
                    <lable className='form-label'>Enter Your Full-Name:</lable>
                    <input type='text' name='fname' className='form-control' onChange={this.inputChangeHandler} />
                   
                    <lable className='form-label'>Enter Your EmailID:</lable>
                    <input type='email' name='email' className='form-control' onChange={this.inputChangeHandler} />
                  
                    <lable className='form-label'>Enter Your Password:</lable>
                    <input type='password' name='password' className='form-control' onChange={this.inputChangeHandler} />

                    
                    <lable className='form-label'>Enter Your Contact Number:</lable>
                    <input type='tel' name='contact' className='form-control' onChange={this.inputChangeHandler} />

                    <lable className='form-label'>Select Your Course:</lable>
                    <select name='courses'  className='form-control' onChange={this.inputChangeHandler} >



                    <option value=" ">Select Your Course </option>
                    {
                        this.course.map((val,index)=>{
                            return <option value={val} key={index}>{val}</option>
                        })
                    }
                    </select>
                    <button type='submit' className='btn btn-success mt-2'>SUBMIT</button> 
                </form>
                </div>
            </div>
        )
    }
}

export default UserFormComp
