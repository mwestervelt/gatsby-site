import React, { useState, useRef } from "react";
// import Chevron from "./Chevron";

import '../assets/sass/accordion.css';

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
//   const [setRotate, setRotateState] = useState("accordion__icon");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    // setRotateState(
    //   setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    // );
  }

  return (
    <div className="accordion__section">
      <a className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <span className="accordion__title">{props.title}</span>
      </a>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div
          className="accordion__text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordion;
