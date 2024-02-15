import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MyImagesComp from './MyImagesComp'
import FavColorComp from './FavColorComp'
import UserFormComp from './UserFormComp'
import PageNotFound from './PageNotFound'
import Classcomp from './Classcomp'
import MyCssComp from './MyCssComp'
import MyStateComp from './MyStateComp'
import NavComp from './NavComp'
import ReactHooksComp from '../Hooks/ReactHooksComp'
import UseStateHookComp from '../Hooks/UseStateHookComp'
import UseEffectHookComp from '../Hooks/UseEffectHookComp'
import DashBoardComp from '../CRUD/DashBoardComp'
import AddProduct from '../CRUD/AddProduct'
import EditProduct from '../CRUD/EditProduct'
import MycarouselComp from './MycarouselComp'
import LoginComp from './LoginComp'
import NewLoginComp from './NewLoginComp'


const MyRoutingComp = () => {
    return (
        <div className='container'>
            <BrowserRouter>
                <div className='card body-primary'     >
                    <div className='card-header border-primary'>  <NavComp></NavComp>  </div>
                    <Routes>
                        {/* default routing */}
                        <Route path='/ImageSet' element={<MyImagesComp />} ></Route>
                        {/* naming routing */}
                        <Route path='list' element={<FavColorComp />} ></Route>
                        {/* paramrterize routing */}
                        <Route path='frm/:id' element={<UserFormComp />} ></Route>
                        <Route path='frm' element={<UserFormComp />} ></Route>

                        {/* child routing */}
                        {/* <Route path='classcomp' element={<Classcomp/>} >
                <Route path='myCss' element={<MyCssComp/>} > </Route>
                <Route path='mystate' element={<MyStateComp/>} > </Route>
                </Route> */}
                        <Route path='Hooks' element={<ReactHooksComp />} >
                            <Route path='useState' element={<UseStateHookComp />} > </Route>
                            <Route path='' element={<UseStateHookComp />} > </Route>
                            <Route path='useEffect' element={<UseEffectHookComp />} > </Route>
                        </Route>


                        <Route path='classcomp' element={<Classcomp />} ></Route>

                        <Route path='myCss' element={<MyCssComp />} > </Route>
                        <Route path='mystate' element={<MyStateComp />} > </Route>
                        <Route path='DashBoard' element={<DashBoardComp />} > </Route>
                        <Route path='Addproduct' element={<AddProduct />} > </Route>
                        <Route path='editproduct/:id' element={<EditProduct />} > </Route> 
                        <Route path='carousel' element={<MycarouselComp />} > </Route> 
                        <Route path='' element={<LoginComp/>} > </Route> 
                        <Route path='Newlogin' element={<NewLoginComp/>} > </Route> 
                        
                    
                        
                        


                        {/* Wildcard routing */}
                        <Route path="/error" element={<PageNotFound />} ></Route>

                    </Routes>
                    <div />
                    <div className='card-footer border-primary'> <div className='text-primary' style={{ float: "right" }} > This App is Design And Devloped By  <strong>D.S.V</strong>   <sup>&copy;</sup>  </div>
                    </div>

                </div>
            </BrowserRouter>

        </div>


    )
}

export default MyRoutingComp
