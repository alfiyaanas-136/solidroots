import React from 'react'
import './MainHeader.css'
import { Store, CircleUserRound, Heart, ShoppingCart, Search } from 'lucide-react';

const MainHeader = () => {
  return (
    <div className='main-header'>
        <div className="header-logo">
          <h1>Solid Roots</h1>
        </div>

        <div className="header-search">
          <input type="text" placeholder="Search Products, Color & More..." className='searchText' />
          <Search size={22} className='search-icon' />
        </div>

        <div className="header-actions">
          <div className='header-action stores-action'>
            <Store size={24} className="action-icon"/>
            <span>Store</span>
          </div>
          <div className="header-action">
            <CircleUserRound size={24} className="action-icon"/>
            <span>Profile</span>
          </div>
          <div className="header-action">
            <Heart size={24} className="action-icon"/>
            <span>Wishlist (0)</span>
          </div>
          <div className="header-action">
            <ShoppingCart size={24} className="action-icon"/>
            <span>Cart (0)</span>
          </div>
        </div>

    </div>
  )
}

export default MainHeader