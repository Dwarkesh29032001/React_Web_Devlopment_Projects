import React from 'react'
import { Link } from 'react-router-dom'
import './external.css';

const NavComp=()=>{
    return (
        <div  className='mainNav' >

            {/* <h2>This is Nav !!</h2> */}

            <Link to="/ImageSet" className='btn btn-primary btn-sm'>MyImagesComp</Link>
            <Link to="/list" className='btn btn-primary btn-sm'>FavColor</Link>
            <Link to="/frm" className='btn btn-primary btn-sm'>Userform</Link>
            <Link to="/classcomp" className='btn btn-primary btn-sm'>classComp</Link>
            <Link to="/myCss" className='btn btn-primary btn-sm'>MycssComp</Link>
            <Link to="/mystate" className='btn btn-primary btn-sm'>Mystate</Link>
            <Link to="/error" className='btn btn-primary btn-sm'>Error Page</Link>
            <Link to="/Hooks" className='btn btn-primary btn-sm'>ReactHooks</Link>
            <Link to="/dashBoard" className='btn btn-primary btn-sm'>CRUD</Link>
            <Link to="/carousel" className='btn btn-primary btn-sm'>carousel</Link>
            <Link to="/" className='btn btn-primary btn-sm'>LoginComp</Link>
            <Link to="/Newlogin" className='btn btn-primary btn-sm'>NewLoginPage</Link>
            
        </div>
    )
}

export default NavComp
