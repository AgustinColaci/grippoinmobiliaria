export async function GET(request, { params }) {
    const { id } = params;
    // Lógica para manejar GET por ID
    // Aca tendriamos que recuperar la propiedad de la base de datos
    ///
    return new Response(JSON.stringify({ message: `propiedad con ID ${id}` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function PUT(request, { params }) {
    const { id } = params;
    const body = await request.json();
    // Lógica para actualizar un propiedad
    // Ejemplo: actualizar la propiedad con el ID dado usando los datos en `body`
    ///
    return new Response(JSON.stringify({ message: `propiedad con ID ${id} actualizado`, updatedProperty: body }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    // Lógica para eliminar una propiedad
    // codigo para eliminar la propiedad de la base de datos
    ///
    return new Response(JSON.stringify({ message: `propiedad con ID ${id} eliminado` }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
        },
    });
}