import React, { useState } from "react";
const Acc = ({ question, answer }) => {
  const [Show, setShow] = useState(false);
  return (
    <>
      <div className="main-heading">
        <p onClick={() => setShow(!Show)}>{Show ? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {Show && <p className="answers">{answer}</p>}
    </>
  );
};

export default Acc;
