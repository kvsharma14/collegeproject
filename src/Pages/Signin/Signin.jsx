import React from "react";
import "./Signin.css";
import logo_blue from "../../image/logo_blue.png";

export function Signin()
{ 
  return(
      <form>
        <div className="signin_back">
          <div className="signin_base-container">
            <div className="signin_content">
              <div className="signin_image">
                <img src={logo_blue} alt="Logo" className="signin_image" />
              </div>
              <div className="signin_header">Sign In</div>
              <div className="signin_form">
                <div className="signin_form-group">
                  <label className="signin_label"> Employee ID</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Employee ID"
                  />
                </div>

                <div className="signin_form-group">
                  <label className="signin_label">Name</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Full name"
                  />
                </div>

                <div className="signin_form-group">
                  <label className="signin_label">Email</label>
                  <input
                    type="signin_email"
                    className="signin_right_form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="signin_form-group">
                  <label className="signin_label">Contact</label>
                  <input
                    type="int"
                    className="signin_right_form-control"
                    placeholder="Enter contact number"
                  />
                </div>

                <div className="signin_form-group">
                  <label className="signin_label">Address</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Enter address"
                  />
                </div>

                <div className="signin_form-group">
                  <label className="signin_label">City</label>

                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Enter your City"
                  />
                </div>
              </div>

              <div className="signin_right_form">
                <div className="signin_right_form-group">
                  <label className="signin_label">Password</label>
                  <input
                    type="password"
                    className="signin_right_form-control"
                    placeholder="Your password should include special characters."
                  />
                </div>

                <div className="signin_right_form-group">
                  <label className="signin_label">Date Of Joining</label>
                  <input
                    type="date"
                    className="signin_right_form-control"
                    placeholder="You can also write nearby date"
                  />
                </div>

                <div className="signin_right_form-group">
                  <label className="signin_label">Project ID</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Enter your project ID"
                  />
                </div>

                <div className="signin_right_form-group">
                  <label className="signin_label">Role/ Level</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Enter your Role"
                  />
                </div>

                <div className="signin_right_form-group">
                  <label className="signin_label">Designation</label>
                  <input
                    type="text"
                    className="signin_right_form-control"
                    placeholder="Enter designation"
                  />
                </div>

                <div className="signin_right_form-group">
                  <label className="signin_label">Idendity Image</label>
                  <input id="myInput" type="file" ref={(ref) => this.upload = ref} style={{ display: 'none' }} />
                  <button onClick={(e) => this.upload.click()} type="upload"> Upload </button>
               </div>
              </div>
              <div className="signin_footer">
                <button
                  type="submit"
                  className="signin_btn signin_btn-dark signin_btn-lg signin_btn-block"
                >
                  Register
                </button>
                <p className="signin_forgot-password text-right">
                  Already registered? <a href=" ">log In</a>
                </p>
              </div>
            </div>
          </div>
        </div>
    </form>
 );
}
