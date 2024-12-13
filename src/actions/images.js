const sendImageToFirebase = async (file) => {

    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await fetch(`/api/imagenes`, {
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