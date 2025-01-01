'use server'

import { storage } from "@/lib/firebase";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";

const urlentorno = process.env.URL_ENTORNO

function formatImageNameForURL(imageName) {
    // Reemplazos para caracteres con tildes o acentos
    const accentsMap = {
        'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
        'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
        'ñ': 'n', 'Ñ': 'N', 'ü': 'u', 'Ü': 'U'
    };

    const cleanName = imageName
        .toLowerCase() // Convertir a minúsculas
        .split('') // Dividir en caracteres individuales
        .map(char => accentsMap[char] || char) // Reemplazar caracteres con tilde
        .join('') // Volver a unir los caracteres
        .replace(/[^a-z0-9]+/g, '-') // Reemplazar cualquier carácter no válido con guiones
        .replace(/^-+|-+$/g, ''); // Eliminar guiones al principio o final

    return cleanName;
}


export const sendImageToFirebase = async (formData, id) => {

    const bytesFile = formData.get('file');

    if (!bytesFile) {
        // return throw{ error: "No file provided" }
        return new Error("No file provided")
    }

    // Configuramos la referencia y subimos el archivo
    const storageRef = ref(storage, `Propiedades/${formatImageNameForURL(`${bytesFile.name}-${id}`)}`);
    await uploadBytes(storageRef, bytesFile);

    const url = await getDownloadURL(storageRef);
    return { ok:true, url, name: formatImageNameForURL(`${bytesFile.name}-${id}`) }
}

export const deleteImagesFromFirebase = async (nameFile) => {
    try {
        const storageRef = ref(storage, `Propiedades/${nameFile}`);
        await deleteObject(storageRef);
        return { message: 'OK' };
    } catch (error) {
        // Manejar el error si el archivo no existe
        console.error(`Error al eliminar la imagen ${nameFile}:`, error.message);
        return { message: 'File not found or already deleted' };
    }
};

export const deleteAllImages = async (files) => {
    for (let element of files) {
        try {
            const storageRef = ref(storage, `Propiedades/${element.name}`);
            await deleteObject(storageRef);
        } catch (error) {
            // Manejar el error si el archivo no existe
            console.error(`Error al eliminar la imagen ${element.name}:`, error.message);
            continue; // Continuar con la siguiente imagen
        }
    }
    return { message: 'OK' };
};