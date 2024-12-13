import { firestore } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function GET(request, {params}) {

    console.log(request)

    try {
        // Obtén los parámetros desde la query string
        // const { zona, operacion } = request;
        const url = new URL(request.url)
        const urlSearchParams = new URLSearchParams(url.searchParams)
        const zona = urlSearchParams.get('zona')
        const operacion = urlSearchParams.get('operacion')
        console.log(zona, operacion)
        if (!zona || !operacion) {
            return new Response(JSON.stringify({ error: "Missing required parameters" }));
        }

        // Define la colección y realiza la consulta en Firebase
        const propiedadesRef = collection(firestore, "propiedades");
        const q = query(
            propiedadesRef,
            where("zona", "==", zona), // Reemplaza 'campo1' con el nombre del campo en tu colección
            where("tipoOperacion", "==", operacion)  // Reemplaza 'campo2' con el nombre del campo en tu colección
        );

        // Ejecuta la consulta y prepara los resultados
        const querySnapshot = await getDocs(q);
        const resultados = [];
        querySnapshot.forEach((doc) => {
            resultados.push({ id: doc.id, ...doc.data() });
        });

        // Devuelve los resultados al cliente
        return new Response(JSON.stringify(resultados));
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }));
    }

}