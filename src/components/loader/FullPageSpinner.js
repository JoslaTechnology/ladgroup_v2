import React from "react";
import { IconContext } from "react-icons";
import { FaSpinner } from "react-icons/fa";
import { container, innerContainer } from "./style.module.css";

export const FullPageSpinner = () => {
  return (
    <IconContext.Provider value={{ color: "#009051", size: "30px" }}>
      <div className={container}>
        <span className={innerContainer}>
          <FaSpinner aria-label="loading" />
        </span>
      </div>
    </IconContext.Provider>
  );
};

export const Spinner = () => {
  return (
    <IconContext.Provider value={{ color: "#009051", size: "15px" }}>
      <div className={container}>
        <span className={innerContainer}>
          <FaSpinner aria-label="loading" />
        </span>
      </div>
    </IconContext.Provider>
  );
};
