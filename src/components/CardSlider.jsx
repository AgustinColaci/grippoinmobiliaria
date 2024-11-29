'use client';
import useStore from '@/store/useStore';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CardSlider = ({ codigo, images, createURL }) => {
  const { steps } = useStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imagesForRender, setImagesForRender] = useState([]);
  const [imagesFromStorage, setImagesFromStorage] = useState([])

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

  useEffect(() => {
    console.log(images)
    if (images) {

      if (createURL) {
        // Convertir los objetos File a URLs utilizables por el navegador
        const fileURLs = images.map((file) => URL.createObjectURL(file));
        setImagesForRender(fileURLs);

        // Liberar memoria cuando el componente se desmonte
        return () => {
          fileURLs.forEach((url) => URL.revokeObjectURL(url));
        };
      } else {

        setImagesFromStorage(images)

      }
    }
  }, [images]);

  return (
    <div className="slider">
      <Slider {...settings}>
        {
          createURL ?
            imagesForRender.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <div
                  className="image-container"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              </div>
            ))
            :
            imagesFromStorage.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(index)}>
                <div
                  className="image-container"
                  style={{ backgroundImage: `url(${image.url})` }}
                ></div>
              </div>
            ))
        }
      </Slider>

      <div className="slider__pils">
        <div className="slider__img__total">
          {currentSlide + 1}/{imagesForRender.length || imagesFromStorage.length}
        </div>
        <div className="slider__code">Cod.{codigo}</div>
      </div>
    </div>

  );
};

export default CardSlider;

{/* Modal */ }
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