import React from "react";
import style from "./style.module.css";
import { Form, Input } from "antd";
import 'antd/dist/antd.css';

function Login() {
  return (
    <div className={style.wrapper}>
      <div className={style.leftWrapper}>
        <div className={style.formContainer}>
          <Form labelCol={{span:10}}>
            <div className={style.emailContainer}>
              <Form.Item name="email" label="Email" rules={[
                {
                  required: true,
                  message: "Email is required",
                },
                {type: "email", message: "Please enter a valid email"}
              ]}
              hasFeedback
              >
                <Input size="large" placeholder="Insert your email" />
              </Form.Item>
            </div>

            <div className={style.passwordContainer}>
              <Form.Item name="password" label="Password" rules={[
                {
                  required: true,
                  message: "Password is required",
                }
              ]}
              hasFeedback
              >
                <Input.Password size="large" placeholder="Insert your password" />
              </Form.Item>
            </div>

            <div className={style.btnContainer}>
            <button type="primary" className={style.btn}>Log in</button>
            </div>

          </Form>
        </div>
      </div>

      <div className={style.rightWrapper}>
        <div className={style.rightText}>
          Experience the convenience of managing social media accounts
        </div>
      </div>
    </div>
  );
}

export default Login;
