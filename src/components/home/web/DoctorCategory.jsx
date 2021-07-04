import React, { useState } from 'react'
import { Row, Col } from 'reactstrap'
import Allergic from '../../../static/images/services/allergic.png'
import EyeCare from '../../../static/images/services/eyecare.png'
import Dental from '../../../static/images/services/dental.png'
import Cardiology from '../../../static/images/services/cardiology.png'
import Neurologist from '../../../static/images/services/neurologist.png'

const DoctorCategory = () => {

  const [viewAll, setViewAll] = useState(false)

  return (
    <div className="cs-web-container-70 cs-bm-60">
      <div className="cs-dis-flex cs-justify-sb">
        <div className="cs-fw-600 cs-font-24 cs-ws-3 cs-bm-25">High Quality Services for You</div>
        <div className="cs-fw-600 cs-font-16 cs-pointer" onClick={() => setViewAll(!viewAll)}>
        {viewAll ? "Show Less" : "View All"}
        </div>
      </div>
      <Row>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={Allergic} />
            </div>
            <div className="cs-clr-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Allergic Issue
            </div>
          </div>
        </Col>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={EyeCare} />
            </div>
            <div className="cs-clr-green cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Eye Care
            </div>
          </div>
        </Col>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={Dental} />
            </div>
            <div className="cs-clr-brown cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Dental Care
            </div>
          </div>
        </Col>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={Cardiology} />
            </div>
            <div className="cs-clr-light-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={Neurologist} />
            </div>
            <div className="cs-clr-brown cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Neurologist
            </div>
          </div>
        </Col>
        <Col xl={2} lg={2} className="cs-bm-20">
          <div>
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              <img src={Allergic} />
            </div>
            <div className="cs-clr-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
              Allergic Issue
            </div>
          </div>
        </Col>

        {viewAll ?
          <>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={Allergic} />
                </div>
                <div className="cs-clr-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Allergic Issue
            </div>
              </div>
            </Col>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={EyeCare} />
                </div>
                <div className="cs-clr-green cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Eye Care
            </div>
              </div>
            </Col>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={Dental} />
                </div>
                <div className="cs-clr-brown cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Dental Care
            </div>
              </div>
            </Col>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={Cardiology} />
                </div>
                <div className="cs-clr-light-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Cardiology
            </div>
              </div>
            </Col>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={Neurologist} />
                </div>
                <div className="cs-clr-brown cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Neurologist
                </div>
              </div>
            </Col>
            <Col xl={2} lg={2} className="cs-bm-20">
              <div>
                <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
                  <img src={Allergic} />
                </div>
                <div className="cs-clr-purple cs-fw-600 cs-font-18 cs-dis-flex cs-hrz-center">
                  Allergic Issue
            </div>
              </div>
            </Col>
          </>
          : null}
      </Row>

      {/* <div className="cs-tm-15 cs-dis-flex cs-hrz-center">
        <div className="cs-btn-view-more-invert">
          View More
        </div>
      </div> */}
    </div>
  )
}

export default DoctorCategory
