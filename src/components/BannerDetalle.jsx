'use client'
import useStore from '@/store/useStore';
import DetallePropiedad from '@/components/DetallePropiedad'
import React from 'react'

const BannerDetalle = () => {

    const { steps } = useStore();

    return (
        <>
            <section className='banner__detalle'>
                ARMAR BANNER, PUEDE SER EL MISMO COMPONENTE QUE "CARDS" ?
            </section>
            <section>
                <DetallePropiedad />
            </section>
        </>
    )
}

export default BannerDetalle