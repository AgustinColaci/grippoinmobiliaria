'use server'

import { auth, firestore } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";
import { revalidatePath } from "next/cache";

const urlentorno = process.env.URL_ENTORNO

export const getAllProperties = async () => {

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  const docsSnap = await getDocs(collection(firestore, "Propiedades"));
  let properties = []

  docsSnap.forEach((doc) => {
    properties.push(doc.data())
  })
  return properties
}



export const crearNuevaPropiedad = async (propiedad) => {

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  try {
    const snap = await setDoc(doc(firestore, 'Propiedades', JSON.stringify(propiedad.id)), propiedad)
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')
    return { message: 'propiedad creada' }

  } catch (error) {
    console.error(error)
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')
    return { error: 'error al crear la propiedad' }
  }
}


export const getSimilarProperties = async (zona, operacion, id) => {

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  const propiedadesRef = collection(firestore, "Propiedades");
  const q = query(
    propiedadesRef,
    where("zona", "==", zona),
    where("tipoOperacion", "==", operacion)
  );

  const querySnapshot = await getDocs(q);
  const resultados = [];
  querySnapshot.forEach((doc) => {
    if (Number(doc.id) !== Number(id)) {
      resultados.push({ id: doc.id, ...doc.data() });
    }
  });
  revalidatePath('/autogestion/lista-de-propiedades')
  revalidatePath('/')


  return resultados

}


export const getPropertyById = async (id) => {

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  const docRef = doc(firestore, 'Propiedades', id);
  const docSnap = await getDoc(docRef)
  if (docSnap.exists()) {
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')

    return { message: `propiedad con ID ${id}`, data: docSnap.data() }
  } else {
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')

    return { error: `propiedad con ID ${id} no encontrada` }
  }
}

export const deleteProperty = async (id) => {

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  const docRef = doc(firestore, 'Propiedades', JSON.stringify(id));
  try {
    const response = await deleteDoc(docRef)
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')


    return { message: `propiedad con ID ${id} eliminado` }

  } catch (error) {
    console.log("No such document!");
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')

    return { error: `propiedad con ID ${id} no encontrada` }
  }

}


export const editExistingProperty = async (propiedad) => {

  if (!propiedad || !propiedad.id) {
    return { error: 'Propiedad inválida o ID no proporcionado' };
  }

  if(!auth.currentUser){
    const email = process.env.FIREBASE_ADMIN_EMAIL
    const password = process.env.FIREBASE_ADMIN_PASSWORD

    console.log('se inicio sesion en este usuario:', email)
    await signInWithEmailAndPassword(auth, email, password)
}

  try {
    const snap = await updateDoc(doc(firestore, 'Propiedades', JSON.stringify(propiedad.id)), propiedad)
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')


    return { message: 'propiedad editada'}
  } catch (error) {
    console.log(error)
    revalidatePath('/autogestion/lista-de-propiedades')
    revalidatePath('/')


    return { message: 'error editando la propiedad'}
  }


}