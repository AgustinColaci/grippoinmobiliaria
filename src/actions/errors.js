export const handleErrorsFromStep1 = (propiedad) => {

    const errors = {}

    Object.keys(propiedad).forEach((key) => {

        //SOLO ENTRARIA EN EL CASO DE LAS FOTOS

        if (key === 'precioExpensas' || key === 'precioExpensasValor') {
            if (propiedad.pagaExpensas) {
                if (propiedad[key] === '') {
                    return errors[key] = true
                } else {
                    return errors[key] = false
                }
            } else {
                return errors[key] = false
            }
        }

        if (key === 'fotos') {
            if (propiedad[key].length == 1) {
                return errors[key] = true
            } else {
                return errors[key] = false
            }
        }

        if (propiedad[key] === '') {
            errors[key] = true
        } else {
            errors[key] = false
        }

    })
    return errors
}


export const handleErrorsFromStep2 = (propiedad) => {
    const errors = {}

    Object.keys(propiedad).forEach((key) => {


        if(key === 'cantidadCochera'){
            if(propiedad.tieneCochera){
                if(propiedad[key] === ''){
                    return errors[key] = true
                }else{
                    return errors[key] = false
                }
            }else {
                return errors[key] = false
            }
        }

        if (propiedad[key] === '') {
            errors[key] = true
        } else {
            errors[key] = false
        }
    })

    return errors
}