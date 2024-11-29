'use client'
import useStore from '@/store/useStore';
import React, { useState } from 'react'

const Banner = ({ tiposDeOperacion, inmuebles, cantAmbientes, monedas, zonas }) => {

    const [operacion, setOperacion] = useState('Venta');
    const [inmueble, setInmueble] = useState('Casa');
    const [ambientes, setAmbientes] = useState('2 ambientes');
    const [zona, setZona]= useState('');
    const [moneda, setMoneda] = useState('USD');
    const [order, setOrder] = useState('Valor minimo')
    const {properties} = useStore()


    const handleSearch = () => {

        console.log('empeza a buscar makina')
        console.log(properties, 'PRORPS')
        // const filterProperties = properties.filter((p) => {
        //     return p.
        // })

    }

    return (
        <section className='section__banner'>
            <div className='filtros'>
                <label htmlFor="operacion"></label>
                <select onChange={(e)=> setOperacion(e.target.value)} defaultValue={operacion} id="operacion">
                    {
                        tiposDeOperacion?.map((tipo, index) => {
                            return <option key={index} value={tipo.titulo}>{tipo.titulo}</option>
                        })
                    }
                </select>
                <label htmlFor="inmueble"></label>
                <select onChange={(e)=> setInmueble(e.target.value)} defaultValue={inmueble} id="inmueble">
                    {
                        inmuebles.map((inm, index) => {
                            return <option key={index} value={inm.tipo}>{inm.tipo}</option>
                        })
                    }
                </select>
                <label htmlFor="ambientes"></label>
                <select onChange={(e)=> setAmbientes(e.target.value)} defaultValue={ambientes} id="ambientes">
                    {
                        cantAmbientes.map((amb, index) => {
                            return <option key={index} value={amb.tipo}>{amb.tipo}</option>
                        })
                    }
                </select>

                <label htmlFor="zonas"></label>
                <select onChange={(e) => setZona(e.target.value)} defaultValue={zona} id="zonas">
                    {
                        zonas.map((z, i) => {
                            return <option key={i} value={z.titulo}>{z.titulo}</option>
                        })
                    }
                </select>

                <label htmlFor="ordenar"></label>
                <select defaultValue={order} onChange={(e)=> setOrder(e.target.value)} id="ordenar">
                    <option value="ordenar-por">Ordenar por</option>
                    <option value="valor-min">Valor mínimo</option>
                    <option value="valor-max">Valor máximo</option>
                </select>
                <label htmlFor="moneda"></label>
                <select onChange={(e) => setMoneda(e.target.value)} defaultValue={moneda} id="moneda">
                    {monedas.map((mon, index) => {
                        return <option value={mon.display} key={index}>{mon.display}</option>
                    })}
                </select>
                <div onClick={() => handleSearch()} className="search--button"></div>
            </div>
        </section>
    )
}

export default Banner