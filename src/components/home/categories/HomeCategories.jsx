import React from 'react'
import './HomeCategories.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card1 from '../../../assets/home/home-categories/card1.jpg'
import card2 from '../../../assets/home/home-categories/card2.jpg'
import card3 from '../../../assets/home/home-categories/card3.jpg'
import card4 from '../../../assets/home/home-categories/card4.jpg'
import card5 from '../../../assets/home/home-categories/card5.jpeg'
import card6 from '../../../assets/home/home-categories/card6.jpg'
import card7 from '../../../assets/home/home-categories/card7.jpg'
import card8 from '../../../assets/home/home-categories/card8.jpg'
import card9 from '../../../assets/home/home-categories/card9.jpg'
import card10 from '../../../assets/home/home-categories/card10.png'

const HomeCategories = () => {

    const cardTitles = [
        'SOFAS',
        'BEDS',
        'Mattresses',
        'Dining',
        'TV Units',
        'Sofa Cum Beds',
        'Coffee Tables',
        'Study Tables',
        'Wardrobes',
        'Cabinets and sideboards'
    ]
    const cardBanners = {
        SOFAS: card1,
        BEDS: card2,
        Mattresses: card3,
        Dining: card4,
        'TV Units': card5,
        'Sofa Cum Beds': card6,
        'Coffee Tables': card7,
        'Study Tables': card8,
        Wardrobes: card9,
        'Cabinets and sideboards': card10
    }
  return (
    <section className="home-categories">
        <h2>Everything for Your Home</h2>

        <div className="categories-grid">
            {cardTitles.map((title) => (
            <Card className='category-card' key={title}>
            <Card.Img variant="top" src={cardBanners[title]} className='category-img'/>
            <Card.Body className='category-body'>
                    <Card.Title className='category-title'>{title}</Card.Title>
                </Card.Body>
        </Card>
        ))}
        </div>

    </section>
  );
};

export default HomeCategories