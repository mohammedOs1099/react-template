import React from "react";
import style from "./Contact.module.css";
import { useState } from "react";

function Contact() {
  window.document.title = "Contact";
  const [isFocused, setIsFocused] = useState({
    name: false,
    age: false,
    password: false,
    email: false
  });

  // set label to be show
  const handleFocus = (e) => {
    setIsFocused({ ...isFocused, [e.target.name]: true });
  };

  // set label to be hide
  const ayhaga = (e) => {
    setIsFocused({ ...isFocused, [e.target.name]: false });
  };
  return (
    <>
      <div className=" container-fluid mt-5 bg-success    ">
        <div className="container  d-flex align-items-center  flex-column pt-5    vh-100">
          <h3 className=" text-center ">CONTACT COMPONENT</h3>

          <div
            className={`${style.header} m-3 text-dark d-inline-block position-relative`}
          >
            <i className="fa-solid fa-star"></i>
          </div>

          <form className=" col-9   " action="">
            <div className="position-relative col-xl-12   border-black mt-5 mb-5">
              <input
                name="name"
                type="text"
                className="form-control py-3  border-0 "
                id="name"
                placeholder="Enter Your Name"
                onInput={handleFocus}
                onBlur={ayhaga}
              />
              <label
                htmlFor="name"
                className={`${style.labelStyle} ${
                  isFocused.name ? style.goUp : ""
                }`}
              >
                User Name
              </label>
            </div>

            <div className="position-relative col-xl-12  border-bottom border-secondary mb-5">
              <input
                name="age"
                type="number"
                className="form-control py-3   border-0 "
                id="age"
                placeholder="Enter Your Age"
                onInput={handleFocus}
                onBlur={ayhaga}
              />
              <label
                htmlFor="age"
                className={`${style.labelStyle} ${
                  isFocused.age ? style.goUp : ""
                }`}
              >
                User Age
              </label>
            </div>

            <div className="position-relative col-xl-12  border-bottom border-secondary mb-5">
              <input
                name="email"
                type="email"
                className="form-control py-3   border-0 "
                id="emailL"
                placeholder="Enter Your Email"
                onInput={handleFocus}
                onBlur={ayhaga}
              />
              <label
                htmlFor="emailL"
                className={`${style.labelStyle} ${
                  isFocused.email ? style.goUp : ""
                }`}
              >
                User Email
              </label>
            </div>

            <div
              className="position-relative col-xl-12  border-bottom border-secondary
            mb-2
            "
            >
              <input
                name="password"
                type="password"
                className="form-control py-3   border-0 "
                id="password"
                placeholder="Enter Your Password"
                onInput={handleFocus}
                onBlur={ayhaga}
              />
              <label
                htmlFor="password"
                className={`${style.labelStyle} ${
                  isFocused.password ? style.goUp : ""
                }`}
              >
                User Password
              </label>
            </div>

            <button
              className="btn btn-dark "
              onClick={(e) => e.preventDefault()}
            >
              send Massage
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
