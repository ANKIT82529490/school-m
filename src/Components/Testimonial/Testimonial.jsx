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
  {
    img: user_1,
    name: "William Jackson",
    org: "Edusity, USA",
    text: "Edusity gave me confidence to lead. The mentors were supportive, and the learning environment felt future-ready."
  },
  {
    img: user_2,
    name: "Sophia Carter",
    org: "Edusity, Canada",
    text: "The curriculum is super practical. Projects + workshops helped me build real-world skills quickly."
  },
  {
    img: user_3,
    name: "Ethan Brown",
    org: "Edusity, UK",
    text: "I loved the campus vibe and the community. Every week there were activities that boosted networking."
  },
  {
    img: user_4,
    name: "Ava Martinez",
    org: "Edusity, Spain",
    text: "The faculty actually listens and guides you. My performance improved a lot with their feedback."
  },
  {
    img: user_5,
    name: "Noah Wilson",
    org: "Edusity, Australia",
    text: "Modern labs + strong academics. The learning experience was smooth, structured, and motivating."
  },
  {
    img: user_6,
    name: "Mia Johnson",
    org: "Edusity, Germany",
    text: "The placement support was excellent. Mock interviews and resume help made a big difference."
  },
  {
    img: user_7,
    name: "Liam Anderson",
    org: "Edusity, India",
    text: "The best part is hands-on learning. We built projects, presented ideas, and learned teamwork."
  },
  {
    img: user_8,
    name: "Olivia Taylor",
    org: "Edusity, UAE",
    text: "The environment is safe and encouraging. I felt comfortable asking doubts and exploring new topics."
  },
  {
    img: user_9,
    name: "James Thomas",
    org: "Edusity, Singapore",
    text: "Great teachers, updated content, and strong discipline. Edusity truly focuses on overall growth."
  },
];

const Testimonial = () => {
  const slider = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonials.length;

  const slideBackward = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const slideForward = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  // Smooth transform effect
  useEffect(() => {
    if (!slider.current) return;
    slider.current.style.transform = `translateX(-${currentIndex * 100}%)`;
  }, [currentIndex]);

  // Auto-slide every 5 seconds (stable interval)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <div className="testimonial">
      <img src={previous_icon} alt="Previous" className="previous-btn" onClick={slideBackward} />
      <img src={next_icon} alt="Next" className="next-btn" onClick={slideForward} />

      <div className="slider">
        <ul ref={slider}>
          {testimonials.map((t, index) => (
            <li key={index}>
              <div className="slide">
                <div className="user-info">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <h3>{t.name}</h3>
                    <span>{t.org}</span>
                  </div>
                </div>
                <p>{t.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;