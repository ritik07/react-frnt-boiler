import React from 'react'
import {Row, Col} from 'antd'
import dummyImage from '../../assets/images/dummy.jpg'
import { MainWrapper } from '../../lib/wrapper'

export const ImageSection = () => {
    return (
        <div className="mobile-mt image-section-back"> 
            <MainWrapper>
                <Row className="" gutter={[0, 16]}>
                    <Col xs={24} sm={24} md={12}>
                        <img src={dummyImage} className="wh-100" alt="Asd" />
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <div className="mobile-p-90">
                            <h1 className="app-title">More Time</h1>
                            <p className="app-subt-title">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                            <p className="app-subt-title mt-20 mb-20">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                            <p className="app-subt-title">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="" gutter={[0, 16]} >
                    <Col xs={24} sm={24} md={12}>
                        <div className="mobile-p-90">
                            <h1 className="app-title">More Time</h1>
                            <p className="app-subt-title">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                            <p className="app-subt-title mt-20 mb-20">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                            <p className="app-subt-title">Est consectetur deserunt elit anim sint eiusmod incididunt non occaecat Lorem sunt sint.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={12}>
                        <img src={dummyImage} className="wh-100" alt="Asd" />
                    </Col>
                </Row>
            </MainWrapper>
        </div>
    )
}
