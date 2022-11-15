import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assets/images/online.png";
import courseImg2 from "../../assets/images/test.jpg";
import courseImg3 from "../../assets/images/coaching.jpg";
import courseImg4 from "../../assets/images/homeschool.jpg";
import "./services.css";
import ServiceCard from "./ServiceCard";

const servicesData = [
  {
    id: "01",
    title: "Online Tutoring",
    info: "We tailor our Online Tutoring to fit each of our students’ unique needs and circumstances. With our professional tutors and your dedication to succeed, we guarantee academic results.",
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Test Prep",
    info: "Our curriculum and educational sessions completely revolve around the abilities and experiences of each student. We identify and target the gaps in learning to ensure complete academic confidence.",
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "Coaching ",
    info: "Our coaching curriculum involves engaging students with skills that will enhance their overall educational journey. Skills taught in coaching sessions include goal setting, time management, building study habits that last and prioritising for academic success. Coaching involves weekly check in sessions to keep learners accountable and to ensure skills are applied effectively. ",
    imgUrl: courseImg3,
  },
  {
    id: "04",
    title: "Homeschooling",
    info: "We take a comprehensive and collaborative approach in creating a plan and program that is right for every student. Adjusting to different personalities and specific academic needs, we always find what works best. ",
    imgUrl: courseImg4,
  },
];

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="12" className="mb-1">
            <div className="service__top d-flex justify-content-between align-items-center">
              <div className="service__top__left">
                <h2>Our Services</h2>
              </div>
            </div>
          </Col>
          {servicesData.map((item) => (
            <Col lg="6" md="6" sm="6">
              <ServiceCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
