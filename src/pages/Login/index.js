import React from "react";
import style from "./login.module.css";
import { Form, Input, Button, notification } from "antd";
import "antd/dist/antd.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
//import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "beta@mail.com" && password === "beta") {
      navigate("/workspaces");
    }

    //axios.post('link API', {email, password})
    //.then(response => {
      //localStorage.
      //const findUser = response.data.find((user) => {
        //if (email === user.email && password === user.password){
          //return true
        //}
        //return false
      //})
      
      //console.log(findUser)

      //if(findUser){
        //navigate('/draft')
      //} else {
        //notification.error yang ada di bawahnya ini
      //}
    //})
    else
    notification.error({
      message: "Login failed",
      description: "Email or password is incorrect"
    })
  };

  return (
    <div className={style.wrapper}>
      <div className={style.leftWrapper}>
        <div className={style.formContainer}>
        <h2><b>Log in to Beta management system</b></h2>
          <Form labelCol={{ span: 8 }} onFinish={handleLogin}>
            <div className={style.emailContainer}>
              <label>Email</label>
              <Form.Item name="email" rules={[
                {
                  required: true,
                  message: "Please enter your email"
                },
                {type:'email', message:'Enter a valid email'}
              ]}
              hasFeedback>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                size="large"
                placeholder="Insert your email"
              />
              </Form.Item>
            </div>

            <div className={style.passwordContainer}>
              <label>Password</label>
              <Form.Item name="password" rules={[
                {
                  required: true,
                  message: "Please enter your password"
                }
              ]}
              hasFeedback>
              <Input.Password
                onChange={(e) => setPassword(e.target.value)}
                size="large"
                placeholder="Insert your password"
              />
              </Form.Item>
            </div>

            <div className={style.btnContainer}>
              <Button htmlType="submit" type="primary" className={style.btn} style={{ background: "black", border: "black"}}>
                Log in
              </Button>
            </div>
          </Form>
          Don't have any account yet? <b><Link style={{color: 'black'}} to='/register'>Register</Link></b>
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
