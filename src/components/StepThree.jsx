import BannerDetalle from '@/components/BannerDetalle';
import useStore from '@/store/useStore';
import { useEffect, useState } from 'react';
import '../css/loader.css'
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { revalidatePath } from 'next/cache';
import { crearNuevaPropiedad } from '@/actions/propiedades';

const StepThree = () => {

  const { substractStep, property, steps, setSteps } = useStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter()


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

      console.log('estamos editando')
      router.push('/autogestion/lista-de-propiedades')

    } else {
      try {

        const response = await crearNuevaPropiedad(property)

        if (response.error) {
          Toastify({
            text: "Hubo un error",
            className: "warning",
            gravity: "bottom", // `top` or `bottom`
            style: {
              fontSize: '1.5rem'
            }
          }).showToast()
          setLoading(false)
          return
        } else {
          setLoading(false);
          setSteps(1)
          router.push('/autogestion/lista-de-propiedades')
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
      <BannerDetalle isCreating={true} />
      <div className="button--bar">
        <button disabled={steps === 1} type="button" className="button button--previous" onClick={() => { substractStep() }}>Volver al paso anterior</button>
        <button type="button" className="button button--next" onClick={() => { handleSubmitProperty() }}>Confirmar propiedad</button>
      </div>
    </>
  )
}

export default StepThree