'use client'
import useStore from '@/store/useStore';
import React from 'react'

const BannerAutogestion = () => {

    const { steps } = useStore();

    return (
        <section className='banner__autogestion'>
            <div className="banner__content">
                <div className='banner__text'>
                    <h1 className='title'>Subir propiedad - Paso {steps} de 3</h1>
                    <p className='paragraph'>Completá todos los campos del formulario para poder continuar.</p>
                </div>
                <div className='banner__button'>
                    <a className="button button--delete" href="#">Eliminar propiedad</a>
                </div>
            </div>
        </section>
    )
}

export default BannerAutogestion