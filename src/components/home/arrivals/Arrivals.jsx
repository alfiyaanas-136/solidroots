import React, { useState } from 'react';
import './Arrivals.css';
import arrivalProducts from './ArrivalData';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
    'All',
    'Sofa',
    'Beds',
    'Dining Table',
    'Coffee Table'
];

const Arrivals = () => {

    const [activeCategory, setActiveCategory] = useState('All');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [wishlist, setWishlist] = useState([]);

    // Filter products based on selected category
    const filteredProducts = arrivalProducts.filter((product) => {
        return (
            activeCategory === 'All' ||
            product.category === activeCategory
        );
    });

    // Change category
    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentIndex(0);
    };

    // Next slide
    const nextSlide = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % filteredProducts.length
        );
    };

    // Previous slide
    const prevSlide = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + filteredProducts.length) %
            filteredProducts.length
        );
    };

    // Wishlist toggle
    const toggleWishlist = (id) => {
        setWishlist((prev) =>
            prev.includes(id)
                ? prev.filter((itemId) => itemId !== id)
                : [...prev, id]
        );
    };

    // Format Indian currency
    const formatPrice = (price) => {
        return `₹${price.toLocaleString('en-IN')}`;
    };

    // Calculate discount
    const calculateDiscount = (price, originalPrice) => {
        if (originalPrice <= 0 || price >= originalPrice) {
            return 0;
        }

        return Math.round(
            ((originalPrice - price) / originalPrice) * 100
        );
    };

    // Get products for carousel
    const visibleProducts = filteredProducts.length
        ? Array.from(
            {
                length: Math.min(4, filteredProducts.length)
            },
            (_, index) =>
                filteredProducts[
                    (currentIndex + index) % filteredProducts.length
                ]
        )
        : [];

    return (
        <section className="home-arrivals">

            <h2>Arrives Before Diwali</h2>

            {/* Category Tabs */}
            <div className="arrival-categories">
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`arrival-tab ${
                            activeCategory === category ? 'active' : ''
                        }`}
                        onClick={() => handleCategoryChange(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Product Carousel */}
            <div className="arrival-carousel">

                {filteredProducts.length > 4 && (
                    <button
                        className="arrival-arrow arrival-prev"
                        onClick={prevSlide}
                        aria-label="Previous products"
                    >
                        <ChevronLeft size={24} />
                    </button>
                )}

                <div className="arrival-products">

                    {visibleProducts.map((product) => {

                        const discount = calculateDiscount(
                            product.price,
                            product.originalPrice
                        );

                        const isWishlisted = wishlist.includes(product.id);

                        const rating = Math.max(
                            0,
                            Math.min(5, product.rating)
                        );

                        return (
                            <div
                                className="arrival-card"
                                key={product.id}
                            >

                                {/* Product Image */}
                                <div className="arrival-image">

                                    <img
                                        src={product.image}
                                        alt={product.name}
                                    />

                                    <button
                                        className={`arrival-wishlist ${
                                            isWishlisted ? 'wishlisted' : ''
                                        }`}
                                        onClick={() =>
                                            toggleWishlist(product.id)
                                        }
                                        aria-label={
                                            isWishlisted
                                                ? 'Remove from wishlist'
                                                : 'Add to wishlist'
                                        }
                                        aria-pressed={isWishlisted}
                                    >
                                        <Heart
                                            size={24}
                                            fill={
                                                isWishlisted
                                                    ? '#f36b21'
                                                    : 'none'
                                            }
                                        />
                                    </button>

                                </div>

                                {/* Product Information */}
                                <div className="arrival-product-info">

                                    <h3 className="arrival-product-name">
                                        {product.name}
                                    </h3>

                                    {/* Rating */}
                                    <div className="arrival-rating">

                                        <span
                                            className="arrival-stars"
                                            aria-label={`${rating} out of 5 stars`}
                                        >
                                            <span className="arrival-stars-empty">
                                                ★★★★★
                                            </span>

                                            <span
                                                className="arrival-stars-filled"
                                                style={{
                                                    width: `${(rating / 5) * 100}%`
                                                }}
                                            >
                                                ★★★★★
                                            </span>
                                        </span>

                                        <span className="arrival-reviews">
                                            ({product.reviews})
                                        </span>

                                    </div>

                                    {/* Selling Price */}
                                    <p className="arrival-price">
                                        {formatPrice(product.price)}
                                    </p>

                                    {/* Original Price and Discount */}
                                    <div className="arrival-discount">

                                        <del>
                                            {formatPrice(product.originalPrice)}
                                        </del>

                                        {discount > 0 && (
                                            <span>
                                                {discount}% Off
                                            </span>
                                        )}

                                    </div>

                                </div>

                            </div>
                        );
                    })}

                </div>

                {filteredProducts.length > 3 && (
                    <button
                        className="arrival-arrow arrival-next"
                        onClick={nextSlide}
                        aria-label="Next products"
                    >
                        <ChevronRight size={24} />
                    </button>
                )}

            </div>

        </section>
    );
};

export default Arrivals;