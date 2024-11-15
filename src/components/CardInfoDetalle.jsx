'use client'
import useStore from '@/store/useStore';
import React from 'react'

const CardInfoDetalle = ({direccion, precioValor, precioMoneda, urlMaps}) => {

  const { steps } = useStore();

  return (
    <>
      <div className='card__info--direc'>
        {direccion}
      </div>
      <div className='card__info--ubic'>
        <a className='link' href={urlMaps}>Ubicación</a> 
      </div>
      <div className='card__info--valor'>
        <span className='usd'>{precioMoneda}</span> ${precioValor}
      </div>
    </>
  )
}

export default CardInfoDetalle