'use client'

import Link from "next/link"
import '../css/autogestion.css'

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import useStore from "@/store/useStore"

const ListProperties = ({ properties }) => {

    const router = useRouter()
    const {property, setProperty, clearProperty, setSteps} = useStore()

    const handleEdit = (id) => {
        router.push(`/autogestion/editar-propiedad/${id}`)
    }
    
    useEffect(() => {

        setSteps(1)
        setProperty(null)

        return () => {
            setProperty(null)
        }
    }, [])

    return (
        <div className="properties-main">
            <div className="list-properties">
                {properties?.map((propiedad, index) => {
                    return <div className="list-properties-all" key={propiedad.id || index}>
                        <p className="text--propiedad">{propiedad.direccion || propiedad.Direccion}</p>
                        <button className="button button--editar" onClick={(() => handleEdit(propiedad.id))}>Editar</button>
                    </div>
                })}

                <Link className="volver--menu" href={'/autogestion'}>Volver al menu</Link>
            </div>
        </div>
    )
}

export default ListProperties