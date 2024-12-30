import { auth, firestore } from "@/lib/firebase";
import { deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { signInWithEmailAndPassword } from "firebase/auth";

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
        return new Response(JSON.stringify({ message: `propiedad con ID ${id}`, data: docSnap.data() }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } else {
        // El documento no existe
        console.log("No such document!");
        return new Response(JSON.stringify({ error: `propiedad con ID ${id} no encontrada` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

}

export async function PUT(request, { params }) {
    // const { id } = params;
    // const body = await request.json();
    // Lógica para actualizar un propiedad
    // Ejemplo: actualizar la propiedad con el ID dado usando los datos en `body`
    ///

    const formData = await request.formData(); // Usa await aquí
    const propiedad = JSON.parse(formData.get('propiedad')); // Extrae los datos específicos

    if (!auth.currentUser) {
        const email = process.env.FIREBASE_ADMIN_EMAIL
        const password = process.env.FIREBASE_ADMIN_PASSWORD

        console.log('se inicio sesion en este usuario:', email)
        await signInWithEmailAndPassword(auth, email, password)
    }

    try {
        const snap = await updateDoc(doc(firestore, 'Propiedades', JSON.stringify(propiedad.id)), propiedad)
        return new Response(JSON.stringify({ message: 'propiedad creada' }), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ message: 'error creando la propiedad' }), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


    // return new Response(JSON.stringify({ message: `propiedad con ID ${id} actualizado`, updatedProperty: body }), {
    //     status: 200,
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    // });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    // Lógica para eliminar una propiedad
    // codigo para eliminar la propiedad de la base de datos
    ///

    if (!auth.currentUser) {
        const email = process.env.FIREBASE_ADMIN_EMAIL
        const password = process.env.FIREBASE_ADMIN_PASSWORD

        console.log('se inicio sesion en este usuario:', email)
        await signInWithEmailAndPassword(auth, email, password)
    }

    console.log(id, '------------ID')
    const docRef = doc(firestore, 'Propiedades', id);

    try {
        const response = await deleteDoc(docRef)
        return new Response(JSON.stringify({ message: `propiedad con ID ${id} eliminado` }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });

    } catch (error) {
        console.log("No such document!");
        return new Response(JSON.stringify({ error: `propiedad con ID ${id} no encontrada` }), {
            status: 404,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


}