import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "reactstrap";
import "./contact.css"
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
const Contact = () => {
  return (
    <section>
      <Container>
        <Col lg="12" className="text-center mb-5">
          <span className="hala">get in touch</span>
          <h2 className="fw-bold">Contact Us</h2>
        </Col>
        <Row>
          <Col lg="6" md="12">
            <Col>
              <br />
              <p>Address: White River, 1240, South Africa</p>
              <br />
              <p> Phone: +27 76 920 5917</p>
              <br />
              <p>Email: sizatutoring@gmail.com</p>
              <br />
              <div className="follows">
                <span>
                  {" "}
                  <a href="facebook.com">
                    <i class="ri-facebook-line"></i>
                  </a>
                </span>

                <span>
                  {" "}
                  <a href="facebook.com">
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
          <Col lg="6" md="12">
            <Form>
              <FormGroup>
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
        </Row>
      </Container>
    </section>
  );
}

export default Contact