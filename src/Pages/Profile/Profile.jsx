import React, { useState } from "react";
import "./Profile.css";
import { Nav, Footer } from "../../Component";
import { useNavigate } from "react-router-dom";
export function Profile() {
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

  return (
    <>
      <Nav />
      <div className="profile-bg">
        <div className="profile-mainheading">
          <p className="profile-mainHeading">Profile</p>
        </div>
        <div className="profile-box">
          <div className="profile-main">
            <div>
              <input
                type="text"
                className="profile-input"
                disabled
                placeholder="Username"
              />
              <br />
              <input
                type="text"
                className="profile-input"
                disabled
                placeholder="Employee ID"
              />
              <br />
              <input
                type="text"
                className="profile-input"
                disabled
                placeholder="Desgination"
              />
              <br />
              <input
                type="email"
                className="profile-input"
                disabled
                placeholder="Email ID"
              />
              <br />
              <input
                type="text"
                className="profile-input"
                disabled
                placeholder="Currenlty working on Project"
              />
            </div>
            <div className="profile-right">
              <img
                alt="pp"
                src="https://image.shutterstock.com/image-photo/passport-picture-businesswoman-brown-hair-260nw-250775908.jpg"
              />
            </div>
          </div>
          <div className="profile-main-btn">
            <button onClick={toggleModal} className="profile-btn-one">
              Change Password?
            </button>

            {modal && (
              <div className="moddal">
                <div onClick={toggleModal} className="overlayy"></div>
                <div className="modal-content">
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
            <button
              className="profile-btn-three"
              type="submit"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
