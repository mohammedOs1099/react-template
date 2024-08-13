import React from "react";
import stayl from "./About.module.css";

function About() {
  document.title = "About";
  
  return (
    <>
      <div className=" container-fluid bg-success d-flex align-items-center justify-content-center flex-column vh-100">
        <h3>ABOUT COMPONENT</h3>

        <div
          className={`${stayl.header} text-dark d-inline-block position-relative`}
        >
          <i className="  fa-solid fa-star"></i>
        </div>
        <div className="row justify-content-center  ">
          <p className="col-md-4  my-2">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
          <p className="col-md-4  my-2 ">
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
