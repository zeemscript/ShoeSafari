"use client"
import MyComponent from "./(landingpage)/Hero";
import Hero from "./(landingpage)/Hero";
import Carousel from "./(landingpage)/carousel";
import Catalogue from "./(landingpage)/Catalogue";
export default function FirstPage() {
  return (
    <>
      <MyComponent/>
      <Carousel />
      <Catalogue/>
    </>
  );
}
