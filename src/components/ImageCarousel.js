import React from "react";
import Carousel from "react-bootstrap/Carousel";
const ImageCarousel = () => {
  return (
    <div style={{ zIndex: 0 }}>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/sliderimage1.gif"
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Search Engine Optimization</h3>
            <p>Drives organic traffic to your website.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/sliderimage2.gif"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
            <h3>Pay Per Click</h3>
            <p>pay for your traffic generated keyword.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/sliderimage3.gif"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Search Engine Marketing</h3>
            <p>Raise your quality leads using search engine</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/images/sliderimage4.gif"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
            <h3>Web Development and App development</h3>
            <p>Build your Quality website with us</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        {/* <Floating /> */}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
