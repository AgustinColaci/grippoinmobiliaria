'use server'

import { getAllProperties } from "@/actions/propiedades";
import ListProperties from "@/components/ListProperties";

const ListaDePropiedades = async () => {

  try {
    const properties = await getAllProperties()

    return (
      <ListProperties properties={properties} />
    )

  } catch (error) {
    console.error('Error fetching properties:', error);
  }


}

export default ListaDePropiedades