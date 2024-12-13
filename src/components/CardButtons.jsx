'use client'
import useStore from '@/store/useStore';
import Link from 'next/link';
import React from 'react'

const CardButtons = ({id}) => {

    const { steps } = useStore();

    return (
        <div className='card__buttons'>
            <a className="wsp--link" target='_blank' href="https://wa.link/q4e8za">
                <div className='card__buttons--wsp'>
                    <span className='text'>Contactanos por WhatsApp</span>
                </div>
            </a>
            <div className='card__buttons--verMas'>
                <Link className="button button--verMas" href={`propiedades/${id}`}>Ver más</Link>
            </div>
        </div>
    )
}

export default CardButtons