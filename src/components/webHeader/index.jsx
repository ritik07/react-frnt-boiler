import { BulbOutlined, FileOutlined, SearchOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, Input, Popover, Menu } from "antd";
import { Row, Col } from 'reactstrap'
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
				<li onClick={() => history.push('/blog')} className="list-item">Blog</li>
			</ul>
		</div>
	);

	const manageContent = (
		<div className="header-item-drop" >
			<ul style={{ listStyle: 'none', textAlign: 'left', padding: 0 }}>
				<li onClick={() => history.push('/quote')} className="list-item">Quote</li>
				<li onClick={() => history.push('/order')} className="list-item">Order</li>
				<li onClick={() => history.push('/favourite')} className="list-item">Favorite</li>
			</ul>
		</div>
	);

	return (
		<div className="cs-p-15 cs-not-for-mobile cs-web-container">
			<Row className="cs-vt-center cs-dis-flex">
				<Col xl={3} lg={3} md={3}>
					<Row className="cs-vt-center cs-dis-flex">
						<Col xl={4} lg={4} md={4}>
							<div className="cs-fw-400 cs-font-18">
								Logo
							</div>
						</Col>
						<Col xl={8} lg={4} md={4}>
							<div className="cs-fw-500 cs-font-20 cs-pointer">
								Second Consultant
							</div>
						</Col>
					</Row>
				</Col>

				<Col xl={5} lg={5} md={5}>
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

				<Col xl={2} lg={2} md={2} className="cs-dis-flex cs-vt-center cs-hrz-center">
					<div className="d">
						<Input className="cs-br-18" size="large" placeholder="Search" allowClear={true} prefix={<SearchOutlined />} />
					</div>
				</Col>

				<Col xl={2} lg={2} md={2}>
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
				</Col>
			</Row>
		</div>);
};
