import React, { useState } from "react";
import { toast } from "react-toastify";

function Navbar() {
    const [em,setEm] =useState("");

    function Toaster(e){
        e.preventDefault();
       
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em))
        {
            toast.success("Your Application have been Submitted!");
        }
        else
        {
            toast.error("Please Enter a Vaalid Email!");
        }
        
    }

    return (
    <>
    <nav className="navbar navbar-dark bg-light" style={{height:"150px"}}>
        <div className="container-fluid" style={{display:"flex",justifyContent:"space-between",}}>
        <a className="navbar-brand" href="#">
            <img src="./images/logo.png"  width={250} height={80}  className="d-inline-block align-text-top" />
        </a>
        <form className="d-flex">
        <input className="form-control me-2" type="email" onChange={(e)=>{setEm(e.target.value)}} value={em} placeholder="Email" aria-label="Search" />
            <button className="btn btn-dark " onClick={Toaster} style={{width:"150px",height:"40px",borderRadius:"20px",}}> Test Drive</button>
        </form>
        </div>

    </nav>












    </>);
};

export default Navbar;