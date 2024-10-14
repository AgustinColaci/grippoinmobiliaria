'use client'
import useStore from '@/store/useStore';
import React from 'react'

const CardSlider = () => {

    const { steps } = useStore();

    return (
        <div  className="slider">
          <div className="slider__img--temporal"></div>
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