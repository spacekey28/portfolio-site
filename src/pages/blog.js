import React from "react";
import { graphql } from "gatsby"
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import BlogCard from "../components/blog-card";
import Heading from '../components/heading';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss"

export default function Blog(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | Blog</title>
        <html lang="en" />
        <meta name="description" content="Peter Son is a Front-end Web Developer in Auckland. These are recent blogs posted and categorised by Peter." />
      </Helmet>
      <Header />
      <section className="section-blogs">
        <Container className="container--narrow">
          <Row>
              <Col>
                <Heading headingText="Recent blog" />
              </Col>
          </Row>
          {props.data.allPrismicArticle.edges.map(article => (
            <BlogCard key={article.node.prismicId} slug={article.node.uid} data={article.node.data}/>
          ))}
        </Container>
      </section>      
      <Footer footerText="Being a student for life." footerCopy="© 2021 peteson.me" />
    </>
  )
}

export const BlogQuery = graphql`
  query Articles {
    allPrismicArticle {
      edges {
        node {
          data {
            image {
              alt
              url
            }
            paragraph {
              text
            }
            title {
              text
            }
          }
          uid
          prismicId
        }
      }
    }
  }
`