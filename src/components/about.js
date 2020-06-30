import React from "react"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import Typing from 'react-typing-animation';
import imageAvatar from '../images/peterson-avatar.png';

export default function About(props) {
  return (
    <section className="section-about">
      <Container className="container--narrow">
        <Row>
          <Col sm={6} md={4}>
            <img src={imageAvatar}
                className="avatar"
                alt="About Avatar" />
          </Col>
          <Col sm={6} md={8} className="about-text">
            <div className="typing-text">
              <span className="dropcap">Hi</span>
              <Typing speed={50}>
                <span className="details">I'm Peter. Front-end web developer based in Auckland, New Zealand. While not coding, I love playing basketball and watching movies. Thank you for visiting!</span>
              </Typing>
            </div>
            <p className="site-desc">
              This site was built with <strong>Node, Gatsby, React and Bootstrap</strong>.
            </p>
            <p className="presentation">
              My current languages/toolsets are <strong>HTML, CSS, SCCS, Javascript, jQuery, TypeScript, Handlebars, Keystone, MongoDB, Grunt, Gulp, Webpack, Swift and Java</strong>.<br/>
              <span className="presentation--focus">Interested in working together?</span>
            </p>
            <div className="mb-2">
              <Button href="/contact" variant="outline-primary" size="lg" className="btn-outline-darkblue">
                Let's do this
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>   
  )
}