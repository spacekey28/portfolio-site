import React from "react"
import Heading from "../components/heading"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function Blog(props) {
  return (
    <section className="section-blog">
      <Container className="container--narrow">
        <Row>
          <Col>
            <Heading headingText="Blog Page" />
          </Col>
        </Row>
        <Row>
          <Col>
            <img
              src="https://placehold.it/800x400"
              className="blogs__image-top"
              alt="Blog Top Image "
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Blog title</h3>
            Quickly provide access to covalent meta-services without
            next-generation technology. Uniquely empower bricks-and-clicks niche
            markets vis-a-vis high-quality ideas. Efficiently simplify wireless
            e-markets for intermandated leadership skills.
          </Col>
        </Row>
      </Container>
    </section>
  )
}
