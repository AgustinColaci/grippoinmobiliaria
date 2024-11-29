import BannerDetalle from '@/components/BannerDetalle';
import useStore from '@/store/useStore';
import { useEffect, useState } from 'react';
import '../css/loader.css'
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

const StepThree = () => {

  const { substractStep, property, steps } = useStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter()


  useEffect(() => {
    setLoading(false)
  }, [])


  const handleSubmitProperty = async () => {
    setLoading(true);
    let isEditing = true

    if (!property.id) {
      property.id = Date.now();
      isEditing = false
    }


    if (property.files) {
      property.fotos.push(...await uploadPhotos(property.files))
      delete property.files
    }


    const formData = new FormData();
    formData.append("propiedad", JSON.stringify(property));

    if (isEditing) {

    } else {
      try {
        const response = await fetch("/api/propiedades", {
          method: "POST",
          body: formData,
        });

        if (response.status === 201) {
          console.log("Propiedad creada");
          setLoading(false);
          router.push('/autogestion/lista-de-propiedades')
        } else {
          console.log("Hubo un error");
          setLoading(false);
          Toastify({
            text: "Hubo un error",
            className: "warning",
            gravity: "bottom", // `top` or `bottom`
            style: {
              fontSize: '1.5rem'
            }
          }).showToast()
        }
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

  };

  const uploadPhotos = async (files) => {
    if (!files) return
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
          fotos.push({ url: data.url, name: data.name })
          // property.fotos.push({ url: data.url, name: file.name })
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