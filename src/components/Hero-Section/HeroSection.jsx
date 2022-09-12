import React from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assets/images/hero-img1.png";
import tutor from "../../assets/images/tutor.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Empowering Students For <br /> Academic Success
              </h2>
              <p className="mb-5 hero-landing">
                At Sizakuwa, we aim to match every student with experienced and
                professional tutors and coaches that will ignite their passion
                for learning. With our personalized touch, we’re able to channel
                the most effective learning techniques to challenge, motivate
                and support our students.
                <br /> Join us!
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero-img">
              <img src={tutor} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
