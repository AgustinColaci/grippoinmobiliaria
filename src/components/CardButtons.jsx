'use client'
import useStore from '@/store/useStore';
import React from 'react'

const CardButtons = () => {

    const { steps } = useStore();

    return (
        <div className='card__buttons'>
            <div className='card__buttons--wsp'>
                <a href="#">
                    <span className='text'>Contactanos por WhatsApp</span>
                </a>
            </div>
            <div className='card__buttons--verMas'>
                <a className="button button--verMas" href="#">Ver más</a>
            </div>
        </div>
    )
}

export default CardButtons