import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import "./layoutt.css";
import Draft from "../../pages/Draft";
import React, { Children } from "react";
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
  }
];
// ["Pricing", "Features", "Contact Us"].map((key) => ({
//   key,
//   label: `${key}`,
// }));
const sidebarItems = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
    const key = String(index + 1);
    return {
      key: `sub${key}`,
      icon: React.createElement(icon),
      label: `subnav ${key}`,
      children: new Array(4).fill(null).map((_, j) => {
        const subKey = index * 4 + j + 1;
        return {
          key: subKey,
          label: `option${subKey}`,
        };
      }),
    };
  }
);

const Layoutt = ({ children, isSidebarVisible = true }) => (
  <Layout>
    <Header className="header">
      <div className="logo"><div className="logoText">BETA</div></div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={[""]}
        items={topbarItems}
      />
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
