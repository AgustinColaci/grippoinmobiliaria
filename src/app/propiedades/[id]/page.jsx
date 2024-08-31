'use server'
// localhost:3000/propiedades/ID

const PropiedadesPorId = ({params}) => {

    const {id} = params

  return (
    <div>Detalle de la propiedad {id}</div>
  )
}

export default PropiedadesPorId