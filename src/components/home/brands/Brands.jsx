import React from 'react'
import './Brands.css'
import Card from 'react-bootstrap/Card';
import brand1 from '../../../assets/home/home-brands/brand1.png'
import brand2 from '../../../assets/home/home-brands/brand2.jpg'
import brand3 from '../../../assets/home/home-brands/brand3.jpeg'

const brandCards = [
    {
        id: 1,
        image: brand1,
        title: 'LIVING ROOM'
    },
    {
        id: 2,
        image: brand2,
        title: 'BEDROOM'
    },
    {
        id: 3,
        image: brand3,
        title: 'DINING ROOM'
    }
]

const Brands = () => {
  return (
    <section className="home-brands">
        <h2>India's Finest Online Furniture Brand</h2>
        <p>Buy Furniture Online from our extensive collection of wooden furniture units to give your home an elegant touch at affordable prices. We offer a wide range of wooden furniture online to suit your home interiors. You can either buy furniture carved out of solid wood material from our offerings or get it customized to match your requirements. Buy furniture online and find the features, functionality, dimensions of the products, all with great ease. You can also avail the exciting deals and discount offers on our online furniture store.</p>

        <div className="brand-cards">


            {brandCards.map((brand) => (
                <Card className='brand-card' key={brand.id} >
                    <div className="brand-image-wrapper">
                        <Card.Img variant="top" src={brand.image} className='brand-card-img' />
                    </div>
                    <Card.Body className='brand-body'>
                        <Card.Title className='brand-title'>{brand.title}</Card.Title>
                        <a href="" className='brand-link'>SHOP NOW</a>
                    </Card.Body>
                </Card>
            ))}




            
        </div>
    </section>
  )
}

export default Brands