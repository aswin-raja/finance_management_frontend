import React, { useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  DashboardOutlined,
  LogoutOutlined,
  ArrowLeftOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
// import { Icon } from '@iconify/react';
import { useNavigate } from "react-router-dom";
import MainLayoutStyled from "./MainLayoutStyled";

const { Header, Sider, Content } = Layout;
const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const navigate = useNavigate();

  return (
    <MainLayoutStyled>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            backgroundColor: "#336699", // Set the background color here
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            style={{
              backgroundColor: "#336699", // Set the background color for the Menu
            }}
            mode="inline"
            defaultSelectedKeys={null}
          >
            <Menu.Item
              key="1"
              onClick={() => {
                navigate(-1);
              }}
              icon={<ArrowLeftOutlined />}
            >
              Back
            </Menu.Item>
            <Menu.Item
              key="2"
              onClick={() => {
                navigate("/dashboard");
              }}
              icon={<DashboardOutlined />}
            >
              Dashboard
            </Menu.Item>
            <Menu.Item
              key="3"
              onClick={() => {
                navigate("/");
              }}
              icon={<LogoutOutlined />}
            >
              Logout
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: "#4682B4",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: "16px",
                width: 64,
                height: 64,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: "35px",
                fontWeight: 600,
                color: "white",
                textAlign: "center",
                fontFamily: "Arial, sans-serif",
              }}
            >
              FINANCE MANAGEMENT
            </p>
            <div></div>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div>{children}</div>
          </Content>
        </Layout>
      </Layout>
    </MainLayoutStyled>
  );
};
export default MainLayout;
