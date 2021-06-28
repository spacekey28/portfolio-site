import React from "react";
import Heading from '../components/heading';
import { navigate } from "gatsby";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import imageContact from '../images/deepblue-mailbox.jpg';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Email(props) {

  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
    .then(() => navigate(form.getAttribute('action')))
    .catch((error) => alert(error))
  }

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
                alt="contact thumbnail"
                loading="lazy" />
          </Col>
          <Col sm={6} className="email-text">
            <h3>Drop me an email</h3>
            <p>
              <a href={`mailto:${props.emailAddress}`}>{props.emailAddress}</a>
            </p>

            <Form name="contact" 
                  method="POST" 
                  action="/thanks/"
                  data-netlify="true" 
                  netlify-honeypot="bot-field" 
                  onSubmit={handleSubmit}>
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <Form.Group controlId="formBasicName">
                <Form.Control type="name" name="name" placeholder="Name" onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" name="email" placeholder="Email" onChange={handleChange} />
              </Form.Group>

              <Form.Group controlId="contactForm.ControlTextarea">
                <Form.Control as="textarea" rows="3" name="message" placeholder="Message" onChange={handleChange} />
              </Form.Group>
              <Button type="submit" className="btn-darkblue" size="lg">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>   
  )
}