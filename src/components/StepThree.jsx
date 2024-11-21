import BannerDetalle from '@/components/BannerDetalle';
import useStore from '@/store/useStore';
import { useEffect, useState } from 'react';
import '../css/loader.css'

const StepThree = () => {

  const { substractStep, property, steps, setProperty, addStep } = useStore();
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(false)
  }, [])


  const handleSubmitProperty = async () => {

    setLoading(true)

    property.id = Date.now()

    const formData = new FormData()
    formData.append('propiedad', JSON.stringify(property))

    
    const responsePhotos = await uploadPhotos(property.files)

    console.log(responsePhotos, 'esta es la response amiguito')
    // if(responsePhotos){
    //   property.fotos = responsePhotos
    // }

    delete property.files
    console.log(property, 'AMIGO, ESTA ES LA PROPERTY WACHIN')

    try {
      const response = await fetch('/api/propiedades', {
        method: 'POST',
        body: formData,
      })

      if (response.status == 201) {
        console.log('propiedad creada')
        setLoading(false)

        //lo retornaria a la lista de propiedades


      } else {
        console.log('hubo un error')
        console.log(response)
        setLoading(false)

      }

    } catch (error) {
      console.log(error)
      setLoading(false)
    }


  }

  const uploadPhotos = async (files) => {
    if(!files) return
    const fotos = []

    for (let file of files) {
      const formData = new FormData();
      formData.append("file", file);
      try {
        const response = await fetch(`/api/imagenes`, {
          method: "POST",
          body: formData,
        });


        if (response.ok) {
          const data = await response.json();
          console.log(data)
          console.log("URL de la imagen subida:", data.url);
          fotos.push({ url: data.url, name: file.name })
          property.fotos.push({ url: data.url, name: file.name })
        } else {
          console.error("Error al subir la imagen");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }

    return fotos

  }

  return (
    <>
      {loading && <div className='loading'>
        <p>Guardando propiedad</p>
        <div className="loader"></div>
      </div>}
      <BannerDetalle />
      <div className="button--bar">
        <button disabled={steps === 1} type="button" className="button button--previous" onClick={() => { substractStep() }}>Volver al paso anterior</button>
        <button type="button" className="button button--next" onClick={() => { handleSubmitProperty() }}>Confirmar propiedad</button>
      </div>
    </>
  )
}

export default StepThree