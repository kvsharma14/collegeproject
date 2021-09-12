import "./About.css";
import logo_blue from "../../../image/logo_blue.png";

export function About() {
  return (
    <>
      <div className="about-box">
        <div className="about-right">
          <p className="about-p">
            “DocDotDeck will help either find a way, or make one.”
          </p>
          <p className="about-p2">
            Emails have replaced memos, shared drives have done away with filing
            cabinets, and biometrics has taken over employee timesheet stamping.
            DocDotDeck is a system that provides a platform where one can manage
            documents of a project more easily and efficiently.
          </p>
        </div>
        <div className="about-left">
          <img className="about-img" src={logo_blue} alt="about" />
        </div>
      </div>
    </>
  );
}
