'use client'

import Link from "next/link"
import '../css/autogestion.css'

import { useRouter } from "next/navigation"

const ListProperties = ({ properties }) => {

    const router = useRouter()

    const handleEdit = (id) => {
        console.log('Vamos a editar la propiedad: ', id)

        router.push(`/${autogestion}`)
    }

    return (
        <div className="list-properties">
            {properties?.map((propiedad, index) => {
                return <div className="list-properties-all" key={propiedad.id || index}>
                    <p className="text--propiedad">{propiedad.direccion || propiedad.Direccion}</p>
                    <button className="button button--editar" onClick={(() => handleEdit(propiedad.id))}>Editar</button>
                </div>
            })}


            <Link className="volver--menu" href={'/autogestion'}>Volver al menu</Link>
        </div>
    )
}

export default ListProperties