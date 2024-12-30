import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";
import { NextResponse } from "next/server";
import { firestore, storage } from "@/lib/firebase";

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

export async function POST(request) {


    try {

        // Convertimos el body del request en un Blob para acceder al archivo
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Configuramos la referencia y subimos el archivo
        const storageRef = ref(storage, `Propiedades/${formatImageNameForURL(file.name)}`);
        await uploadBytes(storageRef, file);

        // Obtenemos la URL de descarga para almacenar o mostrar la imagen
        const url = await getDownloadURL(storageRef);
        return NextResponse.json({ url, name:formatImageNameForURL(file.name) });
    } catch (error) {
        console.error("Error al subir el archivo:", error.message);
        return NextResponse.json({ error: "Error uploading file" }, { status: 500 });
    }
}

