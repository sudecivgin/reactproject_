import React, { useState } from 'react';
import './Slider.css';
import program_1 from '../../assets/balık-çorbası.jpg';
import program_2 from '../../assets/ızgara balık.jpg';
import program_3 from '../../assets/somon.jpg';
import program_4 from '../../assets/ahtapot.jpg';
import program_5 from '../../assets/midye tava.jpg';
import program_6 from '../../assets/kalamar2.jpeg';
import program_7 from '../../assets/sushi.jpg';
import program_8 from '../../assets/ıstakoz.jpg';
import program_9 from '../../assets/hamsi2.jpg';
import program_10 from '../../assets/meze.jpg';
import program_11 from '../../assets/karides.jpg';
import program_12 from '../../assets/kalkan.jpg';




const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
      program_1, program_2, program_3, program_4, program_5, program_6, program_7, program_8, program_9, program_10, program_11,program_12
    ];
  
    // Her kaydırmada 4 görsel göstereceğiz
    const itemsPerPage = 4;
    const numSlides = Math.ceil(images.length / itemsPerPage);
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % numSlides);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + numSlides) % numSlides);
    };
  
    return (
        <div>

      <div className='slider-container'>
        <button className='prev' onClick={prevSlide}>&#10094;</button>
        <div className='slider'>
          <div className='slides' style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div className='slide' key={index}>
                <img src={image} alt={`Slide ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <button className='next' onClick={nextSlide}>&#10095;</button>
      </div>






</div>



    );
  };
  
  export default Slider;