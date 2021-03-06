import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from "react-helmet";
import Header from "../components/header";
import Footer from "../components/footer";
import Hero from "../components/hero";
import About from "../components/about";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss"

export default function Home() {
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
        <title>Peter Son's Portfoilo | Front End Developer in Auckland, NZ</title>
        <html lang="en" />
        <meta name="description" content="Peter Son is a Front-end Web Developer in Auckland, learning latest technologies and trends, and developing responsive websites and mobile applications." />
      </Helmet>
      <div className={`clearfix sticky-top${isSticky ? ' shadow--on' : ' shadow--off'}`} ref={ref}>
        <Header />
      </div>
      <Hero />
      <About />
      <Footer footerText="Being a student for life." footerCopy="© 2021 peteson.me" />
    </>
  )
}
