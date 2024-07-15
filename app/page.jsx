"use client";
import Hero from "./(landingpage)/Hero";
import Carousel from "./(landingpage)/carousel";
import About from "./(landingpage)/About";
import Catalogue from "./(landingpage)/Catalogue";
export default function FirstPage() {
  return (
    <>
      <Hero />
      <About />
      <Carousel />
      <Catalogue />
    </>
  );
}
