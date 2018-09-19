import React from "react";
import Flickity from "flickity";
import "../../node_modules/flickity/css/flickity.css";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.carouselElement = React.createRef();
    this.carousel = null;
  }
  componentDidMount() {
    this.carousel = new Flickity(this.carouselElement.current, {
      //autoPlay: 3000,
      cellAlign: "center",
      contain: true,
      pauseAutoPlayOnHover: true,
      prevNextButtons: document.body.clientWidth >= 768 ? true : false,
      freeScroll: true,
      wrapAround: true,
      setGallerySize: false
    });
    //this.carousel.resize();
  }
  render() {
    return (
      <div
        ref={this.carouselElement}
        className="carousel-wrapper projects-carousel"
      >
        {this.props.children}
      </div>
    );
  }
}

export default Carousel;
