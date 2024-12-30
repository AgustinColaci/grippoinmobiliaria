'use server'

import FilteredProperties from "@/components/FilteredProperties"
import Filters from "@/components/Filters"

// localhost:3000/propiedades

const Propiedades = async () => {
  return (
    <div className="container__filtered-properties">
        <Filters />
        <FilteredProperties />
    </div>
  )
}

export default Propiedades