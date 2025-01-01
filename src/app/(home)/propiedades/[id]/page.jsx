'use server'

import { getPropertyById, getSimilarProperties } from "@/actions/propiedades"
import BannerDetalle from "@/components/BannerDetalle"
import Link from "next/link"

// localhost:3000/propiedades/ID

const PropiedadesPorId = async ({ params }) => {

  const { id } = params
  const urlentorno = process.env.NEXT_URL_ENTORNO

  const property = await getPropertyById(id)

  const similarProperties = await getSimilarProperties(property.data.zona, property.data.tipoOperacion, property.data.id || 0)

  return (
    <>
    {/* // <div>Detalle de la propiedad {id}</div> */}
      <div className='volver'>
        <Link className="link" href="/">Volver a la búsqueda</Link>
      </div>
      <BannerDetalle isCreating={false} propiedad={property} propiedadesSimilares={similarProperties} />
    </>
  )
}

export default PropiedadesPorId