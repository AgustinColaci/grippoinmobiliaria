'use server'

import ListProperties from "@/components/ListProperties";

const ListaDePropiedades = async () => {

  try {
    const urlentorno = process.env.NEXT_URL_ENTORNO
    const properties = await fetch(`${urlentorno}/api/propiedades`, {
      method: 'GET',
    }).then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });

    console.log(properties)

    return (
      <ListProperties properties={properties.data} />
    )

  } catch (error) {
    console.error('Error fetching properties:', error);
  }


}

export default ListaDePropiedades