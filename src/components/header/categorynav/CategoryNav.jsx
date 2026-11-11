import React from 'react'
import './CategoryNav.css';
import { categoryData } from './categoryData';
import { Columns3CogIcon } from 'lucide-react';
import sofaBanner from '../../../assets/banners/sofa-banner.jpg'
import livingBanner from '../../../assets/banners/living-banner.jpg'
import decorBanner from '../../../assets/banners/decor-banner.jpg'
import interiorBanner1 from '../../../assets/banners/interior-banner1.jpg'
import interiorBanner2 from '../../../assets/banners/interior-banner2.jpg'
import mattressBanner from '../../../assets/banners/mattress-banner.jpg'
import outdoorBanner from '../../../assets/banners/outdoor-banner.jpg'
import storageBanner from '../../../assets/banners/storage-banner.png'
import officeBanner from '../../../assets/banners/office-banner.jpg'

const CategoryNav = () => {

  const categories = [
    'Sofas',
    'Living',
    'Bedroom',
    'Mattress',
    'Dining',
    'Storage',
    'Study & Office',
    'Outdoor',
    'Decor & Furnishing',
    'Interiors',
    'New Arrivals'
  ];

  const categoryBanners = {
    Sofas: sofaBanner,
    Living: livingBanner,
    Mattress: mattressBanner,
    Storage: storageBanner,
    'Study & Office': officeBanner,
    Outdoor: outdoorBanner,
    'Decor & Furnishing': decorBanner
  };
  return (
    <nav className='category-nav'>
      
      {categories.map((category) => (
        <div className="nav-item" key={category}>
          <span>{category}</span>

          {categoryData[category] && (
            <div className="dropdown-menu " 
              style={{ gridTemplateColumns: `repeat(${
                categoryData[category].length +
                (categoryBanners[category] ? 1 : 0)
              }, minmax(0, 1fr))`
            }}
            >
              {categoryData[category].map((column, ColumnIndex) => (
                <div className="dropdown-column" key={ColumnIndex}>

                  {column.map((section) =>(
                  <div className="dropdown-section" key={section.title}>
                  <h4>{section.title}</h4>

                  {section.items.map((item) => (
                    <a href="#" key={item}>{item}</a>
                  ))}
                </div>
              ))}

                </div>
              ))}
              

              {categoryBanners[category] && (
                <div className="dropdown-promotion">
                  <img src={categoryBanners[category]} alt={`${category} Furniture Collection`} />
                </div>
              )}


            </div>
          )}

          {category === 'Interiors' && (
            <div className="dropdown-menu interiors-dropdown">
              <div className="interiors-info">
                <h3>Transform your home's style with our innovative designs</h3>

                <div className="interiors-benefits">
                  <p>20,000+ Happy Customers</p>
                  <p>Branded Hardware and Materials</p>
                  <p>Up to 10-years* material warranty</p>
                  <p>Stringent Quality Checks</p>
                </div>
              </div>

              <div className="interiors-card">
                <img src={interiorBanner1} alt="Interior Design Collection 1" />
                <h4>Interior Design Collection</h4>
              </div>

              <div className="interiors-card">
                <img src={interiorBanner2} alt="Interior Design Collection 2" />
                <h4>Modern Home Interiors</h4>
              </div>

            </div>
          )
          
          }

        </div>
      ))}



 


    </nav>
  )
}

export default CategoryNav