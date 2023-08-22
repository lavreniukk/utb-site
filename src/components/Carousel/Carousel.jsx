import React, { useState } from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
} from 'reactstrap';
import './carousel.css';

export default function CarouselComponent({carouselItems}) {
    const [activeSlide, setActiveSlide] = useState(0);
    const [animate, setAnimate] = useState(false);

    const goToSlide = (newIndex) => {
        if (animate) return;
        setActiveSlide(newIndex);
    };

    const previous = () => {
        if (animate) return;
        const nextIndex = activeSlide === 0 ? carouselItems.length - 1 : activeSlide - 1;
        setActiveSlide(nextIndex);
    };

    const next = () => {
        if (animate) return;
        const nextIndex = activeSlide === carouselItems.length - 1 ? 0 : activeSlide + 1;
        setActiveSlide(nextIndex);
    };

    const slides = carouselItems.map((slide) =>
        <CarouselItem
            key={slide.key}
            onExiting={() => setAnimate(true)}
            onExited={() => setAnimate(false)}
        >
            <img src={slide.src} alt='alt' className={`carousel-img ${slide.class}`} loading='lazy'/>
            <CarouselCaption 
                captionText='text'
                captionHeader='HEADER'
            />
        </CarouselItem>
    );

    return (
        <Carousel
            activeIndex={activeSlide}
            next={next}
            previous={previous}
            pause={'hover'}
            interval={4000}
            >
            <CarouselIndicators
                items={slides}
                activeIndex={activeSlide}
                onClickHandler={goToSlide}
            />
            {slides}
            <CarouselControl
                direction='prev'
                directionText='Previous'
                onClickHandler={previous}
            />
            <CarouselControl
                direction='next'
                directionText='Next'
                onClickHandler={next}
            />
        </Carousel>
    );
};