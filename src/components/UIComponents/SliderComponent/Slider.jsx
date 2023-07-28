import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './sliderstyles.css';

function Slider({items}) {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={50}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5 mb-5"
      >
        {items.map((item) => <SwiperSlide><img src={item} alt='alt'/></SwiperSlide>)}
        {items.map((item) => <SwiperSlide><img src={item} alt='alt'/></SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default Slider;