import React, { Component } from "react";
import Intro from "./components/Intro";
import Nav from "./components/Nav";
import Section from "./components/Section";
import Carousel from "./components/Carousel";
import CarouselItem from "./components/CarouselItem";
import CarouselItemImage from "./components/CarouselItemImage";
import CarouselItemDescription from "./components/CarouselItemDescription";
import CarouselItemTags from "./components/CarouselItemTags";
import CarouselItemLinks from "./components/CarouselItemLinks";
import CarouselItems from "./data/CarouselItems";
import About from "./components/About";
import "./style.css";

const App = () => {
  const carouselItems = CarouselItems;

  const createCarouselItems = () => {
    return carouselItems.map(
      (item, index) =>
        item.isActive ? (
          <CarouselItem key={index}>
            <CarouselItemImage
              isCompany={item.isCompany}
              carouselItemImageSrc={item.itemImgSrc}
              carouselItemImageAlt={item.itemImgAlt}
            />
            <CarouselItemDescription
              title={item.itemTitle}
              description={item.itemDesc}
            />
            <CarouselItemTags carouselItemTags={item.tags} />
            <CarouselItemLinks carouselItemLinks={item.links} />
          </CarouselItem>
        ) : (
          false
        )
    );
  };
  return (
    <div className="loaded">
      <Nav />
      <Intro />
      <Section id="projects" active={false}>
        <Carousel>{createCarouselItems()}</Carousel>
      </Section>
      <Section id="about" active={true} cssClass="flex-content-align--center">
        <About />
      </Section>
      <Section id="contact" active={true} />
    </div>
  );
};

export default App;
