import React, { useState } from "react";

function Left() {

    const [img,setImg] = useState("./images/BMW3.png");

    return(<>
    <div className="col-md-4">
        <div className="card mt-5 mx-5" style={{border:"none",outline:"none"}}>
            <h4 className="" style={{color:"red",}}><b>THE BMW</b></h4>
            <h1 className="display-1" style={{fontWeight:"30px"}}><b>G310R</b></h1>
            <p style={{fontSize:"17px",fontFamily:"sans-serif"}}>
            The BMW G 310 R is an entry-level standard motorcycle developed jointly by BMW and TVS Motor Company of India. It is BMW's first, modern, low-end, sub-500 cc, beginner motorcycle sold under the BMW Motorrad brand. It debuted in November 2015 with global sales beginning in 2018.
            </p>
            <div className="container mt-5">
                <button className="btn btn mx-3" onClick={()=>{setImg("./images/BMW1.png")}} style={{color:"red",backgroundColor:"red"}}>C</button>
                <button className="btn btn mx-3" onClick={()=>{setImg("./images/BMW2.png")}} style={{color:"blue",backgroundColor:"blue"}}>C</button>
                <button className="btn btn-dark mx-3" onClick={()=>{setImg("./images/BMW3.png")}} style={{color:"black"}}>C</button>
            </div>
        </div>
    </div>

    <div className="col-md-8" style={{objectFit:"contain"}}>
            
        <img src={img} className="img-fluid"></img>
    </div>

    </>)
};

export default Left;