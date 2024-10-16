'use client'
import useStore from '@/store/useStore';
import React from 'react'
import CardInfoDetalle from "@/components/CardInfoDetalle";

const CardInfo = () => {

  const { steps } = useStore();

  return (
    <>
      <div className='card__info'>
        <span className='mts'>44m2</span>
        <span className='amb'>2 amb.</span>
        <span className='dorm'>1 dorm.</span>
        <span className='bano'>1 baño</span>
        <span className='coch'>1 coch.</span>
      </div>
      <div className='card__info--expensas'>
        <span className='valor'>
          <span className='peso'>$</span> 20.000 Expensas
        </span>
      </div>
      <CardInfoDetalle />
    </>
  )
}

export default CardInfo