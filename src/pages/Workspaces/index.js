import React from "react";
import style from "./workspaces.module.css";
import { Link } from "react-router-dom";

export default function Workspaces() {
  return (
    <div className={style.wrapper}>
      <div className={style.upperPart}>
        <h2>My Workspaces</h2>
        <div className={style.upperContainer}>
          <div className={style.workspaceBox}>
          <Link style={{ display:"block", width: "200px", height: "100px" }} to="/draft"/>
          </div>
        </div>
      </div>

      <hr />

      <div className={style.lowerPart}>
        <h2>Other's Workspaces</h2>
        <div className={style.lowerContainer}>
          <div className={style.workspaceBox} />
          <div className={style.workspaceBox} />
          <div className={style.workspaceBox} />
        </div>
      </div>
    </div>
  );
}
