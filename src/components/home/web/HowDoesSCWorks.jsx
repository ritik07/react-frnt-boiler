import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'
import { Row, Col } from 'reactstrap'
import WHYSC from '../../../static/images/home/why-sc.jpg'
import Play from '../../../static/images/icons/play.png'
import Tutorial from '../../../static/images/home/tutorial.png'


const HowDoesSCWorks = () => {

  const [isOpen, setOpen] = useState(false)


  return (
    <div className="cs-bm-60">
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
      <Row noGutters={true}>

        <Col className="cs-dis-flex cs-vt-center" xl={7} lg={7}>
          <div className="cs-p-20">
            <div className="cs-fw-600 cs-font-34 cs-lh-40 cs-clr-purple">
              How Does Second Consultation.com work?
            </div>
            <div className="cs-fw-600 cs-font-22 cs-lh-34 cs-clr-purple cs-tp-20">
              Step 1:
              Provide Details of Patient
            </div>
            <div className="cs-fw-600 cs-font-22 cs-lh-34 cs-clr-purple cs-tp-20">
              Step 2:
              Chose Preferred doctor or Let
              Second-consultation.com take care of it
            </div>
            <div className="cs-fw-600 cs-font-22 cs-lh-34 cs-clr-purple cs-tp-20">
              Step 3:
              Upload 1st diagnosis
            </div>
            <div className="cs-fw-600 cs-font-22 cs-lh-34 cs-clr-purple cs-tp-20">
              Step 4:
              Ask your queries
            </div>
            <div className="cs-fw-600 cs-font-22 cs-lh-34 cs-clr-purple cs-tp-20">
              Step 5:
              Submit and Get Second Consultation report
            </div>
          </div>
        </Col>

        <Col xl={5} lg={5}>
          <div>
            <div className="cs-pos-abs cs-abs-center cs-pointer" onClick={() => setOpen(true)}>
              <a class="play-btn"></a>
            </div>
            <img src={Tutorial} className="cs-w-100 cs-pointer" onClick={() => setOpen(true)} />
            {/* <button className="btn-primary" onClick={() => setOpen(true)}>VIEW DEMO</button> */}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default HowDoesSCWorks

