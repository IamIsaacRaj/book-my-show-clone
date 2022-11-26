import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import axios from "axios";

const ShowCarousel = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    const requestPopularMovies = async() => {
      const getPopularMovies = await axios.get('/tv/popular');

      setImages(getPopularMovies.data.results);
    }
    requestPopularMovies()
  }, []);

  const slideConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    modules: [Navigation],
    className: "SwiperSlider",
    navigation: true,
  };

  return (
    <>
      <div>
        <Swiper {...slideConfig}>
        {images.map((images,index) => (
            <SwiperSlide>
            <div className="w-full h-96 px-2 py-3" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/original${images.poster_path}`}
                alt="Hero Banner"
                className="w-full h-full rounded-md object-cover"
              />
            </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ShowCarousel;
