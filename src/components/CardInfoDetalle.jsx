'use client'
import useStore from '@/store/useStore';
import React from 'react'

const CardInfoDetalle = () => {

  const { steps } = useStore();

  return (
    <>
      <div className='card__info--direc'>
        Dirección 1234
      </div>
      <div className='card__info--ubic'>
        <a className='link' href="https://maps.app.goo.gl/igLACjzeGR771tNA8">Ubicación</a>
      </div>
      <div className='card__info--valor'>
        <span className='usd'>USD</span> 40.000
      </div>
    </>
  )
}

export default CardInfoDetalle