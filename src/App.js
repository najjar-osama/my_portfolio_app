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

import "./style.css";

import mxcam from "./images/mx_camera.png";

const App = () => {
  const carouselItems = [
    {
      itemImgSrc: mxcam,
      itemImgAlt: "Mendix WebCamera Widget",
      itemTitle: "Mx WebCamera",
      itemDesc:
        "Configurable Camera Widget for Mendix Apps, based on Media Capture & Streams API!",
      tags: [
        "Bizzomate",
        "open_source",
        "javascript",
        "dojo",
        "Mendix",
        "Widget",
        "Camera",
        "images",
        "compression",
        "standalone",
        "API",
        "MediaCaptureAPI",
        "Mendix",
        "PWAs"
      ],
      links: [
        { type: "github", href: "https://github.com/bizzomate/WebCamera" },
        { type: "link", href: "https://pwademo2.mxapps.io/" }
      ]
    },
    {
      itemImgSrc: mxcam,
      itemImgAlt: "Mendix WebCamera Widget",
      itemTitle: "Mx WebCamera",
      itemDesc:
        "Configurable Camera Widget for Mendix Apps, based on Media Capture & Streams API!",
      tags: [
        "Bizzomate",
        "open_source",
        "javascript",
        "dojo",
        "Mendix",
        "Widget",
        "Camera",
        "images",
        "compression",
        "standalone",
        "API",
        "MediaCaptureAPI",
        "Mendix",
        "PWAs"
      ],
      links: [
        { type: "github", href: "https://github.com/bizzomate/WebCamera" },
        { type: "link", href: "https://pwademo2.mxapps.io/" }
      ]
    }
  ];

  const createCarouselItems = () => {
    return carouselItems.map((item, index) => (
      <CarouselItem key={index}>
        <CarouselItemImage
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
    ));
  };
  return (
    <div className="loaded">
      <Nav />
      <Intro />
      <Section id="projects">
        <Carousel>{createCarouselItems()}</Carousel>
      </Section>
      <Section id="about" />
      <Section id="contact" />
    </div>
  );
};

export default App;
