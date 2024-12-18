'use server'

import { revalidatePath } from "next/cache";

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


export const crearNuevaPropiedad = async(propiedad) => {

  const formData = new FormData();
  formData.append("propiedad", JSON.stringify(propiedad));
  
  const response = await fetch(`${urlentorno}/api/propiedades`, {
    method: "POST",
    body: formData,
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });
  
  revalidatePath('/autogestion/lista-de-propiedades')
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


export const getPropertyById = async (id) => {
  const response = await fetch(`${urlentorno}/api/propiedades/${id}`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });

  return response
}

export const deleteProperty = async(id) => {
  const response = await fetch(`${urlentorno}/api/propiedades/${id}`, {
    method: 'DELETE',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });
  revalidatePath('/autogestion/lista-de-propiedades')
  return response
}