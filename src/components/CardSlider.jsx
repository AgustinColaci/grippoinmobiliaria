'use client'
import useStore from '@/store/useStore';
import React from 'react'
import Slider from 'react-slick';
import Image from 'next/image';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import bgB from '../img/background--banner.png';

const CardSlider = () => {

  const { steps } = useStore();

  const settings = {
    dots: true,             // Muestra los puntos de navegación
    infinite: true,         // Permite el desplazamiento infinito
    speed: 500,             // Velocidad del cambio de imagen
    slidesToShow: 1,        // Cantidad de imágenes visibles a la vez
    slidesToScroll: 1,      // Cantidad de imágenes que se desplazan por cambio
    arrows: true            // Muestra las flechas de navegación
  };

  return (
    <div className="slider">

      <Slider {...settings}>
        <div><Image src={bgB} alt="Image 1"/></div>
        <div><Image src={bgB} alt="Image 2"/></div>
        <div><Image src={bgB} alt="Image 3"/></div>
        <div><Image src={bgB} alt="Image 4"/></div>
        <div><Image src={bgB} alt="Image 5"/></div>
      </Slider>

      <div className='slider__pils'>
        <div className="slider__img__total">
          5/5
        </div>
        <div className="slider__code">
          Cod.1234
        </div>
      </div>
    </div>
  )
}

export default CardSlider