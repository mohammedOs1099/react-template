import homeimage from "./assets/images/avataaars.svg";
import stayl from "./Home.module.css";
import React from "react";
function Home() {
  document.title = "Home";
  return (
    <>
      <div className="contanier  d-flex align-items-center justify-content-center flex-column    vh-100">
        <img className=" " width={200} src={homeimage} alt="home img" />

        <div>
          <h2 className="">START FRAMEWORK</h2>
        </div>

        <div
          className={`${stayl.header} text-dark d-inline-block position-relative`}
        >
          <i  className="  fa-solid fa-star"></i>
        </div>

        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </>
  )
}

export default Home;
