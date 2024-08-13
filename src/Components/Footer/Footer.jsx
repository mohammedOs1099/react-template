import React from "react";

function Footer() {
  return (
    <>
      <footer className="  ">
        <div className=" container-fluid bg-dark      ">
          <div className="container">
          <div className="row  justify-content-center   p-5 gap-3    ">
            <div className="col-md-3 text-center   text-white        ">
              <h6 className="">LOCATION</h6>
              <p>
                
                2215 John Daniel Drive <br /> Clark, MO 65243{" "}
              </p>
            </div>
            <div className="col-md-3   d-flex  align-items-center flex-column text-white  ">
              <h6>AROUND THE WEB</h6>
              <div>
                <div className=" d-flex  col-md-10   ">
                  <div className=" border  rounded-circle m-1  ">
                    <i className="fa-brands fa-facebook  p-1  " />
                  </div>

                  <div className=" border rounded-circle m-1    ">
                    <i className="fa-brands fa-x-twitter  p-1 " />
                  </div>
                  <div className="  border rounded-circle m-1   ">
                  <i className="fa-brands fa-linkedin-in p-1  "></i>
                  </div>
            

                  <div className=" border rounded-circle m-1   ">
                  <i className="fa-solid fa-globe p-1  "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4   text-white text-center  ">
              <h6>ABOUT FREELANCER</h6>
              <p className="">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
          </div>
         
        </div>
        <div className=" p-3 container-fluid text-center bg-black text-white">
          <p>Copyright © Your Website 2024</p>
        </div>
       
      </footer>
    </>
  );
}

export default Footer;
