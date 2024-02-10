import React, { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import './AboutImage.css';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const AboutImage = () => {
    const data = useContext(DataContext);
    const myImg = data.about_img_link;
    return (
        <div className='aboutImage d-flex justify-content-center align-items-center p-3' data-aos='fade-left' data-aos-delay='500' data-aos-duration='1000'>
            <img src={myImg} className='img-fluid w-65' alt="" />
        </div>
    )
}

export default AboutImage
