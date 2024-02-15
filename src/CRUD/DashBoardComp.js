import axios from 'axios';
import { Button } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';

const DashBoardComp = () => {

    const [product, setproduct] = useState([]);
    const [item, setItem] = useState({});
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (data) => {
        setItem(data)
        setShow(true)
    };


    useEffect(() => {
        fetchData();
    }, []);


    //this getdata from dataBase 
    const fetchData = () => {
        axios.get("http://localhost:9090/product").then((res) => {
            console.log(res.data);
            setproduct(res.data);

        }).catch((err) => { })
    }


    //this is delete request 
    const deleteRecord = (id) => {
        console.log(id);  //to get id of product on console \
        if (window.confirm(`Are you sure to Delete Record with ID : ${id}`)) {

            axios.delete(`http://localhost:9090/product/${id}`).then(() => {
                window.alert("Product deleted Successfully !");
                fetchData();
            }).catch((err) => { })


        }
    }

    return (
        <div>
            <h2 className='myCRUDHeading'  >CRUD Operation Of Product</h2>
            <Link to="/Addproduct" className='btn btn-outline-primary btn-sm mb-1 mt-2' ><i class="fa fa-plus-square" aria-hidden="true">ADD PRODUCT</i></Link>

            <table className='table table-bordered table-hover table-striped' style={{ border: '5px solid darkblue' }}>

                <thead>

                    <tr>
                        <th>SR.NO.</th> <th>NAME</th> <th>COMPANY</th> <th>PRICE</th> <th>ACTION</th>
                    </tr>

                </thead>

                <tbody>
                    {product.map((val, index) => {
                        return <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{val.name}</td>
                            <td>{val.company}</td>
                            <td>{val.price}</td>
                            <td>
                                <Button variant='outline-primary' onClick={()=>{handleShow(val)}}  > <i class="fa fa-eye" aria-hidden="true"></i> </Button>
                                <Link to={`/editproduct/${val.id}`} className='btn btn-outline-primary btn-sm mb-1 mt-2' ><i class="fa fa-pencil-square-o" aria-hidden="true"></i></Link>
                                {`   `}
                                <button type="button" className='btn btn-outline-danger btn-sm' onClick={() => deleteRecord(val.id)}><i class="fa fa-trash" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{item.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body> <table>
                    <tr><th>ID:</th>  <th>{item.id}</th></tr>
                    <tr><th>NAME:</th> <th>{item.name}</th></tr>
                    <tr><th>COMPANY: </th> <th>  {item.company}</th></tr>
                    <tr><th>PRICE: </th> <th>  {item.price}</th></tr>
                </table>    </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default DashBoardComp;