import React from 'react'
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
        slidesPerView={1}
        spaceBetween={75}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper p-5 mb-5"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {items.map((item) => <SwiperSlide key={items.indexOf(item)}><img src={item} alt='alt'/></SwiperSlide>)}
        {items.map((item) => <SwiperSlide key={items.indexOf(item)}><img src={item} alt='alt'/></SwiperSlide>)}
      </Swiper>
    </>
  );
}

export default Slider;