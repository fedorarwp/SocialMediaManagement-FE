import React from 'react';
import style from './style.module.css';

function Draft() {
    return (
    <div className={style.wrapper}>
        <div className={style.postItem}>
          <div className={style.card}>
            <p>This is an example of a drafted tweet that has not been posted yet, so the user has two options: to post now or schedule it for later</p>
            <button className={style.btnMore}>...</button>
          </div>
          <div className={style.btnContainer}>
          <button className={style.btn}>Post Now</button>
          </div>
          <div className={style.btnContainer}>
          <button className={style.btn}>Schedule</button>
          </div>
        </div>
      </div>
    );
  }

export default Draft;