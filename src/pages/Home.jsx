import React from 'react'
import Hero from '../components/home/hero/Hero'
import HomeCategories from '../components/home/categories/HomeCategories'
import Deals from '../components/home/deals/Deals'
import Ads from '../components/home/ads/Ads'
import Brands from '../components/home/brands/Brands'
import Arrivals from '../components/home/arrivals/Arrivals'
import Showcase from '../components/home/showcase/Showcase'
import SeeBefore from '../components/home/seeBefore/SeeBefore'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Hero />
        <HomeCategories />
        <Deals />
        <Ads />
        <Brands />
        <Arrivals />
        <Showcase />
        <SeeBefore />
        <Footer />
    </div>
  )
}

export default Home