import React, { useEffect, useRef, useState } from 'react'
import slide1 from '../../../assets/home/hero-carousels/slide1.png'
import slide2 from '../../../assets/home/hero-carousels/slide2.png'
import slide3 from '../../../assets/home/hero-carousels/slide3.png'
import slide4 from '../../../assets/home/hero-carousels/slide4.png'
import slide5 from '../../../assets/home/hero-carousels/slide5.png'
import slide6 from '../../../assets/home/hero-carousels/slide6.png'
import slide7 from '../../../assets/home/hero-carousels/slide7.png'
import slide8 from '../../../assets/home/hero-carousels/slide8.png'
import './Hero.css'

const slides = [
        slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8 
    ];

// Clone last and first slides for seamless looping
const allSlides = [...slides, slides[0]];

const Hero = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const [animate, setAnimate] = useState(true);
    const moving = useRef(false);

    const carouselRef = useRef(null);
    const [slideWidth, setSlideWidth] = useState(0);
    
    
const nextSlide = () => {
  if (moving.current) return;

  moving.current = true;
  setAnimate(true);
  setCurrentSlide((prev) => prev + 1);
};

const prevSlide = () => {
  if (moving.current) return;

  if (currentSlide === 0) {
    // Go directly to the last slide without moving backward
    setAnimate(false);
    setCurrentSlide(slides.length - 1);
  } else {
    moving.current = true;
    setAnimate(true);
    setCurrentSlide((prev) => prev - 1);
  }
};

const goToSlide = (index) => {
  if (moving.current || currentSlide === index) return;

  moving.current = true;
  setAnimate(true);
  setCurrentSlide(index);
};

    
    
useEffect(() => {
  const timer = setInterval(() => {
    if (!moving.current) {
      moving.current = true;
      setAnimate(true);
      setCurrentSlide((prev) => prev + 1);
    }
  }, 6000);

  return () => clearInterval(timer);
}, []);



    
    useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const updateWidth = () => {
        setSlideWidth(carousel.clientWidth);
    };

    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(carousel);

    return () => observer.disconnect();
    }, []);

    
    const handleTransitionEnd = (event) => {
  if (event.propertyName !== 'transform') return;

  // Once the cloned slide 1 arrives, reset to real slide 1
  if (currentSlide === slides.length) {
    setAnimate(false);
    setCurrentSlide(0);
  }

  moving.current = false;
};

    
 
  return (

    <section className="hero">

        <div className="hero-carousel" ref={carouselRef}>
        
        
            
            
        <div className="banner-track">
        {allSlides.map((slide, index) => (
            <div
            className="banner-item"
            key={index}
            style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                transition: animate
                ? 'transform 1.5s ease-in-out'
                : 'none'
            }}
            onTransitionEnd={
                index === currentSlide ? handleTransitionEnd : undefined
            }
            >
            <img
                src={slide}
                alt={`Furniture Banner ${(index % slides.length) + 1}`}
                className="banner-img"
            />
            </div>
        ))}
        </div>




            <button className="hero-arrow hero-prev" onClick={prevSlide}>&#10094;</button>
            <button className="hero-arrow hero-next" onClick={nextSlide}>&#10095;</button>

            
            <div className="hero-indicators">
                {slides.map((slide, index) => (
                    <button
                    key={index}
                    className={`hero-indicator ${
                        currentSlide % slides.length === index ? 'active' : ''
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>


        </div>
    </section>


    
    
  )
}

export default Hero