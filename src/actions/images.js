'use server'

const urlentorno = process.env.URL_ENTORNO

export const sendImageToFirebase = async (file) => {

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch(`${urlentorno}/api/imagenes`, {
            method: "POST",
            body: formData,
        });


        if (response.ok) {
            const data = await response.json();
            console.log("URL de la imagen subida:", data.url);
            return data
            // setFotos((prevFotos) => [...prevFotos, { url: data.url, name: file.name }]);
        } else {
            console.error("Error al subir la imagen");
        }
    } catch (error) {
        console.error("Error:", error);
        return error
    }
}


export const deleteImagesFromFirebase = async (nameFile) => {
    try {
        const response = await fetch(`${urlentorno}/api/imagenes/${nameFile}`, {
            method: 'DELETE'
        })


        if (response.ok) {
            const data = await response.json()
            return data
        } else {
            console.error("Error al eliminar la imagen")
        }

    } catch (error) {
        console.error("Error:", error);
        return error
    }
}


export const deleteAllImages = async (files) => {
    for(let element of files){
        const response = await deleteImagesFromFirebase(element.name)
    }

    return {message:'OK'}
}