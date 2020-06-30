import React from "react"
import Heading from '../components/heading';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
            <p>
              <a href={`mailto:${props.emailAddress}`}>{props.emailAddress}</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>   
  )
}