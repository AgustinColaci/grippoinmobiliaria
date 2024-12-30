'use server'

import FilteredProperties from "@/components/FilteredProperties"
import Filters from "@/components/Filters"
import { redirect } from "next/navigation"

// localhost:3000/propiedades

const Propiedades = async () => {

      redirect('/')
  
  return (
    <div className="container__filtered-properties">
    </div>
  )
}

export default Propiedades