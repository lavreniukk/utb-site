import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './sliderstyles.css';

function Slider({ items }) {
	return (
		<>
			<Swiper
				slidesPerView={1}
				spaceBetween={75}
				loop={true}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="producerSlider p-5 mb-5"
				breakpoints={{
					768: {
						slidesPerView: 2,
					},
					992: {
						slidesPerView: 3,
					},
				}}
			>
				{items.map((item) => (
					<SwiperSlide key={items.indexOf(item)}>
						<Link to={item.link}>
							<img src={item.imageSrc} alt="alt" loading="lazy" />
						</Link>
					</SwiperSlide>
				))}
				{items.map((item) => (
					<SwiperSlide key={items.indexOf(item)}>
						<Link to={item.link}>
							<img src={item.imageSrc} alt="alt" loading="lazy" />
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
}

export default Slider;
