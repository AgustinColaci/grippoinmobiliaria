'use client'
import { filtrarPropiedades, filtrarPropiedadesSimilares } from '@/actions/filtros';
import useStore from '@/store/useStore';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Banner = ({ tiposDeOperacion, inmuebles, cantAmbientes, monedas, zonas }) => {

    const [operacion, setOperacion] = useState('Venta');
    const [inmueble, setInmueble] = useState('');
    const [ambientes, setAmbientes] = useState('');
    const [zona, setZona]= useState('');
    const [moneda, setMoneda] = useState('');
    const [order, setOrder] = useState('valor-min')
    const {properties, setFilteredProperties, setSimilarProperties, setFilters, filters} = useStore()
    const router = useRouter()


    const handleSearch = () => {
        console.log(order)
        const objFilters = {tipoOperacion:operacion, tipoInmueble:inmueble, ambientes:ambientes, zona, precioInmueble:moneda}
        const filtered = filtrarPropiedades(properties, objFilters, order)
        const similarProperties = filtrarPropiedadesSimilares(properties, objFilters)

        setFilters(objFilters)
        setFilteredProperties(filtered)
        setSimilarProperties(similarProperties)
    }

    useEffect(() => {
        console.log('cambio en filters', filters)
        if(!filters){
            setAmbientes('')
            setZona('')
            setMoneda('')
            setOrder('valor-min')
            setInmueble('')
            setOperacion('Venta')
        }
    }, [filters])



    const ordenarPorPrecio = (propiedades, orden) => {
        return propiedades.sort((a, b) => {
            const precioA = parseFloat(a.precioInmuebleValor);
            const precioB = parseFloat(b.precioInmuebleValor);
            
            if (orden === 'valor-min') {
                return precioA - precioB; // Ascendente: de menor a mayor
            } else if (orden === 'valor-max') {
                return precioB - precioA; // Descendente: de mayor a menor
            }
            return 0; // Si el orden no es válido, no cambia el arreglo
        });
    };

    return (
        <section className='section__banner'>
            <div className='filtros'>
                <label htmlFor="operacion"></label>
                <select onChange={(e)=> setOperacion(e.target.value)} value={operacion} id="operacion">
                    {
                        tiposDeOperacion?.map((tipo, index) => {
                            return <option key={index} value={tipo.titulo}>{tipo.titulo}</option>
                        })
                    }
                </select>
                <label htmlFor="inmueble"></label>
                <select onChange={(e)=> setInmueble(e.target.value)} value={inmueble} id="inmueble">
                    <option value=''>Tipo</option>
                    {
                        inmuebles.map((inm, index) => {
                            return <option key={index} value={inm.tipo}>{inm.tipo}</option>
                        })
                    }
                </select>
                <label htmlFor="ambientes"></label>
                <select onChange={(e)=> setAmbientes(e.target.value)} value={ambientes} id="ambientes">
                    <option value=''>Ambientes</option>
                    {
                        cantAmbientes.map((amb, index) => {
                            return <option key={index} value={amb.value.toString()}>{amb.tipo}</option>
                        })
                    }
                </select>

                <label htmlFor="zonas"></label>
                <select onChange={(e) => setZona(e.target.value)} value={zona} id="zonas">
                    <option value=''>Zona</option>
                    {
                        zonas.map((z, i) => {
                            return <option key={i} value={z.titulo}>{z.titulo}</option>
                        })
                    }
                </select>

                <label htmlFor="ordenar"></label>
                <select value={order} onChange={(e)=> setOrder(e.target.value)} id="ordenar">
                    <option value="ordenar-por">Ordenar por</option>
                    <option value="valor-min">Valor mínimo</option>
                    <option value="valor-max">Valor máximo</option>
                </select>
                <label htmlFor="moneda"></label>
                <select onChange={(e) => setMoneda(e.target.value)} value={moneda} id="moneda">
                    <option value=''>Moneda</option>
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