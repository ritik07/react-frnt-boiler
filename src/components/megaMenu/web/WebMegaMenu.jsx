import React from "react";
import { Popover, Menu } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";

const { SubMenu } = Menu

const menu = <div className="menu-popover">
  <div className="d">
    <div className="display-cloumn">
      <div>
        <h2 className="m-0">About Us</h2>
        <ul className="menu-item-ul">
          <li className="cs-fw-500 cs-font-16 cs-pointer">Our Team</li>
          <li className="cs-fw-500 cs-font-16 cs-pointer5px">Our Doctors</li>
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
            <li className="menu-li">
              <div className="cs-dis-flex">
                <div className="cs-clr-fff cs-fw-600">Organization</div>
                <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
              </div>
            </li>
          </Popover>
          <li className="menu-li">
            <div className="cs-dis-flex">
              <div className="cs-clr-fff cs-fw-600">Specialities</div>
              <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
            </div>
          </li>
          <li className="menu-li">
            <div className="cs-dis-flex">
              <div className="cs-clr-fff cs-fw-600">Services</div>
              <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
            </div>
          </li>
          <li className="menu-li">
            <div className="cs-dis-flex">
              <div className="cs-clr-fff cs-fw-600">FAQs</div>
              <div className="cs-vt-center cs-dis-flex cs-clr-fff"><CaretDownOutlined /></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}


export const WebMegaMenu = ({ history }) => {
  return (
    <>
      {getForPc(history)}
    </>
  );
};
