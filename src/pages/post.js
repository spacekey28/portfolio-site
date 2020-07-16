import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import BlogPost from "../components/blog-post"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

export default function Post(props) {
  const { data } = props.data.post

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | {data.title.text}</title>
        <html lang="en" />
        <meta
          name="description"
          content={`This is recent blog post by Peter. ${data.title.text}. ${data.paragraph.text.substr(0,100)}`}
        />
      </Helmet>
      <Header />
      <BlogPost
          title={data.title.text}
          image={data.image.url}
          paragraph={data.paragraph.html}
        />
      <Footer
        footerText="Being a student for life."
        footerCopy="© 2020 peteson.me"
      />
    </>
  )
}

export const postQuery = graphql`
  query Post($slug: String) {
    post: prismicArticle(id: { eq: $slug }) {
      id
      data {
        title {
          text
        }
        image {
          url
        }
        paragraph {
          text
          html
        }
      }
    }
  }
`
