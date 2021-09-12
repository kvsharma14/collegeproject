import "./styles.css";
import { Nav, Footer } from "./Component";
import { Routes, Route } from "react-router-dom";
import {
  About,
  Buttons,
  TeamMember,
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
  AskQuery
} from "./Pages";

export default function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Signin /> */}
      <Nav />

      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/"
          element={
            <>
              {" "}
              <About /> <Buttons /> <TeamMember />{" "}
            </>
          }
        />
        <Route path="/FAQ" element={<Accordian />} />
        <Route path="/Achievement" element={<Achievements />} />
        <Route path="/Bookmark" element={<Bookmark />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Request" element={<AcceptDecline />} />
        <Route path="/uploadDocument" element={<UploadDocument />} />
        <Route path="/viewDocument" element={<ViewDocument />} />
        <Route path="/askQuery" element={<AskQuery />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </div>
  );
}
