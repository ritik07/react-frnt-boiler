import React from 'react'
import {Row, Col, Button, Steps} from 'antd';
import { FileOutlined, RightOutlined } from '@ant-design/icons';
import DummyImage from '../../assets/images/dummy.jpg'
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';
import './style.css'

const { Step } = Steps;

export const Main = () => {
    return (
        <section>
            <Row>
                <Col sm={24} xs={24} md={12}>
                    <Row gutter={16}>
                        <Col span={24}>
                            <div className="display-column mobile-mt">
                                <h2 className="app-title">Welcome to Furniture Boutiq</h2>
                                <p className="app-sub-title">Minim enim incididunt ullamco anim fugiat ut exercitation ullamco voluptate incididunt.</p>
                                <Button type="primary" className="mt-20">Browse Product <RightOutlined /></Button>
                            </div>
                        </Col>
                        <Col span={24}>
                        <div className="mobile-mt cs-only-for-mobile">
                            <Steps labelPlacement="vertical"  direction="vertical" >
                                <Step status="finish" description="Share all your project requirements" title="Login" icon={<UserOutlined  className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Verification" icon={<SolutionOutlined className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Pay" icon={<FileOutlined className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Done" icon={<SmileOutlined className="icon-wrapper-green" />} />
                            </Steps>
                        </div>
                        <div className="mobile-mt cs-not-for-mobile">
                            <Steps labelPlacement="vertical" >
                                <Step status="finish" description="Share all your project requirements" title="Login" icon={<UserOutlined  className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Verification" icon={<SolutionOutlined className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Pay" icon={<FileOutlined className="icon-wrapper-green" />} />
                                <Step status="finish" description="Share all your project requirements" title="Done" icon={<SmileOutlined className="icon-wrapper-green" />} />
                            </Steps>
                        </div>
                        </Col>
                    </Row>
                </Col>
                <Col sm={24} xs={24} md={12}>
                    <div className="display-column ai-center">
                        <img className="w-100" style={{maxHeight:600}} src={DummyImage} alt="sfd" />
                        <div className="first-wrapper p-1">
                            <div className="display-column">
                                <div className="d jc-sa p-1">
                                    <img className="wh-50px" src={DummyImage} alt="" />
                                    <img className="wh-50px"  src={DummyImage} alt="" />
                                    <img className="wh-50px"  src={DummyImage} alt="" />
                                </div>
                                <div className="d jc-sb ai-center mt-20">
                                    <div><img className="wh-80px" src={DummyImage} alt="" /></div>
                                    <div className="display-column ml-5">
                                        <h4 className="fnt-sz-12 m-0" >Yelllow Couch</h4>
                                        <p className="fnt-sz-11">Living Room | Cooton Velevt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="second-wrapper p-1">
                            <div className="display-column">
                                <div className="d jc-sa p-1">
                                    <img className="wh-50px" src={DummyImage} alt="" />
                                    <img className="wh-50px"  src={DummyImage} alt="" />
                                    <img className="wh-50px"  src={DummyImage} alt="" />
                                </div>
                                <div className="d jc-sb ai-center mt-20">
                                    <div><img className="wh-80px" src={DummyImage} alt="" /></div>
                                    <div className="display-column ml-5">
                                        <h4 className="fnt-sz-12 m-0" >Yelllow Couch</h4>
                                        <p className="fnt-sz-11">Living Room | Cooton Velevt</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </section>
    )
}
