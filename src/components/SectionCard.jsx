'use client'
import React, { useEffect, useState } from 'react'
import Card from "./Card";
import useStore from '@/store/useStore';

const SectionCard = ({ properties }) => {

  const [propertiesForSale, setPropertiesForSale] = useState()
  const [propertiesForRent, setPorpertiesForRent] = useState()
  const [loading, setLoading] = useState(true)
  const { setProperties, filteredProperties, similarProperties, setFilteredProperties, filters, setFilters } = useStore()

  useEffect(() => {


    if (properties.length > 0) {
      setProperties(properties)
      setPropertiesForSale(properties.filter((prop) => prop.tipoOperacion?.toLowerCase() === 'venta'))
      setPorpertiesForRent(properties.filter((prop) => prop.tipoOperacion?.toLowerCase() === 'alquiler'))
      setLoading(false)
    }
  }, [])


  const handleResetFilters = () => {
    setFilteredProperties(null)
    setFilters(null)
  }

  return (
    <>
      {loading && <div className='loading'>
        <p>Cargando...</p>
        <div className="loader"></div>
      </div>}
      {
        filteredProperties ?

          filteredProperties.length > 0 ?
            <>

              {/* <h2 className="title--2"></h2> */}
              <h3 className="title--3">Se encontraron {filteredProperties.length} resultado(s) a tu búsqueda</h3>
              <section className="section__cards">
                {filteredProperties.map((el) => {
                  return <Card key={el.id} propiedad={el} />

                })}
              </section>
            </>
            :
            <>
              <h3 className="title--3">No hay resultados para tu búsqueda</h3>
              <h3 className="title--3"></h3>
              <section className="section__cards">
                <button className="button button--resetear" onClick={() => handleResetFilters()}>Resetear búsqueda</button>
                {/* {filteredProperties.map((el) => {
                  return <Card key={el.id} propiedad={el} />

                })} */}
              </section>
            </>
          :
          <>

            <h2 className="title--2">Agregados recientemente</h2>
            <h3 className="title--3">Venta</h3>
            <section className="section__cards">
              {
                propertiesForSale?.length > 0 ?
                  propertiesForSale?.map((el) => {
                    return <Card key={el.id} propiedad={el} />
                  })
                  :
                  <p>No hay propiedades disponibles</p>
              }

            </section>

            <h3 className="title--3">Alquiler</h3>
            <section className="section__cards">
              {
                propertiesForRent?.length > 0 ?
                  propertiesForRent?.map((el) => {
                    return <Card key={el.id} propiedad={el} />
                  })
                  :
                  <p>No hay propiedades disponibles</p>
              }
            </section>
          </>
      }
    </>
  )
}

export default SectionCard