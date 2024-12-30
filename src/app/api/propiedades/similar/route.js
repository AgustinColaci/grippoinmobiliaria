import { firestore } from "@/lib/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
export const dynamic = 'force-dynamic';
export async function GET(request, { params }) {
    try {
        // Usa request.nextUrl para obtener los parámetros de consulta
        const { searchParams } = request.nextUrl;
        const zona = searchParams.get('zona');
        const operacion = searchParams.get('operacion');
        const id = searchParams.get('id');

        console.log(id);

        if (!zona || !operacion || !id) {
            return new Response(
                JSON.stringify({ error: "Missing required parameters" }),
                { status: 400 }
            );
        }

        // Define la colección y realiza la consulta en Firebase
        const propiedadesRef = collection(firestore, "Propiedades");
        const q = query(
            propiedadesRef,
            where("zona", "==", zona),
            where("tipoOperacion", "==", operacion)
        );

        // Ejecuta la consulta y prepara los resultados
        const querySnapshot = await getDocs(q);
        const resultados = [];
        querySnapshot.forEach((doc) => {
            if (Number(doc.id) !== Number(id)) {
                resultados.push({ id: doc.id, ...doc.data() });
            }
        });

        // Devuelve los resultados al cliente
        return new Response(JSON.stringify(resultados), { status: 200 });
    } catch (error) {
        console.error("Error fetching data from Firebase:", error);
        return new Response(
            JSON.stringify({ error: "Internal Server Error" }),
            { status: 500 }
        );
    }
}
