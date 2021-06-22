import { Row,Col, Button, Collapse } from 'antd'
import React from 'react'
import { AppController } from '../../appController/AppController'
import { MainWrapper } from '../../lib/wrapper'
import InnerImageZoom from 'react-inner-image-zoom';
import DummyImage from '../../assets/images/dummy.jpg'
import './style.css'

export const SingleProduct = ({history}) => {
    const getImagePreview = () => {
        return (
            <div className="d">
                <div className="display-column">
                    <div className="image-preview">
                        <img style={{height:'100%'}} src={DummyImage} alt="asd" />
                    </div>
                    <div className="image-preview">
                        <img style={{height:'100%'}} src={DummyImage} alt="asd" />
                    </div>
                </div>
                <div className="cs-not-for-mobile">
                    <InnerImageZoom width={500} zoomScale={2} src={DummyImage} zoomSrc={DummyImage} />
                </div>
                <div className="cs-only-for-mobile">
                    <InnerImageZoom width={300} zoomScale={2} src={DummyImage} zoomSrc={DummyImage} />
                </div>
            </div>
        )
    }

    const getSideMenu = () => {
        return (
            <div className="sticky">
                <h1 style={{fontSize:32, margin:0}}>Dummy Title</h1>
                <p className="mb-30 fnt-sz-18">dummy cat</p>
                <Button style={{width:'100%'}} type="primary">Requet For Quote</Button>
                <h3 className="mt-30"><b>Latest </b>Quis irure sit et irure commodo.</h3>
            </div>
        )
    }

    const getDetails = () => {
        const getHeader = () => {
            return (
                <div className="mt-10 mb-10">
                    <h3>Description</h3>
                </div>
            )
        }
        return (
            <div className="mt-30">
                <Collapse ghost expandIconPosition="right"  >
                    <Collapse.Panel className="produc-des-collapse" header={getHeader()} >
                        <div className="p-1">
                            Aliqua non magna incididunt minim quis sunt aliqua qui ad eiusmod aliqua reprehenderit qui. Laborum elit dolore magna non mollit dolor exercitation. Sint irure id sit tempor aute incididunt dolor. Tempor duis proident irure voluptate do cupidatat irure sit nisi mollit quis. Ut occaecat reprehenderit cillum qui adipisicing commodo aliquip voluptate cupidatat. Laborum occaecat sunt officia adipisicing non deserunt minim ut laborum velit.
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel className="produc-des-collapse" header={getHeader()} >
                        <div className="p-1">
                            Aliqua non magna incididunt minim quis sunt aliqua qui ad eiusmod aliqua reprehenderit qui. Laborum elit dolore magna non mollit dolor exercitation. Sint irure id sit tempor aute incididunt dolor. Tempor duis proident irure voluptate do cupidatat irure sit nisi mollit quis. Ut occaecat reprehenderit cillum qui adipisicing commodo aliquip voluptate cupidatat. Laborum occaecat sunt officia adipisicing non deserunt minim ut laborum velit.
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel className="produc-des-collapse" header={getHeader()} >
                        <div className="p-1">
                            Aliqua non magna incididunt minim quis sunt aliqua qui ad eiusmod aliqua reprehenderit qui. Laborum elit dolore magna non mollit dolor exercitation. Sint irure id sit tempor aute incididunt dolor. Tempor duis proident irure voluptate do cupidatat irure sit nisi mollit quis. Ut occaecat reprehenderit cillum qui adipisicing commodo aliquip voluptate cupidatat. Laborum occaecat sunt officia adipisicing non deserunt minim ut laborum velit.
                        </div>
                    </Collapse.Panel>
                    <Collapse.Panel className="produc-des-collapse" header={getHeader()} >
                        <div className="p-1">
                            Aliqua non magna incididunt minim quis sunt aliqua qui ad eiusmod aliqua reprehenderit qui. Laborum elit dolore magna non mollit dolor exercitation. Sint irure id sit tempor aute incididunt dolor. Tempor duis proident irure voluptate do cupidatat irure sit nisi mollit quis. Ut occaecat reprehenderit cillum qui adipisicing commodo aliquip voluptate cupidatat. Laborum occaecat sunt officia adipisicing non deserunt minim ut laborum velit.
                        </div>
                    </Collapse.Panel>
                </Collapse>
            </div>
        )
    }
    return (
        <div>
            <AppController history={history}>
                <MainWrapper>
                    <div className="mt-30">
                        <Row gutter={16}>
                            <Col xs={24} sm={24} md={16} lg={16}>
                                {getImagePreview()}
                                {getDetails()}
                            </Col>
                            <Col xs={24} sm={24} md={8} lg={8}>
                                {getSideMenu()}
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} sm={24} md={16} lg={16}>
                            </Col>
                        </Row>
                    </div>
                </MainWrapper>
            </AppController>
        </div>
    )
}
