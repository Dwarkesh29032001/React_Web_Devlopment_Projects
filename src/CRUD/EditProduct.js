import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const EditProductComp = () => {
    const { id } = useParams();
    const nav = useNavigate();

    const [item, setItem] = useState({
        id: "",
        name: "",
        price: "",
        company: ""
    });


    useEffect(() => {
        axios.get(`http://localhost:9090/product/${id}`).then((res) => {
            console.log(res.data);
            setItem(res.data);
        }).catch((err) => { })
    }, []);

    const inputChangeHandler = (event) => {
        const { type, name, value } = event.target;
        setItem({ ...item, [name]: value });
    }

    const addProduct = (event) => {
        event.preventDefault();
        console.log(item);
        axios.put(`http://localhost:9090/product/${id}`, item).then(() => {
            window.alert("Product updated successfully..")
            nav("/Dashboard")
        }).catch((err) => { })

    }

    return (
        <div style={{
            border: "8px solid darkblue",
            borderradius: "25px",
            width: "fit-content",
            borderradius: "15px",
            position: "relative",
            left: "477px",
            borderradius: "25px"
        }}  >
            <h2>This is EditProductComp...</h2>
            <form onSubmit={addProduct}
            >
                <div className='form-group'>
                    <label className='form-lable'>  <strong>Enter product name:</strong>  </label>
                    <input type="text" name="name" className='form-control' onChange={inputChangeHandler} value={item.name}></input>
                </div>
                <div className='form-group'>
                    <label className='form-lable'> <strong>Enter product Price:</strong></label>
                    <input type="text" name="price" className='form-control' onChange={inputChangeHandler} value={item.price}></input>
                </div>
                <div className='form-group'>
                    <label className='form-lable'> <strong>Enter product Company:</strong></label>
                    <input type="text" name="company" className='form-control' onChange={inputChangeHandler} value={item.company}></input>
                </div>

                <button type='submit' className='btn btn-primary mt-2'><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                    Submit</button>
            </form>
        </div>
    )
}

export default EditProductComp