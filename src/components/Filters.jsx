'use client'

import useStore from "@/store/useStore"

const Filters = () => {

    const {filteredProperties} = useStore()

  return (
    <div>
        <p>ACA IRIAN LOS FILTROS</p>
    </div>
  )
}

export default Filters