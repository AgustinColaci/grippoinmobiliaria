'use client'
import useStore from '@/store/useStore';
import Link from 'next/link';
import React from 'react'

const CardButtons = () => {

    const { steps } = useStore();

    return (
        <div className='card__buttons'>
            <div className='card__buttons--wsp'>
                <a href="https://wa.link/q4e8za">
                    <span className='text'>Contactanos por WhatsApp</span>
                </a>
            </div>
            <div className='card__buttons--verMas'>
                <Link className="button button--verMas" href="/detalle">Ver más</Link>
            </div>
        </div>
    )
}

export default CardButtons