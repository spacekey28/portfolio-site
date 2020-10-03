import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import Header from "../components/header"
import Footer from "../components/footer"
import Heading from "../components/heading"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import WorkCard from "../components/work-card"
import imageWork1 from "../images/work/kiwiexperience.jpg"
import imageWork2 from "../images/work/keamotorhomes.jpg"
import imageWork3 from "../images/work/waitomo.jpg"
import imageWork4 from "../images/work/kiwiexperience-hub.jpg"
import imageWork5 from "../images/work/gnzms.jpg"
import imageWork6 from "../images/work/mobile-dev.jpg"
import imageWork7 from "../images/work/ke-reviews.jpg"
import imageWork8 from "../images/work/experiencethl.jpg"

import "bootstrap/dist/css/bootstrap.min.css"
import "../styles/main.scss"

export default function Work(props) {
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
      <Header />
      <section className="section-work">
        <Container className="container--narrow">
          <Row>
            <Col>
              <Heading headingText="Recent work" />
            </Col>
          </Row>
          <Row>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.kiwiexperience.com/about-kiwi-experience/customer-reviews"
                imageUrl={imageWork7}
                title="Review Migration"
                bodyText="Recently migrated Kiwi Experience's review dataset. Over 4000 reviews with snapshot star ratings. Used pagination navigation with Keystone."
                toolset="API, SCSS, Javascript"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.greatnzmotorhomesale.com/"
                imageUrl={imageWork5}
                title="The Great New Zealand Motorhome Sale"
                bodyText="Kicked off this landing microsite from scratch. Mobile-first approach styling. Curved fixed top navbar using clip-path. 
                          Built interactive JS module called 'Find your motorhome'. Integrated Marketo contact form code."
                toolset="SCSS, Javascript, AMP"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.kiwiexperience.com/"
                imageUrl={imageWork1}
                title="Project Pacman"
                bodyText="Created Kiwi Experience new homepage. Responsive layouts based on wireframe design. 
                                  Built a new search bar in the hero section and led users to a sorted product page according to each selection."
                toolset="Keystone, Handlebars, Grunt"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.keamotorhomes.com/"
                imageUrl={imageWork2}
                title="Front-end Development"
                bodyText="Built KEA Motorhomes SCCS components with input & button elements through to navigation.
                                  Wrote custom CSS from scratch. Established form validation fields. USP and call to action components."
                toolset="Keystone, Handlebars, Grunt"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.waitomo.com/"
                imageUrl={imageWork3}
                title="Module Maintenance"
                bodyText="Developed video & slide hero banner. Maintained and built high-quality reusable modules for Waitomo. 
                                  Translated UI/UX design wireframes to SEO compliant code."
                toolset="Keystone, Handlebars, Grunt"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                linkUrl="https://www.kiwiexperience.com/new-zealand-destinations/south-island"
                imageUrl={imageWork4}
                title="Hub Page Template"
                bodyText="Built destination hub new page template for Kiwi Experience. Responsive components with interactive jQuery implementations. 
                                  Popup view, embedded video, and slick slider built with Bootstrap grid."
                toolset="Keystone, Handlebars, jQuery"
              />
            </Col>
            <Col sm={6} md={4}>
              <WorkCard linkUrl="https://experiencethl.com/" 
                imageUrl={imageWork8} 
                title="Connect Customer Brands" 
                bodyText="Created a one-page HTML document for Experience thl. Responsive layouts with Bootstrap grid. 
                          Injected ugly CSS and JS code files. Integrated Marketo subscription code." 
                toolset="SCSS, Javascript, Bootstrap"/>
            </Col>
            <Col sm={6} md={4}>
              <WorkCard
                imageUrl={imageWork6}
                title="Mobile Development"
                bodyText="Published several hybrid and native iOS mobile apps. Experience in applying MVC frameworks & Notification APIs.
                                  Past experience with mobile UI/UX workflow and app store publishing steps. Unfortunately, app links do not exist anymore."
                toolset="Objective-C, Cocoapod, Java"
              />
            </Col>
          </Row>
        </Container>
      </section>
      <Footer
        footerText="Being a student for life."
        footerCopy="© 2020 peteson.me"
      />
    </>
  )
}

// export const WorkQuery = graphql`
//   query Works {

//   }
// `