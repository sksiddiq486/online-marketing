import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/seo.png"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Galabari Motar Driving Center</h3>
            <p>User experience that drives people.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/pay.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Tec</h3>
            <p>Digital Global Growth.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/sem.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Hisense</h3>
            <p>Raising Over The Top</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/assets/php.png"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Hisense</h3>
            <p>Raising Over The Top</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
