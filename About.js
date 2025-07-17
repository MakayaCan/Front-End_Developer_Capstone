import React from 'react';
import marioAndAdrianA from '../assets/Mario and Adrian A.jpg'; // renamed file
import marioAndAdrianb from '../assets/Mario and Adrian b.jpg'; // renamed file

const About = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="brand-name">Little Lemon</h2>
          <h3 className="location">Chicago</h3>
          <p><strong>Opening hours:</strong><br />
            Weekdays: 9:30am - 9:30pm<br />
            Weekends: 8am - 8:30pm
          </p>
          <p>
            Our menu is inspired by the flavors of the Mediterranean, with a focus on healthy and wholesome ingredients. 
            Whether you're in the mood for a hearty meal or a light snack, we've got something for everyone at Little Lemon.
          </p>
        </div>

        <div className="about-images">
          <img src={marioAndAdrianb} alt="Mario and Adrian" className="chef-img img-front" />
          <img src={marioAndAdrianA} alt="Mario and Adrian" className="chef-img img-back" />
        </div>
      </div>
    </section>
  );
};

export default About;
