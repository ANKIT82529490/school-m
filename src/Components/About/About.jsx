import React from 'react'
import './About.css'

import about_video from '../../assets/about-video.mp4'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>

        <video
          src={about_video}
          className='about-video'
          autoPlay
          loop
          muted
          playsInline
        />

      </div>

      <div className='about-right'>
        <h3>ABOUT SCHOOL</h3>
        <h2>Nurturing Tomorrow&apos;s Leaders Today</h2>

        <p>
          Embark on a transformative educational journey with our university's comprehensive education programs.
        </p>

        <p>
          With a focus on innovation, hands-on learning, and personalized mentorship.
        </p>

        <p>
          Whether you aspire to become a teacher, administrator, counselor, or educational leader.
        </p>
      </div>
    </div>
  )
}

export default About