import React from "react";
import style from "./register.module.css";
import { Form, Input, Button, notification } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div className={style.wrapper}>
      <div className={style.leftWrapper}>
        <div className={style.formContainer}>
        <h2><b>Start creating your own account</b></h2>
          <Form labelCol={{ span: 8 }} onFinish={() => navigate("/workspaces")}>

          <div className={style.fullNameContainer}>
              <label>Full Name</label>
              <Form.Item
                name="fullName"
                rules={[
                  {
                    required: true,
                    message: "Please enter your full name",
                  },
                ]}
                hasFeedback
              >
                <Input
                  size="large"
                  placeholder="Insert your full name"
                />
              </Form.Item>
            </div>

            <div className={style.emailContainer}>
              <label>Email</label>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  { type: "email", message: "Enter a valid email" },
                ]}
                hasFeedback
              >
                <Input
                  size="large"
                  placeholder="Insert your email"
                />
              </Form.Item>
            </div>

            <div className={style.passwordContainer}>
              <label>Password</label>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  size="large"
                  placeholder="Insert your password"
                />
              </Form.Item>
            </div>

            <div className={style.btnContainer}>
              <Button
                htmlType="submit"
                type="primary"
                className={style.btn}
                style={{ background: "black", border:"black" }}
              >
                Register
              </Button>
            </div>
          </Form>
          Already have an account? <b><Link style={{color: 'black'}} to='/login'>Log in</Link></b>
        </div>
      </div>

      <div className={style.rightWrapper}>
        <div className={style.rightText}>
          Join other 1M+ users on <b>Beta</b> social media management system
        </div>
      </div>
    </div>
  );
}

export default Register;
