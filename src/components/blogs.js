import React from "react";
import Heading from '../components/heading';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Blogs(props) {
  return (
    <section className="section-blogs">
      <Container className="container--narrow">
        <Row>
          <Col>
            <Heading headingText="Blog" />
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <img src={props.data.image.url}
                className="blogs__thumb"
                alt={props.data.image.alt} />
          </Col>
          <Col sm={6} className="blogs__abstract">
            <h3>{props.data.title.text}</h3>
            {props.data.paragraph.text}
          </Col>
        </Row>
      </Container>
    </section>   
  )
}