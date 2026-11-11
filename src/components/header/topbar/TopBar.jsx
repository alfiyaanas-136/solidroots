import React from 'react'
import './TopBar.css'
import { Building2, CircleHelp, Phone, Truck } from 'lucide-react'
const TopBar = () => {
  return (
    <div className='top-bar'>
        <div className="top-bar-left">
            <span>Furniture</span>
            <span>Home Interiors</span>
            <span>Bulk Order</span>
        </div>
        <div className="top-bar-right">
            <span><Phone className='top-bar-icon'/>+91-XXXXXXXXXX</span>
            <span><Building2 className='top-bar-icon' />Become a Franchise</span>
            <span><Truck className='top-bar-icon' />Track Order</span>
            <span><CircleHelp className='top-bar-icon' />Help Center</span>
        </div>
    </div>
  )
}

export default TopBar