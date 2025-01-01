import { getAmbientes } from '@/actions/ambientes'
import { getInmuebles } from '@/actions/inmuebles'
import { getMonedas } from '@/actions/monedas'
import { getOperaciones } from '@/actions/tipoOperacion'
import { getZonas } from '@/actions/zonas'
import BannerAutogestion from '@/components/BannerAutogestion'
import ContainerForm from '@/components/ContainerForm'
import React from 'react'

const NuevaPropiedad = async () => {

  const urlentorno = process.env.NEXT_URL_ENTORNO

  const tiposDeOperacion = await getOperaciones()


  const inmuebles = await getInmuebles()

  const cantAmbientes = await getAmbientes();

  const monedas = await getMonedas()

  const zonas = await getZonas()

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