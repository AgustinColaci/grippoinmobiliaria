'use client'

import useStore from "@/store/useStore"
import { useEffect, useState } from "react"
import Loader from "./Loader";

const FilteredProperties = () => {
    
    const [loading, isLoading] = useState(true);
    const { filteredProperties, similarProperties, properties } = useStore()

    useEffect(() => {
        console.log(filteredProperties)
        console.log(properties)
    })

    return (
        <div>
            <p>LISTADO DE PROPIEDADES FILTRADAS</p>
            <p>LISTADO DE PROPIEDADES SIMILARES A TU BÚSQUEDA</p>
        </div>
    )
}

export default FilteredProperties