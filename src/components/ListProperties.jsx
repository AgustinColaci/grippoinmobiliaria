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
                return <div key={propiedad.id || index}>
                    <p>{propiedad.direccion || propiedad.Direccion}</p>
                    <button onClick={(() => handleEdit(propiedad.id))}>Editar</button>
                </div>
            })}


            <Link href={'/autogestion'}>Volver al menu</Link>
        </div>
    )
}

export default ListProperties