import React from 'react'
import { Row, Col } from 'reactstrap'
import Lottie from 'react-lottie';

import Browser from '../../../static/images/icons/doctor.png'
import BestDoctor from '../../../static/images/icons/best_doctor.png'
import Manager from '../../../static/images/icons/manager.png'
import FastTime from '../../../static/images/icons/fast-time.png'
import Doctor from '../../../static/json/doctor.json'

const WhyChooseSecondConsultation = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Doctor,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="cs-bg-purple-op-1 cs-bm-60">
      <div className="cs-web-container-70 cs-tp-40">
        <div className="cs-fw-600 cs-font-34 cs-bm-25">
          Why choose Second-Consultation.com?
        </div>

        <Row noGutters={true}>
          <Col xl={8} lg={6}>
            <Row noGutters={true}>
              <Col xl={1} lg={1}>
                <img src={Browser} />
              </Col>
              <Col xl={11} lg={11} className="cs-bm-20">
                <div className="cs-fw-500 cs-font-20">
                  Fully Online
                </div>
                <div className="cs-font-16 cs-clr-666">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum voluptatibus est culpa quae at id ab natus quia omnis suscipit nemo ipsam modi ullam aliquid exercitationem, rerum eveniet similique.
                </div>
              </Col>

              <Col xl={1} lg={1}>
                <img src={BestDoctor} />
              </Col>
              <Col xl={11} lg={11} className="cs-bm-20">
                <div className="cs-fw-500 cs-font-20">
                  Access to Best Doctors in the country
                </div>
                <div className="cs-font-16 cs-clr-666">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium possimus, autem ullam ipsam quia nulla suscipit similique, quod soluta eius iste facere quisquam aut voluptatum labore at vitae unde doloribus.
                </div>
              </Col>

              <Col xl={1} lg={1}>
                <img src={Manager} />
              </Col>
              <Col xl={11} lg={11} className="cs-bm-20">
                <div className="cs-fw-500 cs-font-20">
                  Dedicated Second Consultation Managers
                </div>
                <div className="cs-font-16 cs-clr-666">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum voluptatibus est culpa quae at id ab natus quia omnis suscipit nemo ipsam modi ullam aliquid
                </div>
              </Col>

              <Col xl={1} lg={1}>
                <img src={FastTime} />
              </Col>
              <Col xl={11} lg={11} className="cs-bm-20">
                <div className="cs-fw-500 cs-font-20">
                  Quickest Second Consultation in the world
                </div>
                <div className="cs-font-16 cs-clr-666">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptatum voluptatibus est culpa quae at id ab natus quia omnis suscipit nemo ipsam modi ullam aliquid
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={4} lg={6} className="cs-dis-flex cs-vt-center">
            <Lottie options={defaultOptions}
              height={400}
              width={400}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default WhyChooseSecondConsultation
