import React from "react"
import Heading from '../components/heading';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import imageContact from '../images/deepblue-mailbox.jpg';

export default function Email(props) {
  return (
    <section className="section-email">
      <Container className="container--narrow">
        <Row>
          <Col>
            <Heading headingText="Get in touch" />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <img src={imageContact}
                className="contact-thumb"
                alt="contact thumbnail" />
          </Col>
          <Col sm={6} className="email-text">
            <h3>Drop me a mail</h3>
            {/* <p>
              <a href={`mailto:${props.emailAddress}`}>{props.emailAddress}</a>
            </p> */}

            <Form name="contact" method="POST" data-netlify="true" data-netlify-recaptcha="true">
              <Form.Group controlId="formBasicName">
                <Form.Control type="name" name="name" placeholder="Name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" name="email" placeholder="Email" />
              </Form.Group>

              <Form.Group controlId="contactForm.ControlTextarea">
                <Form.Control as="textarea" rows="3" name="message" placeholder="Message" />
              </Form.Group>
              <div data-netlify-recaptcha="true"></div>
              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>   
  )
}