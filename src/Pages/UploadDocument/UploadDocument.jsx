import "./UploadDocument.css";
import { Nav, Footer } from "../../Component";
import React, { useState } from "react";
import { useEffect } from "react";
import { Viewer } from "@react-pdf-viewer/core";
import { firebaseConfig } from "../../firebase.config"
import firebase from 'firebase';
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// Worker
import { Worker } from "@react-pdf-viewer/core"; // install this library

export function UploadDocument() {
  // Create new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // for onchange event
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfFileError, setPdfFileError] = useState("");

  // for submit event
  const [viewPdf, setViewPdf] = useState(null);

  // onchange event
  const fileType = ["application/pdf"];
  const handlePdfFileChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend = (e) => {
          setPdfFile(e.target.result);
          setPdfFileError("");
        };
      } else {
        setPdfFile(null);
        setPdfFileError("Please select valid pdf file");
      }
    } else {
      console.log("Select your file");
    }
  };

  // form submit
  const handlePdfFileSubmit = (e) => {
    e.preventDefault();
    if (pdfFile !== null) {
      setViewPdf(pdfFile);
    } else {
      setViewPdf(null);
    }
  };

  const handleUploadDocument = async () => {
    console.log({ viewPdf })
    // const app = initializeApp(firebaseConfig)
    // const storageRef = firebase.storage().ref();
    // const fileRef = storageRef.child("qwerty");
    // await fileRef.put(viewPdf)
    // const docUrl = await fileRef.getDownloadURL()
    // console.log({ docUrl })
  }

  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <br></br>
        <h1 className="h1-upload">Upload your document</h1>
        <form className="form-group" onSubmit={handlePdfFileSubmit}>
          <input
            type="file"
            className="form-control"
            required
            onChange={handlePdfFileChange}
          />
          {pdfFileError && <div className="error-msg">{pdfFileError}</div>}
          <br></br>
          <button type="submit" className="btn-preview btn btn-success btn-lg">
            PREVIEW
          </button>
        </form>
        <br></br>
        <h4>View PDF</h4>
        <div className="pdf-container">
          {/* show pdf conditionally (if we have one)  */}
          {viewPdf && (
            <>
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.6.347/build/pdf.worker.min.js">
                <Viewer
                  fileUrl={viewPdf}
                  plugins={[defaultLayoutPluginInstance]}
                />
              </Worker>
            </>
          )}

          {/* if we dont have pdf or viewPdf state is null */}
          {!viewPdf && <>No pdf file selected</>}
        </div>
        <div className="upload-comment">
          <textarea
            className="upload-textarea"
            placeholder="Post any Comments regarding your document"
          ></textarea>
        </div>
        <button type="button" onClick={()=>{handleUploadDocument()}} className="btn btn-success btn-lg btn-upload">
          UPLOAD
        </button>
      </div>
      <Footer />
    </>
  );
}
