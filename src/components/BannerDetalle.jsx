'use client'
import useStore from '@/store/useStore';
import DetallePropiedad from '@/components/DetallePropiedad';
import CardSlider from '@/components/CardSlider';
import CardInfoDetalle from '@/components/CardInfoDetalle';
import CardButtons from '@/components/CardButtons';
import React from 'react'

const BannerDetalle = () => {

    const { steps } = useStore();

    return (
        <>
            <section className='banner__detalle flex'>
                <div className='Card__detalle'>
                    <CardSlider />
                </div>
                <div>
                    <CardInfoDetalle />
                    <div className="google-maps">
                        <iframe className='maps' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8731958097183!2d-58.60336282353169!3d-34.58207495635691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb90a998a79f5%3A0xff796e0ff1e3bc60!2sGrippo%20Propiedades!5e0!3m2!1ses!2sar!4v1727916179247!5m2!1ses!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <section className='contacto__detalle'>
                <CardButtons />
            </section>
            <section>
                <DetallePropiedad />
            </section>
        </>
    )
}

export default BannerDetalle