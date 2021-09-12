import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1>DocDotDeck PVT LTD</h1>
            <h4 className="list-unstyled col-sm">
              <li>1452,45</li>
              <li>Magarpatta, Pune</li>
              <li>Maharashtra</li>
            </h4>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; DocDotDeck Pvt Ltd | All rights reserved | Terms Of Service |
            Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
