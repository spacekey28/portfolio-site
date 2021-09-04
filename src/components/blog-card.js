import React from "react";
import { Link } from 'gatsby'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function BlogCard(props) {
  return (
    <Row className="blog-card">
      <Col sm={6}>
        <Link to={`/blog/${props.slug}`} className="blogs__image-link">
          <img src={props.data.image.url}
              className="blogs__image"
              alt={props.data.image.alt}
              loading="lazy" />
        </Link>
      </Col>
      <Col sm={6} className="blogs__abstract">
        <h4>{props.data.title.text}</h4>
        <p>{props.data.paragraph.text.substr(0,150)+"..."}</p>
        <Link to={`/blog/${props.slug}`}>
          Read more
        </Link>
      </Col>
    </Row>
  )
}