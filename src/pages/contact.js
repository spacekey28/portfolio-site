import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import Email from "../components/email";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss"

export default function Contact() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Peter Son's Portfolio | Contact</title>
        <html lang="en" />
        <meta name="description" content="Peter Son is a Front-end Web Developer in Auckland, developing responsive websites and mobile applications. Interested in working together? Please email him." />
      </Helmet>
      <Header />
      <Email emailAddress="peteson.me@gmail.com"/>
      <Footer footerText="Being a student for life." footerCopy="© 2021 peteson.me" />
    </>
  )
}