import React from 'react'
import Slider from "react-slick";
import { Row, Col } from 'reactstrap'
import Team1 from '../../../static/images/OurTeam/team1.jpg'
import Team2 from '../../../static/images/OurTeam/team2.jpg'
import Team3 from '../../../static/images/OurTeam/team3.jpg'
import Team4 from '../../../static/images/OurTeam/team4.jpg'
import Team5 from '../../../static/images/OurTeam/team5.jpg'
import Team6 from '../../../static/images/OurTeam/team6.jpg'

import OwlCarousel from 'react-owl-carousel';

const Testimonials = () => {

  const res = {
    0: {
      items: 1,
      nav: false
    },
    680: {
      items: 2,
      nav: false,
      loop: false
    },
    1000: {
      items: 1,
      nav: true
    }
  }

  return (
    <div className="cs-bm-60 cs-web-container">
      <div className="testimonial-back">
        <div className="cs-fw-600 cs-font-34 cs-dis-flex cs-hrz-center">
          Testimonials
        </div>
        <div class="mobile-mt  gtco-testimonials">
          <OwlCarousel className='owl-theme' responsive={res} loop margin={0} responsiveClass={true} center={true} nav={false}>
            <div>
              <div class="card text-center">
                <img class="card-img-top" src={Team1} alt="" />
                <div class="card-body">
                  <h5>Dr. Ronne Galle <br />
                    <span> Cardiologist Specialist </span>
                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ” </p>
                  </h5>
                </div>
              </div>
            </div>
            <div>
              <div class="card text-center"><img class="card-img-top" src={Team2} alt="" />
                <div class="card-body">
                  <h5>Dr. Missy Limana<br />
                    <span> Radiology Specialist </span>
                    <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ” </p>
                  </h5>
                </div>
              </div>
            </div>
            {/* <div>
            <div class="card text-center"><img class="card-img-top" src={Team3} alt="" />
              <div class="card-body">
                <h5>Dr.Martha Brown<br />
                  <span> Cardiologist Special </span>
                  <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ” </p>
                </h5>
              </div>
            </div>
          </div> */}

            <div>
              <div class="card text-center"><img class="card-img-top" src={Team4} alt="" />
                <div class="card-body">
                  <h5>Dr. Hanna Lisem<br />
                    <span> Heart Specialist </span>
                  </h5>
                  <p class="card-text">“ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                            impedit quo minus id quod maxime placeat ” </p>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </div>
  )
}

export default Testimonials

{/* <div className="cs-home-spcl-dr-card">
<div className="cs-dis-flex cs-hrz-center cs-vt-center">
  <img src={Team1} className="cs-w-100" />
</div>
</div> */}

