import React, { useState } from "react";
import "./Accordian.css";
import { FAQ } from "./AccData";
import Acc from "./Acc";

export const Accordian = () => {
  const [Data, setData] = useState(FAQ);

  return (
    <>
      <div className="wapper-accordian">
        <section className="main-div">
          <h1 className="h1-acc">Frequently Asked Questions</h1>
          {Data.map((item) => {
            const { qid } = item;
            return <Acc key={qid} {...item} />;
          })}
        </section>
      </div>
    </>
  );
};
