import React from "react"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';
import Social from './social';

import imageLogo from '../images/peteson-logo.png';

export default function Footer(props) {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col>
            <Link className="footer__link" to='/'>
              <img className="footer__logo" src={imageLogo} alt="peteson.me footer logo" />
            </Link>
            <p className="footer__text">{props.footerText}</p>
            <div className="social-icons">
              <Social linkUrl="https://www.linkedin.com/in/peter-son" iconName="linkedin" iconSize="2x" />
              <Social linkUrl="https://twitter.com/spacekey28" iconName="twitter" iconSize="2x" />
              <Social linkUrl="https://github.com/spacekey28" iconName="github" iconSize="2x" />
              <Social linkUrl="https://sonpeter.medium.com" iconName="medium" iconSize="2x" />
              <Social linkUrl="mailto:peteson.me@gmail.com" iconName="envelope" iconSize="2x" />
            </div>
            <p className="copyright">{props.footerCopy}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}