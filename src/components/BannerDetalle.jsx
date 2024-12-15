'use client'
import useStore from '@/store/useStore';
import DetallePropiedad from '@/components/DetallePropiedad';
import CardSlider from '@/components/CardSlider';
import CardInfoDetalle from '@/components/CardInfoDetalle';
import CardButtons from '@/components/CardButtons';
import React, { useEffect, useState } from 'react'
import { filtrarPropiedadesSimilares } from '@/actions/filtros';
import { getAllProperties } from '@/actions/propiedades';

const BannerDetalle = ({ isCreating, propiedad, propiedadesSimilares }) => {

    const { steps, property, setProperty, setSimilarProperties, properties, similarProperties, setProperties } = useStore();
    const [loading, setLoading] = useState(true)

    const [filePhotos, setfilePhotos] = useState()


    useEffect(() => {

        if(isCreating){
            setfilePhotos(property.files)
        }else{
            setProperty(propiedad.data)
            setLoading(false)
            setfilePhotos(propiedad.data.fotos)
            setSimilarProperties(propiedadesSimilares)
        }
    }, [])

    // useEffect(() => {

    //     const functionForGetProperties = async () => {
    //         const p = await getAllProperties()
    //         setProperties(p.data)
    //     }

    //     if (isCreating) {
    //         setfilePhotos(property.files)
    //     } else {
    //         setProperty(propiedad.data)
    //     }

    //     if(properties.length == 0){
    //         functionForGetProperties()
    //     }
    // }, [])

    // useEffect(() => {

    //     if (property.codigo !== '') {
    //         setLoading(false)
    //         if (properties.length > 0) {
    //             const propiedadesSimilares = filtrarPropiedadesSimilares(properties, {
    //                 tipoOperacion: property.tipoOperacion,
    //                 tipoInmueble: property.tipoInmueble,
    //                 precioInmueble: property.precioInmueble,
    //                 ambientes: property.ambientes,
    //                 zona: property.zona
    //             })
    //             setSimilarProperties(propiedadesSimilares)
    //         }
    //     }

    //     if (!isCreating) {
    //         setfilePhotos(property.fotos)
    //     }

    // }, [property])


    // useEffect(() => {
    //     if(property){

    //         const propiedadesSimilares = filtrarPropiedadesSimilares(properties, {
    //             tipoOperacion: property.tipoOperacion,
    //             tipoInmueble: property.tipoInmueble,
    //             precioInmueble: property.precioInmueble,
    //             ambientes: property.ambientes,
    //             zona: property.zona
    //         })
    //         setSimilarProperties(propiedadesSimilares)
    //     }
    // }, [properties])




    return (
        <>

            {loading && <div className='loading'>
                <p>Cargando...</p>
                <div className="loader"></div>
            </div>}

            <section className='banner__detalle flex'>
                <div className='Card__detalle'>
                    <CardSlider codigo={property?.codigo} images={filePhotos} createURL={isCreating} />
                </div>
                <div className='info__detalle'>
                    <CardInfoDetalle urlMaps={property.urlMaps} direccion={property.direccion} precioMoneda={property.precioInmueble} precioValor={property.precioInmuebleValor} />
                    <div className="google-maps">
                        <iframe className='maps' src={property?.linkMaps} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
            <section className='contacto__detalle'>
                <CardButtons id={property.id} />
            </section>
            <section>
                <DetallePropiedad id={property.id} />
            </section>


        </>
    )
}

export default BannerDetalle