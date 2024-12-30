
export const filtrarPropiedades = (propiedades, criterios, orden) => {
    const filtradas = propiedades.filter(el => {
        const matchOperation = !criterios.tipoOperacion || el.tipoOperacion.toLowerCase().includes(criterios.tipoOperacion.toLowerCase());
        const matchInmueble = !criterios.tipoInmueble || el.tipoInmueble.toLowerCase().includes(criterios.tipoInmueble.toLowerCase());
        const matchMoneda = !criterios.precioInmueble || el.precioInmueble.toLowerCase().includes(criterios.precioInmueble.toLowerCase());
        const matchZona = !criterios.zona || el.zona.toLowerCase().includes(criterios.zona.toLowerCase());
        const matchAmbientes = !criterios.ambientes || el.ambientes.toLowerCase().includes(criterios.ambientes.toLowerCase());

        return matchOperation && matchInmueble && matchMoneda && matchZona && matchAmbientes;
    });

    // Ordenar según la variable "orden"
    if (orden == 'valor-min') {
        console.log('acaaaa')
        filtradas.sort((a, b) => Number(a.precioInmuebleValor) - Number(b.precioInmuebleValor)); // Reemplaza 'precio' con la propiedad que quieras ordenar
    } else if (orden === 'valor-max') {
        filtradas.sort((a, b) => Number(b.precioInmuebleValor) - Number(a.precioInmuebleValor)); // Reemplaza 'precio' con la propiedad que quieras ordenar
    }

    return filtradas;
};


export const filtrarPropiedadesSimilares = (propiedades, criterios) => {

    const matches = propiedades.filter(el => {
        const matchOperation = el.tipoOperacion.toLowerCase().includes(criterios.tipoOperacion.toLowerCase());
        const matchInmueble = el.tipoInmueble.toLowerCase().includes(criterios.tipoInmueble.toLowerCase());
        const matchMoneda = el.precioInmueble.toLowerCase().includes(criterios.precioInmueble.toLowerCase())
        const matchZona = el.zona.toLowerCase().includes(criterios.zona.toLowerCase())
        const matchAmbientes = el.ambientes.toLowerCase().includes(criterios.ambientes.toLowerCase())

        // return matchOperation || matchInmueble || matchMoneda || matchZona || matchAmbientes
        //HAY QUE VER QUE CRITERIOS USAMOS PARA RELACIONAR PROPIEDADES
        return matchOperation && (matchInmueble || matchMoneda || matchZona || matchAmbientes)

    })

    return matches

};