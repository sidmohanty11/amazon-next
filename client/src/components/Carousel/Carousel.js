import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const CustomCarousel = () => {
  return (
    <Carousel
      infiniteLoop={true}
      swipeable={true}
      autoPlay={true}
      centerMode={true}
      dynamicHeight={true}
      showThumbs={false}
    >
      <div>
        <img src="./1.jpg" alt="" />
        <p style={{ fontSize: "20px" }} className="legend">
          We're opening!!! We are the new AMAZON!!!
        </p>
      </div>
      <div>
        <img src="./2.jpg" alt="" />
        <p style={{ fontSize: "20px" }} className="legend">
          Shirts, Pants, Wallets, You name it, we have it!!!
        </p>
      </div>
      <div>
        <img src="./3.jpg" alt="" />
        <p style={{ fontSize: "20px" }} className="legend">
          We have a huge SALE coming up!!!
        </p>
      </div>
    </Carousel>
  );
};

export default CustomCarousel;
