import React, { useState } from "react";
import { BulbOutlined, FileOutlined, SearchOutlined, MobileOutlined, BellFilled, UserOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Menu, Badge } from "antd";
import { Row, Col } from 'reactstrap'
import logo from '../../assets/images/logo/logo.jpeg'
import "./style.css";

const { SubMenu } = Menu;

const menu = (
  <Menu mode="inline" theme="light" style={{
    zIndex: 5
  }} >
    <SubMenu key="sub1" title="Bed" >
      <Menu.Item key="1">dummy</Menu.Item>
    </SubMenu>
  </Menu>
);

export const WebHeader = ({ history }) => {

  const [searchText, setSearchText] = useState("")
  const [isFocus, setIsFocus] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const inspireContent = (
    <div className="header-item-drop" >
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li onClick={() => history.push('/blog')} className="list-item">Blog</li>
      </ul>
    </div>
  );

  const userContent = (
    <div className="header-item-drop" >
      <ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
        <li onClick={() => history.push('/quote')} className="list-item">Second Consultation Drafts</li>
        <li onClick={() => history.push('/order')} className="list-item">Active Second Consultation</li>
        <li onClick={() => history.push('/favourite')} className="list-item">Second Consultation History</li>
        <li onClick={() => history.push('/favourite')} className="list-item">Payments History</li>
        <li onClick={() => history.push('/favourite')} className="list-item">User and Family Details</li>
      </ul>
    </div>
  );

  const handleOnFocus = () => {
    setIsFocus(true)
  }

  const handleOnBlur = () => {
    setIsFocus(false)
  }

  return (
    <div className="cs-not-for-mobile cs-web-container">
      <Row className="cs-vt-center cs-dis-flex">
        <Col xl={4} lg={2} md={3}>
          <Row className="cs-vt-center cs-dis-flex">
            <Col xl={5} lg={12} md={4}>
              <img src={logo} className="cs-w-100" />
            </Col>
            <Col xl={7} lg={4} md={4} className="cs-hide-lg-tab">
              <div className="cs-fw-500 cs-font-26 cs-pointer">
                Second Consultant
							</div>
            </Col>
          </Row>
        </Col>

        <Col xl={5} lg={6} md={5}>
          <Row>
            <Col xl={7} lg={7} md={7}>
              <div className="cs-get-second-consultant cs-dis-flex cs-vt-center cs-hrz-center">
                <div className="cs-clr-fff cs-fw-500 cs-lp-10 cs-rp-10 cs-dis-flex cs-hrz-center">
                  Get Second Consultation
								</div>
              </div>
            </Col>

            <Col xl={5} lg={5} md={5}>
              <div className="cs-customer-care cs-dis-flex cs-vt-center cs-hrz-center">
                <div className="cs-rm-5 cs-dis-flex cs-vt-center">
									<MobileOutlined className="cs-clr-fff" />
								</div>
                <div className="cs-clr-fff cs-fw-500">
                  Customer Care
								</div>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xl={isFocus ? 3 : 1} lg={isFocus ? 4 : 2} md={2} className="cs-dis-flex cs-vt-center cs-hrz-center">
          <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} onFocus={handleOnFocus} onBlur={handleOnBlur}
            className="cs-br-18" size="large" placeholder="Search" allowClear={true} prefix={<SearchOutlined />} />
        </Col>
        
        {!isLoggedIn ? 
        <Col xl={2} lg={2} md={2} className={isFocus ? "cs-dis-none" : ""}>
          <Row noGutters={true}>
            <Col xl={6} lg={6} md={6}>
              <div className="cs-btn-login cs-pointer">
                <div>
                  Login
								</div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6}>
              <div className="cs-btn-signup cs-pointer">
                <div>
                  Sign up
								</div>
              </div>
            </Col>
          </Row>
        </Col> : 
        <Col xl={2} lg={2} md={2} className={isFocus ? "cs-dis-none" : ""}>
        <Row noGutters={true}>
          <Col xl={3} lg={6} md={6}>
            <div className="cs-btn-login cs-pointer">
              <div>
            <Badge size="small" count={5}>
                <BellFilled style={{fontSize:20, color:"#009378"}}/>
            </Badge>
              </div>
            </div>
          </Col>
          <Col xl={7} lg={6} md={6}>
          <Popover content={userContent} placement="bottomRight">
            <div className="cs-btn-signup cs-pointer">
              <div className="cs-dis-flex cs-vt-center cs-rm-5">
                <UserOutlined/>
              </div>
              <div className="cs-dis-flex cs-vt-center">
                Ritik
              </div>
            </div>
          </Popover>
          </Col>
        </Row>
      </Col>}
      </Row>
    </div>);
};
