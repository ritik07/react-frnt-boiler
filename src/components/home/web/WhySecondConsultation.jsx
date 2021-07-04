
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { Row, Col } from 'reactstrap'
import WHYSC from '../../../static/images/home/why-sc.jpg'
import Play from '../../../static/images/icons/play.png'


const WhySecondConsultation = () => {

  const [isOpen, setOpen] = useState(false)


  return (
    <div className="cs-web-container-70 cs-bm-60">
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <Row noGutters={true} className="cs-card cs-p-10">
        <Col xl={6}>
          <div>
            <div className="cs-pos-abs cs-play-btn cs-pointer" onClick={() => setOpen(true)}>
              <div className="cs-dis-flex">
                <div className="cs-rm-20">
                  <img src={Play} />
                </div>
                <div className="cs-clr-fff cs-font-20 cs-fw-600 cs-dis-flex cs-vt-center">
                  PLAY VIDEO
              </div>
              </div>
            </div>
            <img src={WHYSC} className="cs-w-100 cs-pointer" onClick={() => setOpen(true)} />
            {/* <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}
          </div>
        </Col>
        <Col className="cs-bg-purple-op-1">
          <div className="cs-p-40">
            <div className="cs-fw-600 cs-font-34 cs-lh-40 cs-clr-purple">
              Why is Second Consultation Important?
            </div>
            <div className="cs-fw-600 cs-font-20 cs-lh-28 cs-clr-purple cs-tp-20">
              1. To be sure that suggested treatment is correct
            </div>
            <div className="cs-fw-600 cs-font-20 cs-lh-28 cs-clr-purple cs-tp-10">
              2. More than 20% of medical deaths happen due to
              mis-diagnosis
            </div>
            <div className="cs-fw-600 cs-font-20 cs-lh-28 cs-clr-purple cs-tp-10">
              3. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore exercitationem eveniet necessitatibus, reiciendis accusantium aliquam aspernatur cumque obcaecati.
            </div>
          
            <Row className="cs-tp-40">
              <Col xl={6} className="cs-bp-30">
                <div className="cs-home-feature-card cs-bg-brown-op-4 cs-dis-flex cs-hrz-center">
                  <div>
                    <div className="cs-font-20 cs-fw-600 cs-clr-dark-brown cs-hrz-center cs-dis-flex">
                      1000+
                    </div>
                    <div className="cs-hrz-center cs-dis-flex cs-font-16 cs-clr-666">
                      Happy Patients
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={6} className="cs-bp-30">
                <div className="cs-home-feature-card cs-bg-purple-op-4 cs-dis-flex cs-hrz-center">
                  <div>
                    <div className="cs-font-20 cs-fw-600 cs-clr-purple cs-hrz-center cs-dis-flex">
                      380+
                    </div>
                    <div className="cs-hrz-center cs-dis-flex cs-font-16 cs-clr-666">
                      Expert Doctors
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={6} className="cs-bp-30">
                <div className="cs-home-feature-card cs-bg-green-op-4 cs-dis-flex cs-hrz-center">
                  <div>
                    <div className="cs-font-20 cs-fw-600 cs-clr-green cs-hrz-center cs-dis-flex">
                      380+
                    </div>
                    <div className="cs-hrz-center cs-dis-flex cs-font-16 cs-clr-666">
                      Hospital Rooms
                    </div>
                  </div>
                </div>
              </Col>

              <Col xl={6} className="cs-bp-30">
                <div className="cs-home-feature-card cs-bg-orange-op-4 cs-dis-flex cs-hrz-center">
                  <div>
                    <div className="cs-font-20 cs-fw-600 cs-clr-orange cs-hrz-center cs-dis-flex">
                      380+
                    </div>
                    <div className="cs-hrz-center cs-dis-flex cs-font-16 cs-clr-666">
                      Hospital Rooms
                    </div>
                  </div>
                </div>
              </Col>

            </Row>
          </div>

        </Col>
      </Row>
    </div>
  )
}

// ReactDOM.render(
//   <WhySecondConsultation />,
//   document.getElementById('root')
// )
export default WhySecondConsultation
