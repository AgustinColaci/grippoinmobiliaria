export async function GET(request) {
    // Lógica para manejar GET
    return new Response(JSON.stringify({ message: 'Lista de propiedades' }), {
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


