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



export const getSimilarProperties = async (zona, operacion) => {
  const response = await fetch(`${urlentorno}/api/propiedades/similar?zona=${encodeURIComponent(zona)}&operacion=${encodeURIComponent(operacion)}`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  return response
}