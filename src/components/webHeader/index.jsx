import { BulbOutlined, FileOutlined, SearchOutlined } from "@ant-design/icons";
import { Col, Row, Button, Input, Popover, Menu } from "antd";
import React from "react";
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
	const inspireContent = (
		<div className="header-item-drop" >
			<ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
				<li onClick={()=>history.push('/blog')} className="list-item">Blog</li>
			</ul>
		</div>
	);
	
	const manageContent = (
		<div className="header-item-drop" >
			<ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
				<li onClick={()=>history.push('/quote')} className="list-item">Quote</li>
				<li onClick={()=>history.push('/order')} className="list-item">Order</li>
				<li onClick={()=>history.push('/favourite')} className="list-item">Favorite</li>
			</ul>
		</div>
	);

	return (
		<div className="cs-not-for-mobile header-content">
			<Row gutter={16} style={{ width: "100%", height: 80 }} justify="center">
				<Col span={2}>
					<div className="ai-center mt-25">Furniture Boutiq</div>
				</Col>
				<Col span={3}>
					<Popover content={inspireContent} placement="bottomLeft">
						<div className="d-flex ai-center jc-c header-item" style={{ textAlign: 'center', height: '100%' }}>
							<BulbOutlined />
							<p className="header-text">Inspire</p>
						</div>
					</Popover>
				</Col>
				<Col span={3}>
					<Popover content={manageContent} placement="bottomLeft">
						<div className="d-flex ai-center jc-c header-item" style={{ textAlign: 'center', height: '100%' }}>
							<FileOutlined />
							<p className="header-text">Manage</p>
						</div>
					</Popover>
				</Col>
				<Col span={12}>
					<div className="d ai-center mt-20">
						<Input size="large" placeholder="serach in category" allowClear={true} prefix={<SearchOutlined />} />
						<Popover content={menu} placement="bottomLeft" trigger="click">
							<div className="search-cat">
								Category
							</div>
						</Popover>
					</div>
				</Col>
				<Col span={2}>
					<div className="mt-15">
						<Button onClick={() => { history.push('/log-in'); }} className="outline-button">LOG IN</Button>
					</div>
				</Col>
				<Col span={2}>
					<div className="mt-15">
						<Button onClick={() => history.push('/sign-up')} className="white-button">SIGN UP</Button>
					</div>
				</Col>
			</Row>
		</div>
	);
};
