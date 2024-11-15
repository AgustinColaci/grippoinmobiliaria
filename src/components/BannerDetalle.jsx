'use client'
import useStore from '@/store/useStore';
import DetallePropiedad from '@/components/DetallePropiedad';
import CardSlider from '@/components/CardSlider';
import CardInfoDetalle from '@/components/CardInfoDetalle';
import CardButtons from '@/components/CardButtons';
import React from 'react'

const BannerDetalle = () => {

    const { steps, property } = useStore();




    return (
        <>
            <section className='banner__detalle flex'>
                <div className='Card__detalle'>
                    <CardSlider codigo={property?.codigo} images={property?.fotos} />
                </div>
                <div>
                    <CardInfoDetalle urlMaps={property.urlMaps} direccion={property.direccion} precioMoneda={property.precioInmueble} precioValor={property.precioInmuebleValor} />
                    <div className="google-maps">
                        <iframe className='maps' src={property?.linkMaps} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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