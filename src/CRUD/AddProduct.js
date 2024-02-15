import React, { useState } from 'react'
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
    const nav=useNavigate();

    const[item,setItem] = useState({
        name:"",
        price:"",
        company:"",
    });




const inputChangeHandler = (event) =>{
    const{type,name,value}=event.target;
    setItem({...item,[name]:value});

}

const addProduct =(event)=>{
    event.preventDefault();
    console.log(item);
    axios.post("http://localhost:9090/product",item).then(()=>{
        window.alert("Product Added successfully");
        nav("/Dashboard");

    }).catch((err)=>{})
}

    return (
        <div>
            <h2>Addproduct component</h2>
            <form  onSubmit={addProduct}   style={{border:"5px solid darkblue" , borderRadius:"20px",  width: "fit-content" , position: "relative",
    left: "538px" , marginTop:"5px" , marginBottom:"5px" }}>
                <div className='form-group'>
                    <label className='form-lable'  > <strong>Enter Product Name:</strong></label>
                    <input type='text' name="name" className='form-control' onChange={inputChangeHandler} value={item.name}  />
                </div>
                <div className='form-group'>
                    <label className='form-lable'  > <strong> Enter Product Company: </strong> </label>
                    <input type='text' name="company" className='form-control' onChange={inputChangeHandler} value={item.company}/>
                </div>
                <div className='form-group'>
                    <label className='form-lable'  > <strong> Enter Product Price: </strong></label>
                    <input type='text' name="price" className='form-control' onChange={inputChangeHandler} value={item.price} />
                </div>
                
                <div>
                <button type="submit" className='btn btn-primary btn-sm mt-2 mb-2' >SUBMIT</button>
                </div>

            </form>
            <Outlet />
        </div>
    )
}

export default AddProduct;