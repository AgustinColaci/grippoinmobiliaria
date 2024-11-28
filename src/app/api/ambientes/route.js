import { auth, firestore } from "@/lib/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function GET(request) {

    const docsSnap = await getDocs(collection(firestore, "Ambientes"));
    let operationTypes = []

    docsSnap.forEach((doc) => {
        operationTypes.push(doc.data())
    })

    return new Response(JSON.stringify({ message: `Ambientes`, data: operationTypes }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });

}
