import { auth, firestore } from "@/lib/firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import admin from "firebase-admin";
import { signInWithEmailAndPassword } from "firebase/auth";



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

    const formData = await request.formData(); // Usa await aquí
    const propiedad = JSON.parse(formData.get('propiedad')); // Extrae los datos específicos

    if(!auth.currentUser){
        const email = process.env.FIREBASE_ADMIN_EMAIL
        const password = process.env.FIREBASE_ADMIN_PASSWORD

        console.log('se inicio sesion en este usuario:', email)
        await signInWithEmailAndPassword(auth, email, password)
    }


    try{
        const snap = await setDoc(doc(firestore, 'Propiedades', JSON.stringify(propiedad.id)), propiedad)
        return new Response(JSON.stringify({ message: 'propiedad creada'}), {
            status: 201,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }catch(error){
        console.log(error)
        return new Response(JSON.stringify({ message: 'error creando la propiedad'}), {
            status: 400,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }


}


