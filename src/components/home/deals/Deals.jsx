import React from 'react'
import './Deals.css'
import dealBanner1 from '../../../assets/home/home-deals/dealBanner1.png'
import dealBanner2 from '../../../assets/home/home-deals/dealBanner2.png'


const dealBanners = [
        {
            id: 1,
            image: dealBanner1,
            alt: 'Buy More Save More Offer'
        },
        {
            id: 2,
            image: dealBanner2,
            alt: 'Bank Offers'
        }
    ];
    
const Deals = () => {

  return (
    <section className='home-deals'>
        <h2>Explore Our Exclusive Deals</h2>

     
        <div className="deals-banner">
            {dealBanners.map((banner) => (
                <img key={banner.id} src={banner.image} alt={banner.alt} className='deals-img' />
            ))}
        </div>
        
    </section>
  )
}

export default Deals