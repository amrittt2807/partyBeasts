import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../myStyles/ImageCarousel.css";




export default function ImageCarousel({images}) {
  
  const renderSlides = images.map((image, index) => (
    <div key={index}>
      <img src={image.url} alt={index} />
    </div>
  ));
  
    const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <div className="carouselBox"> 
        <Carousel
        showArrows={true}
        autoPlay={true}
        interval={6000}
        infiniteLoop={true}
        showThumbs={false}
        dynamicHeight={false}
        selectedItem={images[currentIndex]}
        onChange={handleChange}
        animationHandler={"fade"}
        transitionTime={1000}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
    </div>
  )
}


