import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import {
  Accordian,
  AcceptDecline,
  Achievements,
  Profile,
  Error404,
  UploadDocument,
  Bookmark,
  ViewDocument,
  Login,
  Signin,
  Notification,
  AskQuery,
  Home
} from "./Pages";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="*" element={<Error404 />} />
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
      </Routes>
    </div>
  );
}
