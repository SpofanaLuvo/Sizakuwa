import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "bootstrap/dist/css/bootstrap.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "reactstrap";
import "./contact.css"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";

require("dotenv").config();
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          
          console.log(result.text);
          document.getElementById("contact-form").reset()
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section>
      <Container>
        <Col lg="12" className="text-center  mb-5">
          <h2 className="fw-bold">Contact </h2>
        </Col>
        <Row>
          <Col lg="6" md="12">
            <Col className="text-center">
              <br />
              <p>
                Address: White River, 1240, South Africa
              </p>
              <br />
              <p>
                {" "}
                Phones: +27 76 920 5917
              </p>
              <br />
              <p>
                Emails: sizatutoring@gmail.com
              </p>
              <br />
              <div className="follows">
                {/* <span>
                  {" "}
                  <a href="facebook.com">
                    <i class="ri-facebook-line"></i>
                  </a>
                </span> */}

                <span>
                  {" "}
                  <a href="https://www.instagram.com/sizakuwa/">
                    <i class="ri-instagram-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
                    <i class="ri-linkedin-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
                    <i class="ri-twitter-line"></i>
                  </a>
                </span>
              </div>
            </Col>
          </Col>
          <Col>
            <Col lg="6" md="12" className="contact-form">
              <p className="col-sm-text-center sendus mb-4">Send us a message.</p>
              <Form onSubmit={sendEmail} id="contact-form">
                <FormGroup className="input">
                  <Label for="name">
                    <p className="info d-flex align-items-center gap-1 mb-0">
                      Name
                    </p>
                  </Label>
                  <Input type="text" name="name" id="name" />
                </FormGroup>
                <FormGroup>
                  <Label for="email">
                    <p className="info d-flex align-items-center gap-1 mb-0">
                      Email
                    </p>
                  </Label>
                  <Input type="email" name="email" id="email" />
                </FormGroup>
                <FormGroup>
                  <Label for="message">
                    <p className="info d-flex align-items-center gap-1  mb-0">
                      Your Message
                    </p>
                  </Label>
                  <Input type="textarea" name="message" id="message" />
                </FormGroup>
                <Button>Send Message</Button>
              </Form>
            </Col>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact