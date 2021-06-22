import React from 'react'
import {Row, Col} from 'antd'
import { ArrowRightOutlined } from '@ant-design/icons'
import dummyImage from '../../assets/images/dummy.jpg'

export const ChoseUsPage = () => {
    return (
        <div className="mobile-mt">
            <Row gutter={[16,16]}>
                <Col xs={24} sm={24} md={12}>
                    <div className="mobile-mt display-column">
                        <h3 className="app-title">The easiest way to deliver interior desgin projects</h3>
                        <div className="display-column pl-30">
                            <div className="d ai-fs">
                                <ArrowRightOutlined />
                                <div className="display-column ml-30">
                                    <h4 className="fnt-sz-18">More time</h4>
                                    <p>Ad aute ut qui enim labore non incididunt.</p>
                                </div>
                            </div>
                            <div className="d ai-fs mt-20 mb-20">
                                <ArrowRightOutlined />
                                <div className="display-column ml-30">
                                    <h4 className="fnt-sz-18">More time</h4>
                                    <p>Ad aute ut qui enim labore non incididunt.</p>
                                </div>
                            </div>
                            <div className="d ai-fs">
                                <ArrowRightOutlined />
                                <div className="display-column ml-30">
                                    <h4 className="fnt-sz-18">More time</h4>
                                    <p>Ad aute ut qui enim labore non incididunt.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </Col>
                <Col className="cs-not-for-mobile" xs={24} sm={24} md={12}>
                    <div className="display-column">
                        <div className="d jc-fs">
                            <div className="choose-us-image-wrapper">
                                <img src={dummyImage} alt="" />
                                <div className="p-2">
                                    <p className="mb-10">BOUTIQUE HOTEL, ROMANIA</p>
                                    <h4 className="m-0">MANEA</h4>
                                    <span >Architects</span>
                                </div>
                            </div>
                            <div className="choose-us-image-wrapper">
                                <img src={dummyImage} alt="" />
                                 <div className="p-2">
                                    <p className="mb-10">BOUTIQUE HOTEL, ROMINA</p>
                                    <h4 className="m-0">MANEA</h4>
                                    <span >Architects</span>
                                 </div>
                            </div>
                        </div>
                        <div className="d jc-fe" >
                            <div className="choose-us-image-wrapper">
                                <img src={dummyImage} alt="" />
                                 <div className="p-2">
                                    <p className="mb-10">BOUTIQUE HOTEL, ROMINA</p>
                                    <h4 className="m-0">MANEA</h4>
                                    <span >Architects</span>
                                 </div>
                            </div>
                            <div className="choose-us-image-wrapper">
                                <img src={dummyImage} alt="" />
                                 <div className="p-2">
                                    <p className="mb-10">BOUTIQUE HOTEL, ROMINA</p>
                                    <h4 className="m-0">MANEA</h4>
                                    <span >Architects</span>
                                 </div>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
