
import React, { useRef } from 'react';
import './Showcase.css';

import mainBanner from '../../../assets/home/home-showcase/showcase-main.png';
import sofaBed from '../../../assets/home/home-showcase/showcase-sofacumbed.png';
import coffeeTable from '../../../assets/home/home-showcase/showcase-coffee.jpg';
import studyTable from '../../../assets/home/home-showcase/showcase-study.jpg';
import tvUnit from '../../../assets/home/home-showcase/showcase-tv.jpg';
import wardrobe from '../../../assets/home/home-showcase/showcase-wardrobe.jpg';
import officeChair from '../../../assets/home/home-showcase/showcase-officechair.png';

const showcaseCategories = [
    {
        id: 1,
        title: 'SOFA CUM BED',
        description: 'Furniture for your everyday comfort.',
        offer: 'Upto 60% OFF',
        image: sofaBed,
        imagePosition: 'center 65%',
        link: '/sofa-cum-beds'
    },
    {
        id: 2,
        title: 'COFFEE TABLE',
        description: 'Furniture for your everyday living.',
        offer: 'Upto 70% OFF',
        image: coffeeTable,
        imagePosition: 'center 60%',
        link: '/coffee-tables'
    },
    {
        id: 3,
        title: 'TV UNITS',
        description: 'Furniture for everyday entertainment.',
        offer: 'Upto 50% OFF',
        image: tvUnit,
        imagePosition: 'center 55%',
        link: '/tv-units'
    },
    {
        id: 4,
        title: 'OFFICE CHAIR',
        description: 'Furniture for everyday work.',
        offer: 'Upto 60% OFF',
        image: officeChair,
        imagePosition: 'center 50%',
        link: '/office-chair'
    },
    {
        id: 5,
        title: 'WARDROBE',
        description: 'Smart storage for your everyday essentials.',
        offer: 'Upto 60% OFF',
        image: wardrobe,
        imagePosition: 'center 45%',
        link: '/wardrobe'
    },
    {
        id: 6,
        title: 'STUDY TABLE',
        description: 'Furniture for everyday productivity.',
        offer: 'Upto 70% OFF',
        image: studyTable,
        imagePosition: 'center 40%',
        link: '/study-table'
    }
];



const Showcase = () => {
    const carouselRef = useRef(null);

    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const firstCard = carousel.querySelector('.showcase-card');
        if (!firstCard) return;

        const gap = parseFloat(
            window.getComputedStyle(carousel).columnGap
        ) || 0;

        const scrollAmount =
            firstCard.getBoundingClientRect().width + gap;

        carousel.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    };

    return (
        <section className="home-showcase">

            {/* Main Promotional Banner */}
            <div className="showcase-main">
                <img
                    src={mainBanner}
                    alt="SolidRoots living room furniture"
                />

                <div className="showcase-main-content">
                    <h2>THE BEST PLANS? HOME.</h2>
                    <p>Settle in and let the day unfold.</p>
                    <a href="/sofa">SHOP NOW</a>
                </div>
            </div>

            {/* Category Carousel */}
            <div className="showcase-carousel">

                <button
                    className="showcase-arrow showcase-prev"
                    onClick={() => scrollCarousel(-1)}
                    aria-label="Previous category"
                >
                    &#10094;
                </button>

                <div className="showcase-cards" ref={carouselRef}>
                    {showcaseCategories.map((item) => (
                        <a
                            href={item.link}
                            className="showcase-card"
                            key={item.id}
                        >
                            
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                objectPosition: item.imagePosition || 'center center'
                            }}
                        />

                            <div className="showcase-card-content">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <span>{item.offer}</span>
                                <small>Buy Now</small>
                            </div>
                        </a>
                    ))}
                </div>

                <button
                    className="showcase-arrow showcase-next"
                    onClick={() => scrollCarousel(1)}
                    aria-label="Next category"
                >
                    &#10095;
                </button>

            </div>
        </section>
    );
};

export default Showcase;

