import React, { useState } from "react";
import { Layout, Menu, Image, } from "antd";
import logo from "../../assets/DMMS-blue.png";
import { menuLayoutA } from "../../elements/layout/AppControllerLayout";
import "./sideMenu.css";

const { Sider } = Layout;
const { SubMenu } = Menu;

export const SideMenu = props => {

	let { collapsed, setcollapsed, history } = props;
	const [menuLayout, setmenuLayout] = useState(menuLayoutA);

	const getMenuItem = (menuItem) => {
		return (
			<Menu.Item
				className="sidebar-menu-bg"
				theme="dark"
				key={menuItem.key}
				icon={menuItem.icon}
				onClick={() => {
					history.push(menuItem.path)
					setcollapsed(!collapsed);
				}}
			>
				{menuItem.title}
			</Menu.Item>
		)
	}
	return (
		<Sider
			width={280}
			style={{
				zIndex: 999,
				overflow: 'auto',
				height: '100vh',
				// position: 'fixed',
				backgroundColor: '#0093788a',
				left: 0,
			}}
			collapsible={true}
			collapsedWidth={0}
			collapsed={collapsed}
			theme="dark"
			trigger={null}
		>
			<div className="d jc-center ai-center mt-20 mb-20 ml-20 logo" >
				<Image preview={false} id="menu-logo" width={100} src={logo} />
			</div>
			<Menu theme="dark" mode="inline" style={{background:"#0093788a"}}>
				{menuLayout.map(menuItem =>
					menuItem.type !== "parent" ? getMenuItem(menuItem) :
					<SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.title} >
						{menuItem.children.map(menuItem => getMenuItem(menuItem))}
					</SubMenu>
				)}
			</Menu>
		</Sider>
	);
};
