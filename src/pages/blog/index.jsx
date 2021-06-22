import { ArrowRightOutlined } from '@ant-design/icons'
import { Col, Row,Button, Tag } from 'antd'
import React from 'react'
import {AppController} from '../../appController/AppController'
import { MainWrapper } from '../../lib/wrapper'
import DummyImage from '../../assets/images/dummy.jpg'
import './style.css'

const getLongCard = () => {
    return (
        <div className="p-2">
            <Row style={{height:300, maxHeight:300}}>
                <Col sm={24} xs={24} md={6}>
                <div className="product-card">
                    <div className="card-image-wrapper mb-10">
                        <div className="card-image">
                            <img style={{width:'50%'}} src={DummyImage} alt="dummy" />
                        </div>
                    </div>
                    <h2 className="m-0 product-title">Dummy Title</h2>
                    <p className="m-0"><b>dummy cat</b></p>
                </div>
                </Col>
            </Row>
        </div>
    )
}

export const BlogPage = ({history}) => {
    return (
        <AppController history={history}>
            <MainWrapper>
                <div className="mt-30">
                    <Row >
                        <Col xs={24} sm={24} md={12} >
                            <div className="display-column">
                                <h1 style={{fontSize:48, margin:0}}>Blog</h1>
                                <p>Welcome to blog section</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="d jc-sb mt-30">
                        <div className="display-column">
                            <h2 className="m-0">Case Studies</h2>
                            <p>Ut occaecat ullamco elit qui veniam aute commodo duis irure cillum reprehenderit ex aute.</p>
                        </div>
                        <Button type="primary" >View All <ArrowRightOutlined /></Button>
                    </div>
                    {getLongCard()}
                </div>
            </MainWrapper>
        </AppController>
    )
}
