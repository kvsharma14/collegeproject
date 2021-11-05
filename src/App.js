import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import { Accordian, AcceptDecline, Achievements, Profile, Error404, UploadDocument, 
  Bookmark, ViewDocument, Login, Signin, Notification, AskQuery, Home } from "./Pages";
import { firebaseConfig } from './firebase.config'
import { initializeApp } from "firebase/app";
import { useEffect } from "react";

export default function App() {

  useEffect(()=>{
    const app = initializeApp(firebaseConfig);
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <PrivateRoute path="/" element={<Home />} />
        <PrivateRoute path="/faq" element={<Accordian />} />
        <PrivateRoute path="/achievement" element={<Achievements />} />
        <PrivateRoute path="/bookmark" element={<Bookmark />} />
        <PrivateRoute path="/profile" element={<Profile />} />
        <PrivateRoute path="/request" element={<AcceptDecline />} />
        <PrivateRoute path="/uploaddocument" element={<UploadDocument />} />
        <PrivateRoute path="/viewdocument" element={<ViewDocument />} />
        <PrivateRoute path="/askquery" element={<AskQuery />} />
        <PrivateRoute path="/notification" element={<Notification />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}