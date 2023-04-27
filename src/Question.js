import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
const Question = ({ question }) => {
  const [isHidden, setIsHidden] = useState(true);
  return (
    <article className="question">
      <header>
        <h4>{question.title}</h4>
        <button
          className="btn"
          onClick={() => {
            setIsHidden(!isHidden);
          }}
        >
          {isHidden ? <FaAngleDown /> : <FaAngleUp />}
        </button>
      </header>
      {!isHidden && <p>{question.info}</p>}
    </article>
  );
};

export default Question;
