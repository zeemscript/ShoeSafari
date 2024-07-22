"use client";
import Hero from "./(landingpage)/Hero";
import Carousel from "./(landingpage)/Categories";
import About from "./(landingpage)/About";
import Catalogue from "./(landingpage)/Catalogue";
import Catalogue2 from "./(landingpage)/Catalogue2";
import Catalogue3 from "./(landingpage)/Catalogue3";
import Catalogue4 from "./(landingpage)/Catalogue4";
import Catalogue5 from "./(landingpage)/Catalogue5";
import Newsletter from "./(landingpage)/newsletter";
import AboutUs from "./(landingpage)/Aboutus"
import ContactUs from "./(landingpage)/ContactUs"

export default function FirstPage() {
  return (
    <>
      <Hero />
      <About/>
      <Catalogue />
      <Carousel />
      <Catalogue2 />
      <Catalogue3 />
      <Catalogue4 />
      <Catalogue5 />
      <Newsletter />
      <AboutUs/>
      <ContactUs/>
    </>
  );
}
