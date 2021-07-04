import React from "react";
import { Layout, Input } from "antd";
import { TwitterCircleFilled, FacebookFilled, InstagramFilled, YoutubeFilled, LinkedinFilled, AndroidFilled, AppleFilled } from '@ant-design/icons'
import shield from '../../static/images/icons/shield.png'
import visa from '../../static/images/icons/visa.png'
import americanExpress from '../../static/images/icons/american-express.png'
import paypal from '../../static/images/icons/paypal.png'
import creditCard from '../../static/images/icons/credit-card.png'
import { Row, Col } from 'reactstrap'
//icons
import Facebook from '../../static/images/icons/facebook.png'
import Twitter from '../../static/images/icons/twitter.png'
import Instagram from '../../static/images/icons/instagram.png'
import Youtube from '../../static/images/icons/youtube.png'
import Linkdln from '../../static/images/icons/linkedin.png'


const { Footer } = Layout;

export const FooterPage = () => {
  return (
    <div>
      <Footer>
        <Row>
          <Col xl={4}>
            <div className="cs-fw-600 cs-font-20 cs-bp-10">
              Explore
            </div>
            <Row>
              <Col>
                <div className="cs-lp-5">
                  <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                    Terms of use
                  </div>
                  <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                    Refund Policy
                  </div>
                  <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                    Privacy Policy
                  </div>
                  <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                    HIPPA
                  </div>
                </div>
              </Col>
              <Col>
                <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                  Contact Us
              </div>
                <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                  About Us
              </div>
                <div className="cs-fw-500 cs-font-14 cs-fw-600 cs-lh-28">
                  FAQs
              </div>
              </Col>
            </Row>

          </Col>

          <Col xl={4}>
            <Row className="cs-dis-flex cs-hrz-center">
              <Col xl={5}>
                <div className="cs-dis-flex cs-vt-center cs-hrz-center cs-fw-600 cs-font-20">
                  Certficate
                </div>
                <div className="cs-dis-flex cs-vt-center cs-hrz-center cs-tp-10">
                  <img src={shield} style={{ width: 50, height: 50 }} />
                </div>
                <div className="cs-dis-flex cs-vt-center cs-hrz-center cs-fw-600">
                  Secured site
                </div>
                <div className="cs-dis-flex cs-vt-center cs-hrz-center cs-fw-600">
                  256 Bit encryption
                </div>
              </Col>
            </Row>
            <div className="cs-dis-flex cs-hrz-center cs-fw-600 cs-font-20 cs-tp-10">
              Payment mode
            </div>
            <Row className="cs-dis-flex cs-hrz-center">
              <Col xl={2}>
                <img src={visa} style={{ width: 45, height: 45 }} />
              </Col>
              <Col xl={2}>
                <img src={americanExpress} style={{ width: 45, height: 45 }} />
              </Col>
              <Col xl={2}>
                <img src={paypal} style={{ width: 45, height: 45 }} />
              </Col>
              <Col xl={2}>
                <img src={creditCard} style={{ width: 45, height: 45 }} />
              </Col>
            </Row>
          </Col>

          <Col xl={1}>
          </Col>

          <Col xl={3}>
            <div className="cs-fw-600 cs-font-20">
              Stay in touch
            </div>
            <Row className="cs-tp-10">
              <Col xl={2}>
                {/* <TwitterCircleFilled className="cs-font-28" /> */}
                <img src={Twitter}/>
              </Col>
              <Col xl={2}>
                {/* <FacebookFilled className="cs-font-28" /> */}
                <img src={Facebook}/>
              </Col>
              <Col xl={2}>
                {/* <InstagramFilled className="cs-font-28" /> */}
                <img src={Instagram}/>
              </Col>
              <Col xl={2}>
                {/* <YoutubeFilled className="cs-font-28" /> */}
                <img src={Youtube}/>
              </Col>
              <Col xl={2}>
                {/* <LinkedinFilled className="cs-font-28" /> */}
                <img src={Linkdln}/>
              </Col>
            </Row>

            <Input className="subscribe-input" placeholder="Email address" />

            <div className="cs-fw-600 cs-font-20 cs-tp-10">
              Download App
            </div>

            <Row className="cs-tp-5">
              <Col xl={2}>
                <AndroidFilled className="cs-font-28" />
              </Col>

              <Col xl={2}>
                <AppleFilled className="cs-font-28" />
              </Col>
            </Row>


          </Col>
        </Row>
      </Footer>
    </div>
  );
};
