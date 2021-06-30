import React, { useEffect, useRef, useState } from 'react';
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Heading from "../components/heading"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import WorkCard from "../components/work-card"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

export default function Work(props) {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | Work</title>
        <html lang="en" />
        <meta
          name="description"
          content="Peter Son is a Front-end Web Developer in Auckland, developing responsive websites and mobile applications. View his portfolios and tech toolsets."
        />
      </Helmet>
      <div className={`clearfix sticky-top${isSticky ? ' shadow--on' : ' shadow--off'}`} ref={ref}>
        <Header />
      </div>
      <section className="section-work">
        <Container className="container--narrow">
          <Row>
            <Col>
              <Heading headingText="Recent work" />
            </Col>
          </Row>
          <Row>
            {props.data.allPrismicWork.edges
              // .sort((a, b) => (a.node.first_publication_date < b.node.first_publication_date))
              .map(work => (
              <Col sm={6} md={4} key={work.node.prismicId}>
                <WorkCard
                  imageUrl={work.node.data.preview.url}
                  title={work.node.data.title.text}
                  bodyText={work.node.data.description.text}
                  toolset={work.node.data.stack.text}
                  linkUrl={work.node.data.link.url}
                />
                <p>{work.node.first_publication_date}</p>
              </Col>
            ))}
            
          </Row>
        </Container>
      </section>
      <Footer
        footerText="Being a student for life."
        footerCopy="© 2021 peteson.me"
      />
    </>
  )
}

export const WorkQuery = graphql`
  query Works {
    allPrismicWork(sort: {order: DESC, fields: last_publication_date}) {
      edges {
        node {
          data {
            description {
              html
              text
            }
            link {
              url
              target
            }
            preview {
              url
              alt
            }
            stack {
              html
              text
            }
            title {
              html
              text
            }
          }
          prismicId
        }
      }
    }
  }
`