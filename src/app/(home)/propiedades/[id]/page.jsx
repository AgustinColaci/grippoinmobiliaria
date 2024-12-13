'use server'

import { getSimilarProperties } from "@/actions/propiedades"
import BannerDetalle from "@/components/BannerDetalle"
import Link from "next/link"

// localhost:3000/propiedades/ID

const PropiedadesPorId = async ({ params }) => {

  const { id } = params
  const urlentorno = process.env.NEXT_URL_ENTORNO

  const property = await fetch(`${urlentorno}/api/propiedades/${id}`).then((res) => res.json() )

  const similarProperties = await getSimilarProperties(property.data.zona, property.data.tipoOperacion)

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