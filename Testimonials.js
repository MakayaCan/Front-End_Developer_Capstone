import React from 'react';

import MakCan from '../assets/MakCan.jpg';
import Can from '../assets/Can.jpg';
import Cann from '../assets/Cann.jpg';
import Canny from '../assets/Canny.jpg';

const testimonialsData = [
  {
    image: MakCan,
    rating: 5,
    name: 'MakCan',
    comment: 'Amazing food and fantastic service. Highly recommend!',
  },
  {
    image: Can,
    rating: 4,
    name: 'Can',
    comment: 'Great atmosphere, will visit again soon!',
  },
  {
    image: Cann,
    rating: 5,
    name: 'Cann',
    comment: 'Authentic Mediterranean flavors and very friendly staff.',
  },
  {
    image: Canny,
    rating: 4,
    name: 'Canny',
    comment: 'Loved the desserts! Cozy place with good vibes.',
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        {testimonialsData.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <img src={item.image} alt={item.name} className="reviewer-image" />
            <div className="rating">
              {'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}
            </div>
            <p className="comment">"{item.comment}"</p>
            <p className="name">- {item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
