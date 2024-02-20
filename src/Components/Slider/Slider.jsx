import React, { useState, useEffect } from 'react';
import './Slider.css';

import slide1 from '../Assets/Group 83.jpg';
import slide2 from '../Assets/pexels-maurício-mascaro-11995853.jpg';
import slide3 from '../Assets/pexels-stephen-niemeier-65718.jpg';

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () => {
        showSlides(slideIndex + 1);
    };

    const previousSlide = () => {
        showSlides(slideIndex - 1);
    };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("item");

        if (n > slides.length) {
            setSlideIndex(1);
        } else if (n < 1) {
            setSlideIndex(slides.length);
        } else {
            setSlideIndex(n);
        }

        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = i + 1 === slideIndex ? "block" : "none";
        }
    };

    useEffect(() => {
        showSlides(slideIndex);
        
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [slideIndex]);

    return (
        <div className='slider'>
            <div className='item'>
                <img src={slide1} alt="" />
            </div>
            <div className='item'>
                <img src={slide2} alt="" />
            </div>
            <div className='item'>
                <img src={slide3} alt="" />
            </div>
            {/* <a className="previous" onClick={previousSlide}>&#10094;</a>
            <a className="next" onClick={nextSlide}>&#10095;</a> */}
        </div>
    );
};

export default Slider;
