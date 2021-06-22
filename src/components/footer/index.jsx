import React from "react";
import { Layout, Row, Col, Divider } from "antd";
import { EyeInvisibleOutlined, FacebookOutlined, FileDoneOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined, SendOutlined, TwitterOutlined, UserOutlined, UserSwitchOutlined } from '@ant-design/icons'
import "./style.css";

const { Footer } = Layout;

export const FooterPage = () => {
  return (
    <div>
      <Footer>
        <Row gutter={16} justify="space-around" align="top">
          <Col xs={24} sm={24} md={12} lg={6}></Col>
          <Col xs={24} sm={24} md={12} lg={6}>
            <ul className="footer-ul">
              <li className="footer-li"> <UserOutlined className="mr-10" />About Us</li>
              <li className="footer-li"><UserSwitchOutlined className="mr-10" />Collabrate With Us</li>
              <li className="footer-li"> <MailOutlined  className="mr-10" /> Email Us</li>
              <li className="footer-li"><SendOutlined className="mr-10" />Request Callback</li>
            </ul>
          </Col>
          <Divider className="cs-only-for-mobile" />
          <Col xs={24} sm={24} md={12} lg={6}>
            <ul className="footer-ul">
              <li className="footer-li"><FileDoneOutlined className="mr-10" />Terms & Condition</li>
              <li className="footer-li"><EyeInvisibleOutlined className="mr-10" />Privacy Policy</li>
            </ul>
          </Col>
          <Divider className="cs-only-for-mobile" />
          <Col xs={24} sm={24} md={12} lg={6}>
            <ul className="footer-ul">
              <li className="footer-li"><InstagramOutlined className="mr-10" />Instagram</li>
              <li className="footer-li"><TwitterOutlined className="mr-10"/>Twitter</li>
              <li className="footer-li"><FacebookOutlined className="mr-10"/>Facebook</li>
              <li className="footer-li"><LinkedinOutlined className="mr-10"/>Linkedin</li>
            </ul>
          </Col>
        </Row>
      </Footer>
    </div>
  );
};
