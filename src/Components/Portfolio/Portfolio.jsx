import React, { useState } from "react";
import Stayl from "./Portfolio.module.css";
import img1 from "./assets/images/poert1 (1).png";
import img2 from "./assets/images/port2.png";
import img3 from "./assets/images/port3.png";
import Display from "../Display/Display";

const images = [img1, img2, img3, img1, img2, img3];

function Portfolio() {
  document.title = "Portfolio";
  const [show, setshow] = useState(false);
  const [img, setimg] = useState("");
  function handelShow() {
    setshow(!show);
  }
  function getimg(img) {
    setimg(img);
  }

  return (
    <>
      <div className=" container-fluid my-5    ">
        <div className=" container p-5 align-items-center d-flex  flex-column ">
          <h3 className=" text-center ">PORTFOLIO COMPONENT</h3>

          <div
            className={`${Stayl.header} text-dark d-inline-block position-relative`}
          >
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="row m-1 g-3   ">
            {images.map((img, index) => {
              return (
                <div key={index} className="col-md-4">
                  <div
                    onClick={() => {
                      getimg(img);
                      handelShow();
                    }}
                    className={`${Stayl.rowContant}     position-relative `}
                  >
                    <img
                      className=" border rounded-3  w-100"
                      src={img}
                      alt="img1"
                    />
                    <div
                      className={`${Stayl.layer} border rounded-3  justify-content-center align-items-center  text-white`}
                    >
                      <i className="fa-solid fa-plus h1"></i>
                    </div>
                  </div>
                </div>
              );
            })}

            {show && <Display img={img} state={handelShow} />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
