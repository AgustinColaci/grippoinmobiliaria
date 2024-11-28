import { auth, firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {

    const docsSnap = await getDocs(collection(firestore, "Inmuebles"));
    let operationTypes = []

    docsSnap.forEach((doc) => {
        operationTypes.push(doc.data())
    })

    return new Response(JSON.stringify({ message: `tipos de operacion`, data: operationTypes }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}