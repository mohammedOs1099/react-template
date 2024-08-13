import React from "react"


export default function  Notfound() {
    document.title = "About";
    return(<>
    <div className="  container m-5"></div>
    <div className=" p-5 text-center vh-100  ">
    <h2 className="text-danger    ">Not Found 404!</h2>
        <h5>This page doesn’t exist.</h5>
        <p>If this is a mistake, let us know, and we will try to fix it!</p>
    </div>
 

    </>);
    
    }