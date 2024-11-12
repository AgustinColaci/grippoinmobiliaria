'use client';
import useStore from '@/store/useStore';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgB from '../img/background--banner.png';
import SMOro1 from '../img/SMOro-1.jpg';
import SMOro2 from '../img/SMOro-2.jpg';
import SMOro3 from '../img/SMOro-3.jpg';
import SMOro4 from '../img/SMOro-4.jpg';
import SMOro5 from '../img/SMOro-5.jpg';
import SMOro6 from '../img/SMOro-6.jpg';

const CardSlider = () => {
  const { steps } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  const handleImageClick = (index) => {
    setCurrentSlide(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const images = [bgB, SMOro1, SMOro2, SMOro3, SMOro4, SMOro5, SMOro6];
  const images2 = [bgB, SMOro1, SMOro2, SMOro3, SMOro4, SMOro5, SMOro6];

  return (
    <div className="slider">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(index)}>
            <div
              className="image-container"
              style={{ backgroundImage: `url(${image.src})` }}
            ></div>
          </div>
        ))}
      </Slider>

      <div className="slider__pils">
        <div className="slider__img__total">{currentSlide + 1}/{images.length}</div>
        <div className="slider__code">Cod.1234</div>
      </div>

      {/* Modal */}
      {/* {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <span className="modal__close">&times;</span>
          <div className="modal__content">
            <Slider {...settings} initialSlide={currentSlide}>
              {images2.map((image, index) => (
                <div
                key={index}
                className="modal-image-container"
                style={{ backgroundImage: `url(${image.src})` }}
                ></div>
              ))}
            </Slider>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CardSlider;
