import { firestore } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(request, {params}) {


    try {
        const url = new URL(request.url)
        const urlSearchParams = new URLSearchParams(url.searchParams)
        const zona = urlSearchParams.get('zona')
        const operacion = urlSearchParams.get('operacion')
        const id = urlSearchParams.get('id')

        console.log(id)

        if (!zona || !operacion || !id) {
            return new Response(JSON.stringify({ error: "Missing required parameters" }));
        }

        // Define la colección y realiza la consulta en Firebase
        const propiedadesRef = collection(firestore, "Propiedades");
        const q = query(
            propiedadesRef,
            where("zona", "==", zona),
            where("tipoOperacion", "==", operacion),
        );

        // Ejecuta la consulta y prepara los resultados
        const querySnapshot = await getDocs(q);
        const resultados = [];
        querySnapshot.forEach((doc) => {
            if(Number(doc.id) !== Number(id)){
                resultados.push({ id: doc.id, ...doc.data() });
            }
        });

        // Devuelve los resultados al cliente
        return new Response(JSON.stringify(resultados));
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }));
    }

}