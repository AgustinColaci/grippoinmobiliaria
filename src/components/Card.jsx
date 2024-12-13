'use client'
import React, { useState } from 'react'
import CardSlider from "./CardSlider";
import CardInfo from "./CardInfo";
import CardButtons from "./CardButtons";
import '../css/loader.css'


const Card = ({propiedad}) => {

  return (
    <div className='Card'>
      <CardSlider 
      codigo={propiedad.codigo}
      images={propiedad.fotos}
      createURL={false}
      />

      <CardInfo 
      banos={propiedad.banos} 
      ambientes={propiedad.ambientes}
      mts={propiedad.m2total}
      dormitorios={propiedad.dormitorios}
      cocheras={propiedad.cocheras}
      tieneCochera={propiedad.tieneCochera}
      pagaExpensas={propiedad.pagaExpensas}
      precioExpensas={propiedad.precioExpensas}
      precioExpensasValor={propiedad.precioExpensasValor}
      urlMaps={propiedad.urlMaps}
      precioInmuebleValor={propiedad.precioInmuebleValor}
      precioInmueble={propiedad.precioInmueble}
      direccion={propiedad.direccion}
      />

      <CardButtons id={propiedad.id} />
    </div>
  )
}

export default Card