import React from "react";
import "./about.css";
import { Container, Row} from "reactstrap";
import "./about.css";

const AboutUs = () => {
  return (
    <section id="about" className="mb-4">
      <Container>
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
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
