import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import Blogs from "../components/blogs";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss"

export default function Blog(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | Blog</title>
        <html lang="en" />
        <meta name="description" content="Peter Son is a Front-end Web Developer in Auckland. This is recent blogs posted and categorised by Peter" />
      </Helmet>
      <Header />
      {props.data.allPrismicArticle.edges.map(article => (
        <Blogs key={article.node.prismicId} slug={article.node.uid} data={article.node.data}/>
      ))}
      <Footer footerText="Being a student for life." footerCopy="© 2020 peteson.me" />
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