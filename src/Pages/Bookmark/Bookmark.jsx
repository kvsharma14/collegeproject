import React from "react";
import "./Bookmark.css";
import { Document } from "../ViewDocument/Document";
import { Nav, Footer } from "../../Component";
export function Bookmark() {
  return (
    <>
      <Nav />
      <h1>Bookmark Page </h1>
      <div className="app-container">
        <h1 className="view-heading">List of Documents</h1>
        <table className="view-table">
          <thead>
            <tr>
              <th className="view-th-td th">Document Name</th>
              <th className="view-th-td th">View</th>
            </tr>
          </thead>
          <tbody>
            <Document />
            <Document />
            <Document />
            <Document />
          </tbody>
        </table>
      </div>
      <Footer />
    </>
  );
}

