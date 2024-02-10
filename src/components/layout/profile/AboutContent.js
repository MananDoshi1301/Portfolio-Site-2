import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './AboutContent.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutContent = () => {
  const data = useContext(DataContext);
  const about_content = data.about_content
  return (
    <div
      className='fs-4 d-flex justify-content-end h-85'
      data-aos='fade-right'
      data-aos-delay='900'
      data-aos-duration='1000'
    >
      <div className='w-90 about-content d-flex flex-column justify-content-around'>
        <div className='about-content-main d-flex flex-column gap-3'>
          {about_content}
        </div>
        <br />
        {/* <div className='about-technologies'>
          <div>Here are a few topics and technologies I've been working with recently:</div>
          <div className='d-flex gap-5 fs-5 mt-3'>
            <ul className='about-technologies-ul'>
              <li>R & Python</li>
              <li>AWS</li>
            </ul>
            <ul className='about-technologies-ul'>
              <li>MERN Stack</li>
              <li>Computer Networks and Systems</li>
            </ul>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default AboutContent;
