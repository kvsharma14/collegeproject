import React, { useState } from "react";
import logo_blue from "../../image/logo_blue.png";
import loginp from "../../image/loginp.png";

import { useNavigate } from "react-router-dom";
import "./Login.css";

export function Login() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  const navigate = useNavigate();
  function loginHandler() {
    navigate("/");
  }

  return (
    <>
      <div className="back">
        <div className="login_base-container">
          <div className="login_content">
            <div className="image">
              <img src={loginp} alt="Logo" className="image" />
            </div>
            <hr />

            <div className="login_form">
              <div className="login_form-group">
                <label className="login_label" htmlFor="username">
                  {" "}
                  USERNAME{" "}
                </label>
                <input
                  className="login_input"
                  type="text"
                  name="Username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="login_form-group">
                <label className="login_label" htmlFor="password">
                  {" "}
                  PASSWORD{" "}
                </label>
                <input
                  className="login_input"
                  type="password"
                  name="Password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="login_footer">
                <button
                  type="button"
                  className="login_btn"
                  onClick={() => loginHandler()}
                >
                  Login
                </button>
              </div>
              <div className="login_forgotpassword">
                <a href=" ">Forgot Password? </a>
              </div>
              <div className="login_newuser">
                <a href=" ">Are you a New User? Sign In </a>
              </div>

              <div className="login_newproject">
                <button onClick={toggleModal} className="login-btn-np">
                  New Project
                </button>

                {modal && (
                  <div className="moddal">
                    <div onClick={toggleModal} className="overlayy"></div>
                    <div className="modal-content login_newproject">
                      <h2 className="modal-heading">Change Password</h2>

                      <input
                        type="password"
                        className="profile-input"
                        placeholder="Enter Old Password"
                      />
                      <br />
                      <input
                        type="password"
                        className="profile-input"
                        placeholder="Enter New Password"
                      />
                      <button className="pop-btn-modal">Save</button>
                      <button
                        className="pop-btn-modal pop-close"
                        onClick={toggleModal}
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="company">
          <img src={logo_blue} alt="Logo" className="imagebg" />
        </div>
      </div>
    </>
  );
}
