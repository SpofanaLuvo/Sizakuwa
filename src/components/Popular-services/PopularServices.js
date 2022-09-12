import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assets/images/web-development.png";
import courseImg02 from "../../assets/images/kids-learning.png";
import courseImg03 from "../../assets/images/seo.png";
import courseImg04 from "../../assets/images/ui-ux.png";
import PopularServiceCard from "./PopularServiceCard";

import "./popular-services.css";

const freeCourseData = [
  {
    id: "01",
    title: "One-on One Tutoring",
    imgUrl: courseImg02,
    was: "R250.00",
    now: "",
  },
  {
    id: "02",
    title: "10 Lessons Package",
    imgUrl: courseImg01,
    was: "Was: R2500.00",
    now: "Now: R1875.00",
  },

  {
    id: "03",
    title: "Coaching Package",
    imgUrl: courseImg03,
    was: "Was: R1500.00",
    now: "Now: R1200.00",
  },

  {
    id: "04",
    title: "One-on-One Coaching",
    imgUrl: courseImg04,
    was: "R200.00",
    now: "",
  },
];

const PopularServices = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Our Popular Services</h2>
          </Col>

          {freeCourseData.map((item) => (
            <Col lg="3" md="4" className="mb-4" key={item.id}>
              <PopularServiceCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PopularServices;
