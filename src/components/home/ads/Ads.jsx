import React from 'react'
import './Ads.css'
import adsBanner from '../../../assets/home/home-ads/ads1.png'
import { MapPin } from 'lucide-react'

const Ads = () => {
  return (
    
    <section className="home-ads">
        <div className="ads-image">
            <img src={adsBanner} alt='SolidRoots Furniture Experience Store' />
        </div>
        <div className="ads-texts">
            <h3>SOLID ROOTS</h3>
            <h2>47+ EXPERIENCE STORES</h2>
            <p>Explore our furniture designs in person, experience the quality of every material, and discover the perfect pieces for your home with guidance from our experts.</p>
            <button className='btnAd'><MapPin size={22} strokeWidth={1.8} />Find Your Nearest Store</button>
            <a href="#appointment">Book an Appointment</a>
        </div>
    </section>
  )
}

export default Ads