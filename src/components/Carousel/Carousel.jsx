import React, { useEffect, useState } from 'react';
import {
	Carousel,
	CarouselItem,
	CarouselControl,
	CarouselIndicators,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { fetchImagesUrls } from '../../utils/fetchingData';
import Image from '../Image/Image';
import './carousel.css';

export default function CarouselComponent({ carouselItems }) {
	const [activeSlide, setActiveSlide] = useState(0);
	const [animate, setAnimate] = useState(false);
	const [imageUrls, setImagesUrls] = useState([]);

	useEffect(() => {
		const fetchImages = async () => {
			const fetchedImages = await fetchImagesUrls(carouselItems);
			setImagesUrls(fetchedImages);
		};
		fetchImages();
	}, [carouselItems]);

	const goToSlide = (newIndex) => {
		if (animate) return;
		setActiveSlide(newIndex);
	};

	const previous = () => {
		if (animate) return;
		const nextIndex =
			activeSlide === 0 ? carouselItems.length - 1 : activeSlide - 1;
		setActiveSlide(nextIndex);
	};

	const next = () => {
		if (animate) return;
		const nextIndex =
			activeSlide === carouselItems.length - 1 ? 0 : activeSlide + 1;
		setActiveSlide(nextIndex);
	};

	const slides = carouselItems.map((slide, index) => (
		<CarouselItem
			key={slide.key}
			onExiting={() => setAnimate(true)}
			onExited={() => setAnimate(false)}
		>
			<div className="d-flex justify-content-center align-items-center position-relative carousel__image-wrap">
				<Image
					src={imageUrls[index]}
					title={slide.class}
					className={slide.class}
				/>
			</div>
			<div className="carousel-body">
				<h1 className="carousel-body__header">{slide.header}</h1>
				<p className="carousel-body__text">{slide.text}</p>
				{slide.buttonTxt && (
					<Link to={slide.link} className="carousel-body__link">
						{slide.buttonTxt}
					</Link>
				)}
			</div>
		</CarouselItem>
	));

	return (
		<Carousel
			activeIndex={activeSlide}
			next={next}
			previous={previous}
			pause={'hover'}
			interval={3000}
		>
			<CarouselIndicators
				items={slides}
				activeIndex={activeSlide}
				onClickHandler={goToSlide}
			/>
			{slides}
			<CarouselControl
				direction="prev"
				directionText="Previous"
				onClickHandler={previous}
			/>
			<CarouselControl
				direction="next"
				directionText="Next"
				onClickHandler={next}
			/>
		</Carousel>
	);
}
