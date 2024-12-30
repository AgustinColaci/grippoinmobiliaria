import BannerAutogestion from '@/components/BannerAutogestion'
import ContainerForm from '@/components/ContainerForm'
import React from 'react'

const NuevaPropiedad = async () => {

  const urlentorno = process.env.NEXT_URL_ENTORNO

  const tiposDeOperacion = await fetch(`${urlentorno}/api/tipo-operacion`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });


  const inmuebles = await fetch(`${urlentorno}/api/inmuebles`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  const cantAmbientes = await fetch(`${urlentorno}/api/ambientes`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  const monedas = await fetch(`${urlentorno}/api/monedas`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  const zonas = await fetch(`${urlentorno}/api/zonas`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  return (
    <>
    <BannerAutogestion isEditing={false} idProperty={null}/>
    <ContainerForm
    zonas={zonas}
    tiposDeOperacion={tiposDeOperacion}
    inmuebles={inmuebles}
    cantAmbientes={cantAmbientes}
    monedas={monedas}
    />
    </>
  )
}

export default NuevaPropiedad