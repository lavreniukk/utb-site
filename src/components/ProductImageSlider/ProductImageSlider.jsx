import React, { useState } from 'react';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'reactstrap';
import Image from '../Image/Image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './productimageslider.css';

function ProductImageSlider({ imagesSrcArray }) {
	const [activeThumb, setActiveThumb] = useState(null);
	const [isFullscreenOpen, setIsFullsrennOpen] = useState(false);

	const handleFullscreenOpen = (index) => {
		setActiveThumb(index);
		setIsFullsrennOpen(!isFullscreenOpen);
	};

	return (
		<div className="product-image-slider__container">
			<Swiper
				loop={true}
				spaceBetween={10}
				navigation={true}
				thumbs={{
					swiper: activeThumb && !activeThumb.destroyed ? activeThumb : null,
				}}
				modules={[Navigation, Thumbs]}
				grabCursor={true}
				className="product-image-slider"
			>
				{imagesSrcArray.map((image, index) => (
					<SwiperSlide
						key={index}
						onClick={() => handleFullscreenOpen(index)}
						className="d-flex justify-content-center align-items-center position-relative"
					>
						<Image src={image} className={'product-image-slider__image'} />
					</SwiperSlide>
				))}
			</Swiper>
			{imagesSrcArray.length > 1 && (
				<Swiper
					onSwiper={setActiveThumb}
					loop={true}
					spaceBetween={10}
					slidesPerView={imagesSrcArray.length >= 3 ? 3 : imagesSrcArray.length}
					modules={[Navigation, Thumbs]}
					className="product-image-slider__thumbs"
				>
					{imagesSrcArray.map((image, index) => (
						<SwiperSlide key={index}>
							<div className="thumbs__img-wrapper d-flex justify-content-center align-items-center position-relative">
								<Image src={image} className={'thumbs__image'} />
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			)}
			{isFullscreenOpen && (
				<div className="fullsreen-slider">
					<Button
						className="fullsreen-slider__close-btn"
						onClick={() => setIsFullsrennOpen(false)}
					>
						X
					</Button>
					<Swiper
						initialSlide={activeThumb}
						loop={true}
						navigation={true}
						modules={[Navigation, Thumbs]}
						grabCursor={true}
						speed={800}
					>
						{imagesSrcArray.map((image, index) => (
							<SwiperSlide key={index}>
								<Image src={image} className={'fullscreen-slider__image'} />
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}
		</div>
	);
}

export default ProductImageSlider;
