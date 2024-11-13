import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextResponse } from "next/server";
import { firestore, storage } from "@/lib/firebase";

export async function POST(request) {

    console.log('hola llegue')

    try {

        // Convertimos el body del request en un Blob para acceder al archivo
        const formData = await request.formData();
        const file = formData.get("file");

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Configuramos la referencia y subimos el archivo
        const storageRef = ref(storage, `Propiedades/${file.name}`);
        await uploadBytes(storageRef, file);

        // Obtenemos la URL de descarga para almacenar o mostrar la imagen
        const url = await getDownloadURL(storageRef);
        return NextResponse.json({ url });
    } catch (error) {
        console.error("Error al subir el archivo:", error.message);
        return NextResponse.json({ error: "Error uploading file" }, { status: 500 });
    }
}
