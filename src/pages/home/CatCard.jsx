import React from 'react'
import dummyImage from '../../assets/images/dummy.jpg'
import { Row , Col } from 'antd'
import './style.css'

export const CatCard = () => {
    
    const getCard = (idx) => {
        return (
            <div key={idx} className="d ai-center p-1 jc-sa cat-card-wrapper">
                <div className={"cat-card-image-wrapper" + (idx % 2 === 0 ? "-up" : "-down")}>
                    <img className="wh-60px" src={dummyImage} alt="" />
                </div>
                <div className={"display-column cat-card-text-wrapper"  + (idx % 2 !== 0 ? "-up" : "-down") }>
                    <h3 className="m-0">77,232</h3>
                    <p>Global Product</p>
                </div>
            </div>
        )
    }

    return (
        <div className="mobile-mt">
            <Row gutter={[16, 16]}>
                {[0,1,2,3,].map((data, key) => 
                    <Col key={key} sm={12} xs={12} md={6}>
                        {getCard(key)}
                    </Col>
                )}
            </Row>
        </div>
    )
}
