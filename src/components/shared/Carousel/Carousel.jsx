import React from "react";
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";
import { BiPlay } from "react-icons/bi";
// node_modules\slick-carousel\slick\slick.css
// node_modules\slick-carousel\slick\slick-theme.css

const imgUrl = "https://image.tmdb.org/t/p/original";

const Carousel = ({ movie }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    waitForAnimate: false,
    adaptiveHeight: false, 
  };

  return (
    <div className="carousel-main">
      <Slider {...settings}>
        {movie.map((movie) => (
          <div key={movie.id} className="carousel-slide">
            <img
              src={`${imgUrl}${movie.backdrop_path}`}
              alt={movie.title || movie.name}
              className="carousel-image"
            />
            <div className="carousel-overlay">
              <h2>{movie.title || movie.name}</h2>
              <p>{movie.overview}</p>
              <div className="carousel-buttons">
                <button>
                  <BiPlay size={30} /> Play Now
                </button>
                <button className="more-info-button">More Info</button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
