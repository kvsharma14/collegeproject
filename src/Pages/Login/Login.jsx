import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo_blue from "../../image/logo_blue.png";
import loginp from "../../image/loginp.png";
import { useData } from "../../Contexts/data-context";
import { useSnackbar } from "react-simple-snackbar";
import { error, success } from "../../utils/snackbar";
import { URL } from '../../utils/api'
import "./Login.css";

export function Login() {
  const { dataState, dataDispatch } = useData();
  const [openSnackbar] = useSnackbar(error);
  const [openSuccessSnackbar] = useSnackbar(success);
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    empId: "",
    password: ""
  });

  const login = async (credentials) => {
    try {
      const { data } = await axios.post(URL, { empId: credentials.empId, password: credentials.password });
      dataDispatch({ type: "USER-LOGGED-IN", payload: data.success });
      openSuccessSnackbar("Successfully logged in", 2000);
      navigate("/");
    } catch (e) {
      if (e.response.status === 401) {
        return openSnackbar("Wrong ID or Password.", 2000);
      } else if (e.response.status === 404) {
        return openSnackbar("Check Username and Password and try again.", 2000);
      } else {
        return openSnackbar(e.message, 2000);
      }
    }
  };

  function loginHandler(data) {
    if (data.empId === "" || data.password === "") {
      return openSnackbar("Emp ID or Password cannot be empty.", 2000);
    } else {
      login(data);
    }
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
                  EMP ID
                </label>
                <input
                  className="login_input"
                  type="text"
                  name="Emp Id"
                  placeholder="Enter your emp id"
                  required
                  onChange={(e) => {
                    setCredentials({ ...credentials, empId: e.target.value });
                  }}
                />
              </div>
              <div className="login_form-group">
                <label className="login_label" htmlFor="password">
                  PASSWORD
                </label>
                <input
                  className="login_input"
                  type="password"
                  name="Password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => {
                    setCredentials({
                      ...credentials,
                      password: e.target.value
                    });
                  }}
                />
              </div>
              <div className="login_footer">
                <button
                  type="button"
                  className="login_btn"
                  onClick={() => loginHandler(credentials)}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="company">
        <img src={logo_blue} alt="Logo" className="imagebg" />
      </div>
    </>
  );
}
