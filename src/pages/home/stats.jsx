import React from 'react'
import { Row , Col, Divider } from 'antd'

export const StatsPage = () => {
    return (
        <div className="mobile-mt">
            <Row gutter={[16,16]} justify="center" align="middle">
                <Col xs={24} sm={24} md={12}>
                    <div>
                        <h1 className="app-title">Labore tempor id aute eu proident eiusmod aliqua</h1>
                        <p className="app-sub-title" >In velit laboris quis incididunt sit ex dolor nisi non officia. Ex veniam aliqua ex excepteur sint in. Reprehenderit voluptate cillum irure pariatur nostrud proident magna excepteur commodo.</p>
                    </div>
                    <h3 className="mt-20">More about us</h3>
                </Col>
                <Col xs={24} sm={24} md={12}>
                    <Row gutter={[16,16]} justify="center" align="middle">
                        <Col xs={24} sm={24} md={12}>
                            <div className="stats-card display-column">
                                <p>SUPPLIERS</p>
                                <h3>2000+</h3>
                                <Divider />
                                <p>Duis eiusmod dolore qui eiusmod aliqua labore et amet dolore et eu anim exercitation ad.</p>
                            </div>
                            <div className="stats-card display-column primary-back">
                                <p>SUPPLIERS</p>
                                <h3>2000+</h3>
                                <Divider />
                                <p>Sit tempor eu sunt deserunt do do voluptate consectetur laboris proident commodo sit.</p>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12}>
                            <div className="stats-card display-column orange-back">
                                <p>SUPPLIERS</p>
                                <h3>2000+</h3>
                                <Divider />
                                <p>Sunt incididunt consectetur anim cillum ut.</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
