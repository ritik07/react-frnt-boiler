import React, { useState } from "react";
import { Layout, Affix } from "antd";
import { MenuUnfoldOutlined, MenuFoldOutlined, CaretRightOutlined, AlignLeftOutlined } from "@ant-design/icons";
import "./appController.css";
import { SideMenu } from "../components/sideMenu/SideMenu";
import { WebHeader } from "../components/webHeader";
import { MegaMenu } from "../components/megaMenu";
import { FooterPage } from "../components/footer";

const { Content } = Layout;

export const AppController = ({ history, children }) => {
  const [top, setTop] = useState(0);
  const [collapsed, setcollapsed] = useState(true);

  const toggle = () => {
    setcollapsed(!collapsed);
  };

  const getMobileBuggerMenu = history => {
    return (
      <div className="cs-only-for-mobile mobile-header">
        <div>
          {React.createElement(
            collapsed ? AlignLeftOutlined : AlignLeftOutlined,
            { className: "trigger", onClick: toggle }
          )}
        </div>
        <div>
          <span className="">
            <h3 className="cs-txt-fff">Logo</h3>
          </span>
        </div>
      </div>
    );
  };


  const getFooter = () => {
    return <FooterPage />;
  };

  return (
    <div>
      <div className="cs-show-web">
        <Layout>
          <Layout className={"site-layout " + (collapsed ? "" : "over-hid")}>
            <header className="app-header">
            <WebHeader history={history} />
            </header>
            <MegaMenu history={history} />
            <Content
              style={{
                //  margin: "24px 16px",
                //  marginLeft: 12,
                //  marginRight: 12,
                padding: 0,
                height: "100%",
                minHeight: 280
              }}
            >
              {children}
            </Content>
            {/* {getFooter()} */}
          </Layout>
        </Layout>
      </div>

      <div className="cs-show-mobile">
        <Layout>
          <SideMenu history={history} collapsed={collapsed} setcollapsed={setcollapsed} />
          <Layout className={"site-layout " + (collapsed ? "" : "over-hid")}>
            <header className="app-header">
              {getMobileBuggerMenu()}
            </header>
            <div>
              <MegaMenu history={history} />
            </div>
            <Content
              style={{
                //  margin: "24px 16px",
                //  marginLeft: 12,
                //  marginRight: 12,
                padding: 0,
                height: "100%",
                minHeight: 280
              }}
            >
              {children}
            </Content>
            {/* {getFooter()} */}
          </Layout>
        </Layout>
      </div>
    </div>
  );
};
