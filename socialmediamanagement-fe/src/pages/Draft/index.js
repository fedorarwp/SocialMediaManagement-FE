import { Dropdown, Menu, Modal } from "antd";
import React from "react";
import style from "./draft.module.css";
import { DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

function Draft() {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const handleOpen = (param) => {
    setCurrentData(param);
    setOpen(true);
  };
  const tweets = [
    {
      id: 1,
      title: "Tweet ini ditulis oleh Ghazel si PM Beta",
      date: "2022-08-26",
    },
    {
      id: 2,
      title: "Tweet ini ditulis oleh Fefe si FE Beta",
      date: "2022-08-27",
    },
    {
      id: 3,
      title: "Tweet ini ditulis oleh Ez si BE Beta",
      date: "2022-08-28",
    },
  ];

  return (
    <div className={style.wrapper}>
      {tweets.map((tweet) => (
        <div key={tweet.id} className={style.postItem}>
          <div className={style.card}>
            {tweet.title}
            <Dropdown
              placement="bottomRight"
              overlay={
                <Menu
                  items={[
                    {
                      key: "delete",
                      label: (
                        <span>
                          <DeleteOutlined />
                          &ensp; Delete Post
                        </span>
                      ),
                    },
                  ]}
                />
              }
            >
              <button className={style.btnMore}>...</button>
            </Dropdown>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={() => handleOpen(tweet)}>
              Post Now
            </button>
          </div>
          <div className={style.btnContainer}>
            <button className={style.btn}>Schedule</button>
          </div>
        </div>
      ))}

      <Modal
        title="Are you sure you want to post now?"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
      >
        <h3>{currentData.title}</h3>
      </Modal>
    </div>
  );
}

export default Draft;
