import { auth, firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {

    const docsSnap = await getDocs(collection(firestore, "Monedas"));
    let operationTypes = []

    docsSnap.forEach((doc) => {
        operationTypes.push(doc.data())
    })

    return new Response(JSON.stringify({ message: `monedas`, data: operationTypes }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}
