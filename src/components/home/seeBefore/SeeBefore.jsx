
import React, { useEffect, useRef, useState } from 'react';
import './SeeBefore.css';
import seeBeforeProducts from './SeeBeforeData';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const formatPrice = (price) =>
    `₹${price.toLocaleString('en-IN')}`;

const calculateDiscount = (price, originalPrice) => {
    if (!originalPrice || price >= originalPrice) return 0;

    return Math.round(
        ((originalPrice - price) / originalPrice) * 100
    );
};

const SeeBefore = () => {
    const carouselRef = useRef(null);
    const videoRefs = useRef([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(true);

    // Update carousel navigation availability
    const updateArrows = () => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        setCanScrollPrev(carousel.scrollLeft > 2);

        setCanScrollNext(
            carousel.scrollLeft + carousel.clientWidth <
            carousel.scrollWidth - 2
        );
    };

    // Scroll one card at a time
    const scrollCarousel = (direction) => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const firstCard = carousel.querySelector('.see-before-card');
        if (!firstCard) return;

        const styles = window.getComputedStyle(carousel);
        const gap = parseFloat(styles.columnGap) || 0;
        const cardWidth = firstCard.getBoundingClientRect().width;

        carousel.scrollBy({
            left: direction * (cardWidth + gap),
            behavior: 'smooth'
        });
    };

    // Play only videos visible within the viewport
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const video = entry.target;

                    if (
                        entry.isIntersecting &&
                        document.visibilityState === 'visible'
                    ) {
                        video.play().catch(() => {});
                    } else {
                        video.pause();
                    }
                });
            },
            {
                root: carousel,
                threshold: 0.5
            }
        );

        videoRefs.current.forEach((video) => {
            if (video) observer.observe(video);
        });

        return () => observer.disconnect();
    }, []);

    // Pause background videos when popup is open
    useEffect(() => {
        if (!selectedProduct) return;

        videoRefs.current.forEach((video) => video?.pause());

        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                setSelectedProduct(null);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => {
            window.removeEventListener('keydown', handleEscape);
        };
    }, [selectedProduct]);

    // Resume visible videos after popup closes
    useEffect(() => {
        if (selectedProduct) return;

        const carousel = carouselRef.current;
        if (!carousel) return;

        videoRefs.current.forEach((video) => {
            if (!video) return;

            const card = video.closest('.see-before-card');
            if (!card) return;

            const cardRect = card.getBoundingClientRect();
            const carouselRect = carousel.getBoundingClientRect();

            const visibleWidth = Math.max(
                0,
                Math.min(cardRect.right, carouselRect.right) -
                Math.max(cardRect.left, carouselRect.left)
            );

            if (
                visibleWidth >= cardRect.width * 0.5 &&
                document.visibilityState === 'visible'
            ) {
                video.play().catch(() => {});
            }
        });
    }, [selectedProduct]);

    // Keep arrows in sync with scrolling and resizing
    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        updateArrows();

        const resizeObserver = new ResizeObserver(updateArrows);
        resizeObserver.observe(carousel);

        window.addEventListener('resize', updateArrows);

        return () => {
            resizeObserver.disconnect();
            window.removeEventListener('resize', updateArrows);
        };
    }, []);

    const handleAddToCart = (product) => {
        // Temporary cart storage until your Cart Context is ready
        const storedCart = JSON.parse(
            localStorage.getItem('solidroots-cart') || '[]'
        );

        const existing = storedCart.find(
            (item) => item.id === product.id
        );

        const updatedCart = existing
            ? storedCart.map((item) =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
            : [...storedCart, { ...product, quantity: 1 }];

        localStorage.setItem(
            'solidroots-cart',
            JSON.stringify(updatedCart)
        );

        window.dispatchEvent(new Event('solidroots-cart-updated'));

        setSelectedProduct(null);
    };

    return (
        <section className="home-see-before">
            <h2>See Before You Choose</h2>

            <div className="see-before-carousel-wrapper">

                <div
                    className="see-before-carousel"
                    ref={carouselRef}
                    onScroll={updateArrows}
                >
                    {seeBeforeProducts.map((product, index) => (
                        <div
                            className="see-before-card"
                            key={product.id}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <video
                                ref={(element) => {
                                    videoRefs.current[index] = element;
                                }}
                                src={product.video}
                                poster={product.image}
                                autoPlay
                                muted
                                loop
                                playsInline
                                preload="metadata"
                                disablePictureInPicture
                            />

                             {/* Hover tooltip */}
                            <span className="see-before-video-tooltip">
                                Product Video
                            </span>

                            <div className="see-before-card-footer">
                                <span title={product.name}>
                                    {product.name}
                                </span>

                                <button
                                    type="button"
                                    aria-label={`View ${product.name}`}
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {canScrollPrev && (
                    <button
                        type="button"
                        className="see-before-nav see-before-prev"
                        onClick={() => scrollCarousel(-1)}
                        aria-label="Previous products"
                    >
                        <ArrowLeft size={21} />
                    </button>
                )}

                {canScrollNext && (
                    <button
                        type="button"
                        className="see-before-nav see-before-next"
                        onClick={() => scrollCarousel(1)}
                        aria-label="Next products"
                    >
                        <ArrowRight size={21} />
                    </button>
                )}
            </div>

            {/* Product Quick View Modal */}
            {selectedProduct && (
                <div
                    className="see-before-modal-overlay"
                    onMouseDown={(event) => {
                        if (event.target === event.currentTarget) {
                            setSelectedProduct(null);
                        }
                    }}
                >
                    <div
                        className="see-before-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-label={selectedProduct.name}
                    >
                        <button
                            type="button"
                            className="see-before-modal-close"
                            onClick={() => setSelectedProduct(null)}
                            aria-label="Close product details"
                        >
                            <X size={27} />
                        </button>

                        <div className="see-before-modal-image">
                            <img
                                src={selectedProduct.image}
                                alt={selectedProduct.name}
                                 onError={() => {
                                    console.error(
                                        'Failed to load image:',
                                        selectedProduct.image
                                    );
                                }}
                            />
                        </div>

                        <div className="see-before-modal-details">
                            <img
                                src={selectedProduct.image}
                                alt=""
                                className="see-before-modal-thumbnail"
                            />

                            <h3>{selectedProduct.name}</h3>

                            <div className="see-before-price-row">
                                <strong>
                                    {formatPrice(selectedProduct.price)}
                                </strong>

                                <del>
                                    {formatPrice(selectedProduct.originalPrice)}
                                </del>

                                <span>
                                    {calculateDiscount(
                                        selectedProduct.price,
                                        selectedProduct.originalPrice
                                    )}% Off
                                </span>
                            </div>

                            <div className="see-before-modal-actions">
                                <button
                                    type="button"
                                    className="see-before-add-cart"
                                    onClick={() =>
                                        handleAddToCart(selectedProduct)
                                    }
                                >
                                    Add To Cart
                                </button>

                                <a
                                    href={selectedProduct.link}
                                    className="see-before-view-details"
                                >
                                    View Details
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SeeBefore;
