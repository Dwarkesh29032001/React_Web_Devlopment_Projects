import React, { useRef } from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './external.css';
import axios from 'axios';

const LoginComp = () => {
    let uid = useRef();
    let upass = useRef();
    let udata = [];
    const nav = useNavigate()

    const getData = () => {
        // console.log(uid.current.value);
        // console.log(upass.current.value);
        let uId = uid.current.value;
        let uPass = upass.current.value;
        axios.get("http://localhost:8888/users").then((res) => {
            // console.log(res.data)
            udata = res.data;
            const validUser = udata.filter((val) => {
                return val.userid === uId && val.userpass === uPass
            })
            if (validUser.length > 0) {
                nav("/dashboard");
                sessionStorage.setItem("user", uId);
            } else {
                window.alert("Wrong Credentail");
            }
        }).catch((err) => { })
    }
    return (
        <div className='loginform'>
            <h2>This is Login Component</h2>
            {/* <Button variant='text'>simple button</Button>{" "}
            <Button variant='contained'>simple button</Button>{" "}
            <Button variant='outlined'>simple button</Button>{" "} */}
            <form>
                <input type='text' name='uid' ref={uid} placeholder='enter user id'
                    className='form-control mb-2 mt-2' />

                <input type='text' name='upass' ref={upass} placeholder='enter user password'
                    className='form-control mb-2 mt-2' />

                <div className='d-grid'>
                    {/* <button type='button' className='btn btn-primary'>Login</button> */}
                    <Button variant='contained' onClick={getData}>simple button</Button>
                </div>
            </form>
        </div>
    )
}

export default LoginComp
