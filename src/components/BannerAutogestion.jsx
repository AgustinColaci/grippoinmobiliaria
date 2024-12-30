'use client'
import { deleteAllImages } from '@/actions/images';
import { deleteProperty } from '@/actions/propiedades';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const BannerAutogestion = ({ isEditing, idProperty }) => {

    const [loading, setLoading] = useState(false)
    const { steps, property } = useStore();
    const router = useRouter()

    const handleDelete = async (id) => {
        setLoading(true)

        const responseImages = await deleteAllImages(property.fotos)
        const response = await deleteProperty(id)

        setLoading(false)
        console.log(response)

        Toastify({
            text: response.message,
            className: "warning",
            gravity: "bottom", // `top` or `bottom`
            style: {
                fontSize: '1.5rem'
            }
        }).showToast()

        router.refresh()
        router.push('/autogestion/lista-de-propiedades')

    }

    return (
        <>
            {loading && <div className='loading'>
                <p>Cargando...</p>
                <div className="loader"></div>
            </div>}
            <section className='banner__autogestion'>
                <div className="banner__content">
                    <div className='banner__text'>
                        {isEditing ?
                            <h1 className='title'>Edita la propiedad - Paso {steps} de 3</h1>
                            :
                            <h1 className='title'>Subir propiedad - Paso {steps} de 3</h1>}
                        <p className='paragraph'>Completá todos los campos del formulario para poder continuar.</p>
                    </div>
                    {
                        isEditing &&
                        <div className='banner__button'>
                            <button className="button button--delete" onClick={() => { handleDelete(idProperty) }}>Eliminar propiedad</button>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}

export default BannerAutogestion