'use client'
import useStore from '@/store/useStore';
import React from 'react'
import CardInfoDetalle from "@/components/CardInfoDetalle";

const CardInfo = ({ mts, ambientes, dormitorios, banos, cocheras, tieneCochera, pagaExpensas, precioExpensasValor, precioExpensas, urlMaps, precioInmuebleValor, precioInmueble, direccion}) => {

  const { steps } = useStore();

  return (
    <>
      <div className='card__info'>
        <span className='mts'>{mts}</span>
        <span className='amb'>{ambientes} amb.</span>
        <span className='dorm'>{dormitorios} dorm.</span>
        <span className='bano'>{banos} baño</span>
        {tieneCochera && <span className='coch'>{cocheras} coch.</span>}
      </div>
      <div className='card__info--expensas'>
        {
          pagaExpensas ? 
          <span className='valor'>
            <span className='peso'>$</span> {precioExpensasValor} Expensas
          </span>
          :
          <span className='valor'>
            No paga expensas
          </span>
        }
      </div>
      <CardInfoDetalle precioMoneda={precioInmueble} precioValor={precioInmuebleValor} urlMaps={urlMaps} direccion={direccion} />
    </>
  )
}

export default CardInfo