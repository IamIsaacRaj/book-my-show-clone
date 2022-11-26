import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Poster from "../Poster/Poster.Component";

const PosterSlider = (props) => {
  const { posters, title, subtitle, isDark, config} = props;
  const slideConfig = {
    slidesPerView: 2,
    spaceBetween: 10,
    pagination: {
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 0,
      },
    },
    modules: [Navigation],
    className: "SwiperSlider",
    navigation: true,
  };

  return (
    <>
      <div className = "flex flex-col items-start sm:ml-3 ml-0 my-2">
        <h3
          className = {`text-2xl font-bold ${
            isDark ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h3>
        <p className = {`text-sm ${isDark ? "text-white" : "text-gray-800"}`}>
          {subtitle}
        </p>
      </div>
        <Swiper {...slideConfig}>
        {props.posters.map((each,index) =>( 
                <SwiperSlide style={props.isDark?{backgroundColor:'#2b3147'}:null}>
                
                    <Poster {...each} isDark={props.isDark} key={index}></Poster>
                </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
};


export default PosterSlider;