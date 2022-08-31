import React from "react";
import style from "./landing.module.css"

export default function Landing() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftText}>
        <h1>
          <b>
            Keep the essentials. This is the only social media management system
            you ever need.
          </b>
        </h1>
      </div>
    </div>
  );
}
