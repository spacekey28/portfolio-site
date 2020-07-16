import React from "react"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

export default function BlogPost(props) {
  return (
    <section className="section-blog">
      <Container className="container--narrow">
        <Row>
          <Col>
            <img
              src={props.image}
              className="blogs__image-top"
              alt="Blog Top"
            />
          </Col>
        </Row>
        <Row>
          <Col className="blogs__post-content">
            <h1>{props.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.paragraph }}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
