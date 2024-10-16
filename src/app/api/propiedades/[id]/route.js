import { firestore } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";


export async function GET(request, { params }) {
    const { id } = params;
    // Lógica para manejar GET por ID
    // Aca tendriamos que recuperar la propiedad de la base de datos
    ///

    const docRef = doc(firestore, 'Propiedades', id);
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        // El documento existe, aquí puedes acceder a los datos
        console.log("Document data:", docSnap.data());
        return new Response(JSON.stringify({ message: `propiedad con ID ${id}`, data:docSnap.data() }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        // El documento no existe
        console.log("No such document!");
        return new Response(JSON.stringify({ error: `propiedad con ID ${id} no encontrada` }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

}

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    // Lógica para actualizar un propiedad
    // Ejemplo: actualizar la propiedad con el ID dado usando los datos en `body`
    ///

    return new Response(JSON.stringify({ message: `propiedad con ID ${id} actualizado`, updatedProperty: body }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    // Lógica para eliminar una propiedad
    // codigo para eliminar la propiedad de la base de datos
    ///
    return new Response(JSON.stringify({ message: `propiedad con ID ${id} eliminado` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}