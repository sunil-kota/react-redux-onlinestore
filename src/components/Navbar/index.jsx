import React from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import './index.css';

function Navbar(){
    const navigate=useNavigate();
    return(
        <>
        <nav className="navbar">
            <div><h1>Online Store</h1></div>
             <h2 onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Home</h2>
            <div className="search-box">
            <input  type='text' placeholder="search for products here"/>
            </div>
            <h3>Sunil</h3>
            <h2 onClick={()=>navigate('/cart')} style={{cursor:"pointer"}}>Cart</h2> 
        </nav>
        <Outlet/>
        </>
    )
}

export default Navbar;