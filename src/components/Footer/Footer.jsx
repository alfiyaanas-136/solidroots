import React, { useState } from "react";

import visa from "../../assets/footer/visa.png";
import mastercard from "../../assets/footer/mastercard.png";
import maestro from "../../assets/footer/maestro.png";
import amex from "../../assets/footer/amex.png";
import rupay from "../../assets/footer/rupay.jpg";
import googlePlay from "../../assets/footer/google-play.png";
import appStore from "../../assets/footer/app-store.png";

import {
  ArrowUp,
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaPinterestP,
  FaLinkedinIn,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./Footer.css";

const footerColumns = [
  {
    title: "OUR COMPANY",
    links: [
      "About Us",
      "Career",
      "Media",
      "Blog",
      "Our Stores",
      "Customer Stories",
      "Investor Relations",
    ],
  },
  {
    title: "USEFUL LINKS",
    links: [
      "Custom Furniture",
      "Hotel Furniture",
      "Delivery Location",
      "Luxury Furniture",
    ],
  },
  {
    title: "SHOP BY ROOM",
    links: [
      "Living Room",
      "Bedroom",
      "Dining Room",
      "Kids Room",
      "Modular Kitchen Designs",
    ],
  },
];

const accordionData = [
  {
    title: "About Us",
    content:
      "SolidRoots is a furniture shopping experience focused on elegant designs, comfortable living spaces, and thoughtfully crafted home furnishings. Explore furniture for your living room, bedroom, dining room, and more.",
  },
  {
    title: "Why Choose Us?",
    content:
      "Discover a curated collection of modern and traditional furniture designs, easy product browsing, detailed product information, and furniture inspiration for every room.",
  },
  {
    title: "Most Related Searches",
    links: [
      "Wooden Sofas",
      "Sofa Cum Beds",
      "King Size Beds",
      "Queen Size Beds",
      "Dining Table Sets",
      "Coffee Tables",
      "TV Units",
      "Wooden Wardrobes",
      "Study Tables",
      "Bookshelves",
      "Shoe Racks",
      "Recliner Chairs",
    ],
  },
];

const paymentMethods = [
  { name: "Visa", image: visa },
  { name: "Mastercard", image: mastercard },
  { name: "Maestro", image: maestro },
  { name: "American Express", image: amex },
  { name: "RuPay", image: rupay },
];

const Footer = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion((previous) =>
      previous === index ? null : index
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="solidroots-footer">
      <div className="footer-main">
        <div className="footer-top-grid">
          {footerColumns.map((column) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>

              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <span>{link}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-column footer-partners">
            <h3>PARTNERS</h3>

            <ul>
              <li><span>Become a Franchise</span></li>
              <li><span>Sell on SolidRoots</span></li>
            </ul>

            <h3 className="footer-trusted-heading">
              TRUSTED BY
            </h3>

            <p className="footer-trust-description">
              We value secure shopping, transparency, and
              customer confidence.
            </p>

            <div className="footer-trust-tags">
              <span>Secure Shopping</span>
              <span>Customer Support</span>
            </div>
          </div>

          <div className="footer-column footer-help">
            <h3>NEED HELP</h3>

            <ul>
              <li><span>Help Center</span></li>
              <li><span>Contact Us</span></li>
              <li><span>Track Your Order</span></li>
              <li><span>Ask an Expert</span></li>
            </ul>

            <div className="footer-social-icons">
                <FaInstagram />
                <FaFacebookF />
                <FaXTwitter />
                <FaPinterestP />
                <FaLinkedinIn />
            </div>
          </div>
        </div>

        <div className="footer-middle">
          <div className="footer-delivery">
            <p>
              <strong>Delivery Across India :</strong>{" "}
              Ahmedabad, Bangalore, Bhopal, Chandigarh,
              Chennai, Coimbatore, Faridabad, Goa, Gurgaon,
              Hyderabad, Indore, Jaipur and{" "}
              <span className="footer-orange">More Cities</span>
            </p>
          </div>

          <div className="footer-payments">
            <p>We accept</p>

            <div className="footer-payment-list">
              {paymentMethods.map((method) => (
                <img
                    key={method.name}
                    src={method.image}
                    alt={method.name}
                    className="footer-payment-image"
                />
              ))}
            </div>
          </div>

          <div className="footer-app">
            <p>Download App</p>

            <div className="footer-app-badges">
                <img src={googlePlay} alt="Google Play" />
                <img src={appStore} alt="App Store" />
            </div>
            </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-brand">
            <div className="footer-logo">
              Solid<span>Roots</span>
            </div>
          </div>

          <div className="footer-legal">
            <div className="footer-policy-links">
              <span>Terms of Use</span>
              <span>Security & Privacy Policy</span>
              <span>Return & Refund</span>
              <span>Payment Policy</span>
              <span>Grievance Cell</span>
            </div>

            <p>
              © {new Date().getFullYear()} SolidRoots.
              All rights reserved.
            </p>

            <p>SolidRoots Furniture</p>
          </div>

          <div className="footer-office">
            <h4>Registered Office</h4>
            <p>
              SolidRoots Furniture
              <br />
              India
            </p>
          </div>
        </div>
      </div>

      <div className="footer-accordion-section">
        {accordionData.map((item, index) => (
          <div className="footer-accordion" key={item.title}>
            <button
              className="footer-accordion-header"
              onClick={() => toggleAccordion(index)}
              aria-expanded={openAccordion === index}
            >
              <span>{item.title}</span>

              {openAccordion === index ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>

            {openAccordion === index && (
              <div className="footer-accordion-content">
                {item.content && <p>{item.content}</p>}

                {item.links && (
                  <div className="footer-related-links">
                    {item.links.map((link) => (
                      <span key={link}>{link}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="footer-back-to-top"
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp size={25} strokeWidth={1.5} />
        <span>TOP</span>
      </button>

      <button
        className="footer-chat-button"
        aria-label="Chat support"
        title="Chat support coming soon"
        disabled
      >
        <MessageCircle size={27} />
      </button>
    </footer>
  );
};

export default Footer;
