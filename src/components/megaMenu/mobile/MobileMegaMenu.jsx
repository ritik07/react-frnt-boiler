import React from "react";
import { Popover, Menu } from "antd";

const { SubMenu } = Menu

const getFormobile = () => {
    const handleClick = e => {
      console.log('click ', e);
    };
    return (
      <Menu
        className="cs-dis-flex cs-overflow-x-scroll"
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
  


export const MobileMegaMenu = ({ history }) => {
    return (
        <div>
            {getFormobile(history)}
        </div>
    );
};
