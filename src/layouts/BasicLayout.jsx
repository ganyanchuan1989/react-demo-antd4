import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import "./index.css";

const { Header, Sider, Content } = Layout;

export default class BasicLayout extends React.Component {
  renderMenu() {
    const menuNodes = [];
    if (this.props.children.props) {
      for (const item of this.props.children.props.children) {
        const { path, title } = item.props;
        menuNodes.push(
          <Menu.Item key={path}>
            <Link to={path}>{title || path}</Link>
          </Menu.Item>
        );
      }
    }
    return menuNodes;
  }

  render() {
    return (
      <Layout id="components-layout-demo-custom-trigger">
        <Sider trigger={null} collapsible>
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            {this.renderMenu()}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: 0,
              borderBottom: "1px solid #eee",
            }}
          ></Header>
          <Content
            style={{
              padding: 24,
              background: "#fff",
              height: window.innerHeight - 64,
            }}
          >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}
