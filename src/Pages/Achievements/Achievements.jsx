import React from "react";
import "../Achievements/Achievements.css";
import trophy from "../../image/trophy.png";
import { Nav, Footer } from "../../Component";

export function Achievements() {
  return (
    <>
      <Nav />
      <div className="outer-achievee">
        <div className="achieve-image"></div>
        <div className="trophy-img">
          <img src={trophy} alt="trophy" />
        </div>
        <div className="achieve-body">
          <h1>AWARDS &amp; RECOGNITION</h1>
          <p>
            At DocDotDeck, our employee-owners are driven by a shared mission:
            to be the most skilled builder in India. We believe that skill is
            represented through the our numerous Build India awards, more than
            any other contractor in the nation and dozens of ENR Best Project
            wins.
          </p>
        </div>
      </div>
      <div className="achieve-para">
        <p>
          Our employee-owners are among the best in the industry, many of whom
          have been honored as 40 Under 40 honorees in their communities or by
          ENR, an industry-leading publication. These accomplishments reflect
          the skill and grit of our employee-owners and the commitment we have
          to fulfilling our mission.
        </p>
      </div>
      <div className="achieve-box row">
        <h1 className="achieve-heading">New & Noteworthy </h1>
        <div className="achieve-inner-box">
          <i className="fa fa-users faa"></i>
          <h2 className="achieve-h2">#3</h2>
          <h3> Economic Times Awards </h3>
        </div>
        <div className="achieve-inner-box">
          <i className="fa fa-trophy faa"></i>
          <h2 className="achieve-h2">#1</h2>
          <h3> Tech Startup of the Year </h3>
        </div>
        <div className="achieve-inner-box">
          <i className="fa fa-star faa"></i>
          <h2 className="achieve-h2">#10</h2>
          <h3> Innovation of the Year.</h3>
        </div>
      </div>
      <div className="achieve-last-box">
        <h1 className="achieve-last-heading">
          <a href=" ">Additional Honors</a>
        </h1>

        <div className="achieve-honors">
          <div className="achieve-outer">
            <h2> Dheirya Shrivastav </h2>
            <h6> Web Developer</h6>
            <h2 className="achieve-award">" Employee of the Year" </h2>
          </div>
          <div className="achieve-outer">
            <h2> Surbhi Sharma </h2>
            <h6> Tester </h6>
            <h2 className="achieve-award"> " Always Growing Award "</h2>
          </div>
          <div className="achieve-outer">
            <h2> Nehal Marwadi </h2>
            <h6> Tester </h6>
            <h2 className="achieve-award">" Going Above and Beyond Award "</h2>
          </div>
          <div className="achieve-outer">
            <h2> Riya Gupta </h2>
            <h6> Java Developer </h6>
            <h2 className="achieve-award">
              " Excellent Customer Service Award "
            </h2>
          </div>
          <div className="achieve-outer">
            <h2> Pankaj Soni </h2>
            <h6> Test Engineer</h6>
            <h2 className="achieve-award"> " Achiever of the Month "</h2>
          </div>
          <div className="achieve-outer">
            <h2> Shivangi Jain </h2>
            <h6> Tester </h6>
            <h2 className="achieve-award"> " The Star Employee " </h2>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
