import React from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export default function Hero(props) {
  return (
    <section className="section-hero">
      <Container className="container--narrow">
        <Row>
          <Col>
            <h1>Peter Son</h1>
            <p>Front-end Web Developer & Mobile App Lover</p>
            <div className="mb-2">
              <Button href="/work" className="btn-darkblue" size="lg">
                View My Work
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>   
  )
}