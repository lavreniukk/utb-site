import React, { useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './productimageslider.css';
import { Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

function ProductImageSlider({ imagesSrcArray }) {
    const [activeThumb, setActiveThumb] = useState(null);

    return (
        <div className='product-image-slider__container'>
        <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: activeThumb  && !activeThumb.destroyed ? activeThumb : null}}
            modules={[Navigation, Thumbs]}
            grabCursor={true}
            className='product-image-slider'
        >
            {
                imagesSrcArray.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img src={image.src} className='product-image-slider__image' alt='product images'/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        <Swiper
            onSwiper={setActiveThumb}
            loop={true}
            spaceBetween={10}
            slidesPerView={3}
            modules={[Navigation, Thumbs]}
            className='product-image-slider__thumbs'
        >
        {
            imagesSrcArray.map((image, index) => (
                <SwiperSlide key={index}>
                    <div className='thumbs__img-wrapper'>
                        <img src={image.src} className='thumbs__image' alt='product images'/>
                    </div>
                </SwiperSlide>
            ))
        }
        </Swiper>
        </div>
    )
}

// <div>
        //     <div>
        //         <img src={chosenImg.src} alt='Обране фото'></img>
        //         <div className='image-slider__arrows'>
        //             <i></i>
        //             <i></i>
        //          </div>
        //     </div>
        //     <div className='d-flex flex-row image-slider__previews'>
        //         {
        //             imagesSrcArray.map((image, index) => (
        //                 <img 
        //                     className={chosenImg === image ? 'image-slider__chosen-image' : ''}
        //                     key={index} 
        //                     src={image.src} 
        //                     alt='Другорядні фото' 
        //                     height={100} 
        //                     width={100} 
        //                     onClick={() => handleImageClick(image)}
        //                 />
        //             ))
        //         }  
        //     </div>
        // </div>

export default ProductImageSlider