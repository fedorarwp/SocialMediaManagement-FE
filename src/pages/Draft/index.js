import {
  Dropdown,
  Menu,
  Modal,
  DatePicker,
  Input,
  notification,
  Spin,
} from "antd";
import React from "react";
import style from "./draft.module.css";
import "../../assets/style/main.css";
import { DeleteOutlined, LoadingOutlined } from "@ant-design/icons";
import { useState } from "react";
import moment from "moment";
import axios from "axios";

function Draft() {
  const [open, setOpen] = useState(false);
  const [currentData, setCurrentData] = useState({});
  const handleOpenNow = (param) => {
    setCurrentData(param);
    setOpen(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenSchedule = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().endOf("day");
  };

  const disabledDateTime = () => ({
    disabledHours: () => range(0, 24).splice(0, 0),
    disabledMinutes: () => range(0, 0),
    disabledSeconds: () => range(0, 0), //[55, 56],
  });

  const range = (start, end) => {
    const result = [];

    for (let i = start; i < end; i++) {
      result.push(i);
    }

    return result;
  };

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const antIcon = (
    <LoadingOutlined
      style={{
        fontSize: 24,
      }}
      spin
    />
  );
  const handleOpenAddDraft = () => {
    setIsAddOpen(true);
  };
  // const handleOkAddDraft = () => {
  //   setIsAddOpen(false);
  // };
  const handleCancelAddDraft = () => {
    setIsAddOpen(false);
  };
  const { TextArea } = Input;
  const [newTitle, setNewTitle] = useState("");

  const handleAddNewDraft = () => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        id: 1,
        title: newTitle,
        date: "2022-08-26",
        isPosted: false,
      })
      .then((res) => {
        console.log(res);
        setLoading(false);
        notification.success({
          message: "New tweet added successfully",
        });
        setTweets((prev) => [res.data, ...prev]);
      });
    setIsAddOpen(false);
  };

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  // const handleNextTweet = () => {
  //   if (loadingScroll) {
  //     return;
  //   }
  //   setLoadingScroll(true);

  //   setTimeout(() => {
  //     setTweets((prev) => [...prev, {
  //       id: 1,
  //       title: "Tweet ini ditulis oleh Ghazel si PM Beta",
  //       date: "2022-08-26",
  //       isPosted: true,
  //     },
  //     {
  //       id: 2,
  //       title: "Tweet ini ditulis oleh Fefe si FE Beta",
  //       date: "2022-08-27",
  //       isPosted: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Tweet ini ditulis oleh Ez si BE Beta",
  //       date: "2022-08-28",
  //       isPosted: false,
  //     },
  //     {
  //       id: 1,
  //       title: "Tweet ini ditulis oleh Ghazel si PM Beta",
  //       date: "2022-08-26",
  //       isPosted: true,
  //     },
  //     {
  //       id: 2,
  //       title: "Tweet ini ditulis oleh Fefe si FE Beta",
  //       date: "2022-08-27",
  //       isPosted: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Tweet ini ditulis oleh Ez si BE Beta",
  //       date: "2022-08-28",
  //       isPosted: false,
  //     },
  //     {
  //       id: 3,
  //       title: "Tweet ini ditulis oleh Ez si BE Beta",
  //       date: "2022-08-28",
  //       isPosted: false,
  //     },]);
  //   }, 2000)
  // // }

  const [tweets, setTweets] = useState([
    {
      id: 1,
      title: "Tweet ini ditulis oleh Ghazel si PM Beta",
      date: "2022-08-26",
      isPosted: true,
    },
    {
      id: 2,
      title: "Tweet ini ditulis oleh Fefe si FE Beta",
      date: "2022-08-27",
      isPosted: false,
    },
    {
      id: 3,
      title: "Tweet ini ditulis oleh Ez si BE Beta",
      date: "2022-08-28",
      isPosted: false,
    },
    {
      id: 4,
      title: "Tweet ini ditulis oleh Orang 1",
      date: "2022-08-26",
      isPosted: true,
    },
    {
      id: 5,
      title: "Tweet ini ditulis oleh Orang 2",
      date: "2022-08-27",
      isPosted: false,
    },
    {
      id: 6,
      title: "Tweet ini ditulis oleh Orang 3",
      date: "2022-08-28",
      isPosted: false,
    },
  ]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.addPostButtonContainer}>
          <button className={style.addPostButton} onClick={handleOpenAddDraft}>
            + add draft
          </button>
        </div>

        <div
          style={{
            overflowY: "auto",
            overflowX: "hidden",
            height: "70vh",
          }}
        >
          {loading && (
            <div style={{ paddingTop: "1rem", paddingLeft: "8rem", paddingBottom: "1rem", paddingButton: "1rem" }}>
              <Spin indicator={antIcon} />
            </div>
          )}
          {tweets.map((tweet) => (
            <div key={tweet.id} className={style.postItem}>
              <div className={`card ${tweet.isPosted ? "posted" : ""}`}>
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

              {!tweet.isPosted && (
                <>
                  <div className={style.btnContainer}>
                    <button
                      className={style.btn}
                      onClick={() => handleOpenNow(tweet)}
                    >
                      Post Now
                    </button>
                  </div>
                  <div className={style.btnContainer}>
                    <button
                      className={style.btn}
                      onClick={handleOpenSchedule}
                      type="primary"
                    >
                      Schedule
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <Modal
        title="Are you sure you want to post now?"
        visible={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        okButtonProps={{ style: { background: "black", border: "black" } }}
      >
        <h3>{currentData.title}</h3>
      </Modal>

      <Modal
        title="Pick your schedule"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okButtonProps={{ style: { background: "black", border: "black" } }}
      >
        <DatePicker
          onChange={onChange}
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
          //showTime={{ format: "YYYY-MM-DD HH:mm:ss" }}
        />
      </Modal>

      <Modal
        title="What's on your mind?"
        visible={isAddOpen}
        //onOk={handleOkAddDraft}
        onCancel={handleCancelAddDraft}
        onOk={() => handleAddNewDraft()}
        okButtonProps={{ style: { background: "black", border: "black" } }}
      >
        <TextArea
          rows={5}
          placeholder="Maximum 280 characters"
          maxLength={280}
          value={newTitle}
          onChange={(e) => handleChange(e)}
        />
      </Modal>
    </div>
  );
}

export default Draft;
