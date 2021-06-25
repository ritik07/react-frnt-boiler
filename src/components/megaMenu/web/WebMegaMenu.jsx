import React from "react";
import { Popover, Menu } from "antd";

const { SubMenu } = Menu

const menu = <div className="menu-popover">
  <div className="d">
    <div className="display-cloumn">
      <div>
        <h2 className="m-0">About Us</h2>
        <ul className="menu-item-ul">
          <li className="cs-fw-500 cs-font-16 cs-pointer">Our Team</li>
          <li className="cs-fw-500 cs-font-16 cs-pointer">Our Doctors</li>
          <li className="cs-fw-500 cs-font-16 cs-pointer">Career</li>
          <li className="cs-fw-500 cs-font-16 cs-pointer">Our Clients</li>
        </ul>
      </div>
      <div>
        <h2 className="m-0">Testimonials</h2>
        <ul className="menu-item-ul">
          <li className="cs-fw-500 cs-font-16 cs-pointer">Customer's FeedBack</li>
          <li className="cs-fw-500 cs-font-16 cs-pointer">Doctor's FeedBack</li>
        </ul>
      </div>
    </div>
    <div className="d">
      <div className="vr-line"></div>
    </div>
    <div className="display-cloumn ml-30">
      <h2>Contact Us</h2>
      <ul className="menu-item-ul">
        <li className="cs-fw-500 cs-font-16 cs-pointer">Customer Support</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Technical Support</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Chat with us</li>
      </ul>
    </div>
    <div className="d">
      <div className="vr-line"></div>
    </div>
    <div className="display-cloumn ml-30">
      <h2>Research and Blogs</h2>
      <ul className="menu-item-ul">
        <li className="cs-fw-500 cs-font-16 cs-pointer">WebMD Doctors</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Cedars-Sinai Blog</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Kaiser Health News</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Harvard Health Blog</li>
      </ul>
    </div>
    <div className="d">
      <div className="vr-line"></div>
    </div>
    <div className="display-cloumn ml-30">
      <h2>Clientele</h2>
      <ul className="menu-item-ul">
        <li className="cs-fw-500 cs-font-16 cs-pointer">Our Daily Customers</li>
        <li className="cs-fw-500 cs-font-16 cs-pointer">Family Doctors</li>
      </ul>
    </div>
  </div>
</div>;

const getForPc = () => {
  return (
    <div className="cs-not-for-mobile">
      <div className="mega-menu-wrapper">
        <ul className="menu-ul">
          <Popover content={menu} placement="bottomLeft">
            <li className="menu-li">Organization</li>
          </Popover>
          <li className="menu-li">Specialities</li>
          <li className="menu-li">Services</li>
          <li className="menu-li">FAQs</li>
        </ul>
      </div>
    </div>
  )
}

const getFormobile = () => {
  const handleClick = e => {
    console.log('click ', e);
  };
  return (
    <Menu
      className="cs-only-for-mobile"
      onClick={handleClick}
      // style={{ width: 256 }}
      style={{ backgroundColor: "#0093788a" }}
      defaultSelectedKeys={['1']}
      theme="dark"
      mode="inline">
      <SubMenu className="cs-mega-menu-mobile-bg" key="sub1" title="Organization">
        <SubMenu className="cs-mega-menu-mobile-bg cs-bm-0" key="aboutus" title="About Us">
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub1-1">Our Team</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub1-2">Our Doctors</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub1-3">Career</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub1-4">Our Clients</Menu.Item>
        </SubMenu>
        <SubMenu className="cs-mega-menu-mobile-bg cs-bm-0" key="Testimonials" title="Testimonials">
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub2-1">Customer's FeedBack</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub2-2">Doctor's FeedBack</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub2-3">Career</Menu.Item>
          <Menu.Item className="cs-mega-menu-mobile-bg cs-bm-0" key="sub2-4">Our Clients</Menu.Item>
        </SubMenu>
      </SubMenu>

      <SubMenu className="cs-mega-menu-mobile-bg" key="Specialities" title="Specialities">
      </SubMenu>

      <SubMenu className="cs-mega-menu-mobile-bg" key="Services" title="Services">
      </SubMenu>

      <SubMenu className="cs-mega-menu-mobile-bg" key="FAQs" title="FAQs">
      </SubMenu>

    </Menu>
  )

}


export const WebMegaMenu = ({ history }) => {
  return (
    <>
      {getForPc(history)}
    </>
  );
};
