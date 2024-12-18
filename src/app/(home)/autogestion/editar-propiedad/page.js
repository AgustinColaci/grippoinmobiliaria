import { redirect } from 'next/navigation'
import React from 'react'

const EditarPropiedad = () => {
    redirect('/autogestion/lista-de-propiedades')
    return (
        <div>Editar propiedad</div>
    )
}

export default EditarPropiedad