import React from "react";
import stayl from "./Display.module.css";

function Display(props) {
  function close() {
    
    props.state();
  }
  return (
    <>
      <div className="container m-5 ">
        <div className={stayl.display}>
          <div className="min-vh-100 w-50 mx-auto  d-flex justify-content-center align-items-center">
            <img src={props.img} className="  w-100 d-block  " alt="" />
          </div>
          <div
            className={`${stayl.close}  text-center position-absolute top-0 end-0 m-4 h3 p-2  rounded-3  bg-success `}
            onClick={close}
          >
            <i className="fa-solid fa-xmark  "></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default Display;
