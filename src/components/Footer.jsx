import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-column">
          <h3>Clothing-web</h3>
          <p>
            Elevate your style with our curated<br />
            collections of modern, sustainable<br />
            fashion.
          </p>
          <div className="social-icons">
            <InstagramIcon className="icon" />
            <FacebookRoundedIcon className="icon" />
            <TwitterIcon className="icon" />
          </div>
        </div>

        <div className="footer-column">
          <h3>Shop</h3>
          <ul>
            <li>Women</li>
            <li>Men</li>
            <li>Accessories</li>
            <li>New Arrivals</li>
            <li>Sale</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>Help Center</li>
            <li>Shipping & Returns</li>
            <li>Size Guide</li>
            <li>Track Order</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; 2025 Clothing-web. All rights reserved. |
        <a >Terms of Service </a> |
        <a >Privacy Policy</a> |
        <a >Cookies</a>
      </div>
    </footer>
  );
};

export default Footer;
