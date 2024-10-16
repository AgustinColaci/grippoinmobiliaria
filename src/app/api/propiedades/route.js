import { firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";


export async function GET(request) {

    const docsSnap = await getDocs(collection(firestore, "Propiedades"));
    let properties = []

    docsSnap.forEach((doc) => {
        properties.push(doc.data())
    })

    return new Response(JSON.stringify({ message: `propiedades`, data: properties }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}


export async function POST(request) {
    const body = await request.json();
    // Lógica para manejar POST
    return new Response(JSON.stringify({ message: 'propiedad creado', user: body }), {
        status: 201,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}


