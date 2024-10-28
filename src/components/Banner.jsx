'use client'
import React from 'react'

const Banner = () => {
    return (
        <section className='section__banner'>
            <div className='filtros'>
                <label htmlFor="operacion"></label>
                <select id="operacion">
                    <option value="tipo-de-operacion">Tipo de operación</option>
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                </select>
                <label htmlFor="inmueble"></label>
                <select id="inmueble">
                    <option value="tipo-de-inmueble">Tipo de inmueble</option>
                    <option value="op2">op2</option>
                    <option value="op3">op3</option>
                </select>
                <label htmlFor="ambientes"></label>
                <select id="ambientes">
                    <option value="cantidad-de-ambientes">Cantidad de ambientes</option>
                    <option value="op2">op2</option>
                    <option value="op3">op3</option>
                </select>
                <label htmlFor="valor-min"></label>
                <select id="valor-min">
                    <option value="valor-minimo">Valor mínimo</option>
                    <option value="op2">op2</option>
                    <option value="op3">op3</option>
                </select>
                <label htmlFor="valor-max"></label>
                <select id="valor-max">
                    <option value="valor-maximo">Valor máximo</option>
                    <option value="op2">op2</option>
                    <option value="op3">op3</option>
                </select>
                <label htmlFor="moneda"></label>
                <select id="moneda">
                    <option value="moneda">Moneda</option>
                    <option value="op2">op2</option>
                    <option value="op3">op3</option>
                </select>
                <div className="search--button"></div>
            </div>
        </section>
    )
}

export default Banner