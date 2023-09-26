import React, { useState } from 'react';
import './image.css';

function Image({src, title, className}) {
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    return (
            src ? 
            (
                isImageLoaded ? 
                <img src={src} alt={title} onLoad={handleImageLoad} className={`styled-image ${className}`}></img>
                :
                <>
                <div className='loading-image'>
                </div>
                <img src={src}  alt={title} onLoad={handleImageLoad} style={{display: 'none'}}></img>
                </>
            ) 
            : 
            (
                <div className='loading-image'>
                </div>
            )
    )
}

export default Image