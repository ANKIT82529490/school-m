import React, { useRef, useState, useEffect } from 'react';
import './Testimonial.css';
import previous_icon from '../../assets/previous-icon.png';
import next_icon from '../../assets/next-icon.png';
import user_1 from '../../assets/user-1.png';
import user_2 from '../../assets/user-2.png';
import user_3 from '../../assets/user-3.png';
import user_4 from '../../assets/user-4.png';
import user_5 from '../../assets/user-5.png';
import user_6 from '../../assets/user-6.png';
import user_7 from '../../assets/user-7.png';
import user_8 from '../../assets/user-8.png';
import user_9 from '../../assets/user-9.png';

const testimonials = [
  user_1, user_2, user_3, user_4, user_5, user_6, user_7, user_8, user_9
];

const Testimonial = () => {
  const slider = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const slideBackward = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1; // loop
    setCurrentIndex(newIndex);
  };

  const slideForward = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1; // loop
    setCurrentIndex(newIndex);
  };

  // Smooth transform effect
  useEffect(() => {
    slider.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      slideForward();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="testimonial">
      <img src={previous_icon} alt="Previous" className="previous-btn" onClick={slideBackward} />
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((user, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={user} alt={`User ${index + 1}`} />
                  <div>
                    <h3>WILLIAM JACKSON</h3>
                    <span>Edusity, USA</span>
                  </div>
                </div>
                <p>
                  Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
