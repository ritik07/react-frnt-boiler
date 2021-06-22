import React from "react";
import { Popover, Menu } from "antd";
import "./style.css";

const { SubMenu } = Menu

const menu = <div className="menu-popover">
    <div className="d">
        <div className="display-cloumn">
            <div>
                <h2 className="m-0">Heading1</h2>
                <ul className="menu-item-ul">
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                </ul>
            </div>
            <div>
                <h2 className="m-0">Heading1</h2>
                <ul className="menu-item-ul">
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                    <li className="menu-item-li">item1</li>
                </ul>
            </div>
        </div>
        <div className="d">
            <div className="vr-line"></div>
        </div>
        <div className="display-cloumn ml-30">
            <h2>Heading1</h2>
            <ul className="menu-item-ul">
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
            </ul>
        </div>
        <div className="d">
            <div className="vr-line"></div>
        </div>
        <div className="display-cloumn ml-30">
            <h2>Heading1</h2>
            <ul className="menu-item-ul">
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
            </ul>
        </div>
        <div className="d">
            <div className="vr-line"></div>
        </div>
        <div className="display-cloumn ml-30">
            <h2>Heading1</h2>
            <ul className="menu-item-ul">
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
                <li className="menu-item-li">item1</li>
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
                <li className="menu-li">dummy</li>
                </Popover>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
                <li className="menu-li">dummy</li>
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
            style={{backgroundColor:"#5b7070"}}
            defaultSelectedKeys={['1']}
            theme="dark"
            mode="inline"
        >
            <SubMenu  key="sub1"  title="Categories">
                <Menu.Item style={{backgroundColor:'#5b7070'}} key="1">Default</Menu.Item>
            </SubMenu>
        </Menu>
    )
    
}


export const MegaMenu = ({history}) => {
    return (
        <>
            {getForPc(history)}
            {getFormobile(history)}
        </>
    );
};
