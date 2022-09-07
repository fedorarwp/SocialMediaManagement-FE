import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./layoutt.css";
import style from "./layoutt.css";
//import Draft from "../../pages/Draft";
import React, { Children } from "react";
import { Link } from "react-router-dom";
const { Header, Content, Sider } = Layout;

const topbarItems = [
  {
    key: "pricing",
    label: "Pricing",
  },
  {
    key: "features",
    label: "Features",
  },
  {
    key: "contact",
    label: "Contact Us",
  },
];
// ["Pricing", "Features", "Contact Us"].map((key) => ({
//   key,
//   label: `${key}`,
// }));
const sidebarItems = [
  {
    key: "workspaces",
    label: (
      <Link style={{ color: "black", paddingLeft: "0" }} to="/workspaces">
        Workspaces
      </Link>
    ),
  },
  {
    key: "analytics",
    label: "Analytics",
  },
  {
    key: "profile",
    label: "My Profile",
  },
];

const rightStyle = { position: "absolute", top: 0, right: 0 };

const Layoutt = ({ children, isSidebarVisible = true }) => (
  <Layout>
    {/* <div className={style.landingHeader}>
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
              padding: "0.5rem",
            }}
            to="/register"
          >
            Register
          </Link>
        </div>
      </div>
    </div> */}
    <Header className="header">
      <div className="leftHeader">
        <div className="logo">
          <div className="logoText">BETA</div>
        </div>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={[""]}
          items={topbarItems}
        />
      </div>
      <div className="rightHeader">
        <Link style={{ color: "black" }} to="/">
          Log out
        </Link>
      </div>
    </Header>
    <Layout>
      {isSidebarVisible && (
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
            }}
            items={sidebarItems}
          />
        </Sider>
      )}

      <Layout
        style={{
          padding: "0 24px 24px",
        }}
      >
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
);

export default Layoutt;
