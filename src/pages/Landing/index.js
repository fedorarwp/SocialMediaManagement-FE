import React from "react";
import style from "./landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={style.wrapper}>
      <div className={style.landingHeader}>
        <div className={style.topbarLeft}>
          <div className={style.landingLogo}>Beta</div>
          <div>
            <a>Pricing</a>
            <a>Features</a>
            <a>Contact Us</a>
          </div>
        </div>
        <div className={style.topbarRight}>
          <div>
            <Link style={{ color: "black" }} to="/login">
              Log in
            </Link>
            <Link
              style={{
                background: "black",
                color: "white",
                borderRadius: "5px",
                padding: "0.5rem"
              }}
              to="/register"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

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
