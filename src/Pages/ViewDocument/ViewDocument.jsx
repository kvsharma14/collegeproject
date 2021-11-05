import React, { useEffect } from "react";
import "./List.css";
import { Document } from "./Document";
//import {useState} from "react;"
import { Nav, Footer } from "../../Component";
export function ViewDocument() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

    
  //const cart = ()=>{const [item,setItem]=useState(Document);}
  return (
    <>
      <Nav />
      <div className="app-container">
        <h1 className="view-heading">List of Documents</h1>
        <table className="view-table">
          <thead>
            <tr>
              <th className="view-th-td th">Document Name</th>
              <th className="view-th-td th left">View</th>
            </tr>
          </thead>
          <tbody>
            <Document />
            {/* <Document />
            <Document />
            <Document /> */}

            {/* {
            item.map((currItem)=>{return <Document key={currItem.id} />})
          } */}
          </tbody>
        </table>
      </div>
    <Footer />
    </>
  );
}

