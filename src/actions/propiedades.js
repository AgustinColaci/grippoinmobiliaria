'use server'
const urlentorno = process.env.URL_ENTORNO


export const getAllProperties = async () => {
    const response = await fetch(`${urlentorno}/api/propiedades`, {
        method: 'GET',
      }).then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      });

      return response
}



export const getSimilarProperties = async (zona, operacion, id) => {
  const response = await fetch(`${urlentorno}/api/propiedades/similar?zona=${encodeURIComponent(zona)}&operacion=${encodeURIComponent(operacion)}&id=${encodeURIComponent(id)}`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  return response
}