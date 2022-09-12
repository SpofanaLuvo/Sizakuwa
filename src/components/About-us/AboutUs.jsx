import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import CountUp from "react-countup";
import "./about.css";

const AboutUs = () => {
  return (
    <section>
      <Container className="mt-0">
        <Row className="about-section mt-0">
          <div className="text-center ">
            <h2>Who We Are</h2>
            <p className="about__content">
              The name Sizakuwa is derived from two words ‘Siza’ which is a Zulu
              for help and ‘Kuwa’ which is Swahili word meaning grow, thus the
              name of the company means “Helping to grow”. We believe in
              empowering students with the study skills and learning resources
              they need to achieve academic success. Our talented and
              professional team provides tutoring services to students of all
              ages, levels of experience, and subjects. We come to your home or
              connect remotely, whichever is most convenient and suits your
              particular needs.
            </p>
          </div>

          {/* <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div> */}
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
