import React from 'react'
import { Row, Col } from 'reactstrap'
import Lottie from 'react-lottie';
import Heart from '../../../static/json/heart.json'
import Brain from '../../../static/json/brain.json'
import Tooth from '../../../static/json/tooth.json'
import ENT from '../../../static/json/ENT.json'


const DoctorCategory = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Heart,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const BrainOptions = {
    loop: true,
    autoplay: true,
    animationData: Brain,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const ToothOptions = {
    loop: true,
    autoplay: true,
    animationData: Tooth,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const ENTOptions = {
    loop: true,
    autoplay: true,
    animationData: ENT,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className="cs-web-container-110">
      <Row>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"65px"}
              width={"65px"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={BrainOptions}
              height={"65px"}
              width={"65px"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              Neurology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={ToothOptions}
              height={"65px"}
              width={"65px"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              Dentist
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={ENTOptions}
              height={"65px"}
              width={"65px"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888 cs-dis-flex cs-hrz-center">
              ENT
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1}>
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
        <Col xl={1} className="cs-doc-cat-card-box">
          <div>
            <Lottie options={defaultOptions}
              height={"100%"}
              width={"100%"}
              isClickToPauseDisabled={true}
              isStopped={false}
              isPaused={false} />
            <div className="cs-clr-888">
              Cardiology
            </div>
          </div>
        </Col>
      </Row>
      <div className="cs-tm-15 cs-dis-flex cs-hrz-center">
        <div className="cs-btn-view-more-invert">
          View More
        </div>
      </div>
    </div>
  )
}

export default DoctorCategory
