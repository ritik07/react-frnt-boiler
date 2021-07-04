import React, { useState } from 'react'
import Lottie from 'react-lottie';
import GetSecondConsultationAnimation from '../../../static/json/get-second-consultation.json'
import { Row, Col } from 'reactstrap'
import { PhoneOutlined } from "@ant-design/icons";
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const GetSecondConsultation = () => {

  const [user, setUser] = useState(true)

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: GetSecondConsultationAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="cs-web-container-70 cs-bm-60" style={{ marginBottom: 30 }}>
      {!user ? <Row>
        <Col xl={5} lg={12}>
          <Lottie options={defaultOptions}
            height={400}
            width={400}
            isClickToPauseDisabled={true}
            isStopped={false}
            isPaused={false} />
        </Col>
        <Col xl={7} lg={12} className="cs-dis-flex cs-vt-center">
          <div>
            <div className="cs-fw-600 cs-font-20 cs-font-italic">
              Be sure about your medical treatment,
            </div>
            <Row noGutters={true}>
              <Col xl={1} lg={1} className="cs-dis-flex cs-vt-center">
                <div className="cs-fw-600 cs-font-20 cs-dis-flex cs-vt-center">
                  Get
                </div>
              </Col>
              <Col xl={11} lg={11}>
                <h2 className="cs-clr-green">Second Consultation</h2>
              </Col>
            </Row>

            <Row className="cs-tp-20">
              <Col xl={3} lg={3} className="cs-vt-line">
                <div className="cs-font-20 cs-fw-500">
                  From
                  500+
                  Doctors
                </div>
              </Col>
              <Col xl={3} lg={3} className="cs-vt-line">
                <div className="cs-font-20 cs-fw-500">
                  across
                  30+
                  Specialities
                </div>
              </Col>
              <Col xl={3} lg={3} className="cs-vt-line">
                <div className="cs-font-20 cs-fw-500">
                  via
                  Fully
                  Online mode
                </div>
              </Col>
              <Col xl={3} lg={3}>
                <div className="cs-font-20 cs-fw-500">
                  Just upload
                  your 1st
                  Diagnosis!
                </div>
              </Col>
            </Row>

            <Row className="cs-tp-40">
              <Col>
                <div className="cs-btn-get-second-consultant-invert cs-dis-flex cs-hrz-center">
                  Get Second Consultation
                </div>
              </Col>
              <Col>
                <div className="d ai-center cs-btn-call-invert cs-dis-flex cs-hrz-center">
                  <PhoneOutlined className="cs-rm-10" />
                    Get Second Consultation
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row> :
        <div>
          <div className="cs-font-38 cs-fw-600 cs-tm-20">
            Hi Ritik!
        </div>

          <Tabs defaultActiveKey="1" size="middle" style={{ marginBottom: 32 }}>
            <TabPane tab="Active Second Consultation" key="1">
              Content of tab 1
          </TabPane>
            <TabPane tab="Second Consultatation Drafts" key="2">
              Content of tab 2
          </TabPane>
            <TabPane tab="Second Consultation History" key="3">
              Content of tab 3
          </TabPane>
          </Tabs>
          {/* <Tabs defaultActiveKey="1" type="card" size={"middle"}>
            <TabPane tab="Card Tab 1" key="1">
              Content of card tab 1
          </TabPane>
            <TabPane tab="Card Tab 2" key="2">
              Content of card tab 2
          </TabPane>
            <TabPane tab="Card Tab 3" key="3">
              Content of card tab 3
          </TabPane>
          </Tabs> */}
        </div>}

    </div>
  )
}

export default GetSecondConsultation
