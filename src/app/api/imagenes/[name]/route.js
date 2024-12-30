import { storage } from "@/lib/firebase";
import { deleteObject, ref } from "firebase/storage";

export async function DELETE(request, {params}){
    const { name } = params;

    try{

        console.log(name, `Propiedades/${name}`)
        const storageRef = ref(storage, `Propiedades/${name}`);
        await deleteObject(storageRef)
        return new Response(JSON.stringify({ message: `Imagen eliminada` }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch{
        return new Response(JSON.stringify({ error: `Imagen no encontrada` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}

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
