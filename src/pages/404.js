import React from "react"
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import Heading from '../components/heading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/main.scss"

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | Page not found</title>
        <html lang="en" />
        <meta name="description" content="Portfolio" />
      </Helmet>
      <Header />
      <section className="p-6">
        <Container className="container--narrow">
          <Row>
            <Col>
              <Heading headingText="Sorry, this page does not exist." />
              <div className="mb-2">
                <Button href="/" variant="outline-primary" size="lg" className="btn-outline-darkblue">
                  Go back
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer footerText="Being a student for life." footerCopy="© 2021 peteson.me" />
    </>
  )
}