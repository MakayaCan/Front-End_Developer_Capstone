import React from "react";
import Logo_footer from '../assets/Logo_footer.png';

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <div className="company-info">
          <img src={Logo_footer} alt="Little Lemon Footer Logo" />
        </div>

        <div>
          <h3>Navigation</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul>
            <li>Address: <br />123 Towncity, USA</li>
            <li>Phone: <br />+0123 456 789</li>
            <li>Email: <br />little@lemon.com</li>
          </ul>
        </div>

        <div>
          <h3>Social Media</h3>
          <ul>
            <li><a href="/">Facebook</a></li>
            <li><a href="/">Instagram</a></li>
            <li><a href="/">X (Twitter)</a></li>
            <li><a href="/">WhatsApp</a></li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
