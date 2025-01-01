import BannerDetalle from '@/components/BannerDetalle';
import useStore from '@/store/useStore';
import { useEffect, useState } from 'react';
import '../css/loader.css'
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"
import { revalidatePath } from 'next/cache';
import { crearNuevaPropiedad, editExistingProperty } from '@/actions/propiedades';
import { deleteImagesFromFirebase, sendImageToFirebase } from '@/actions/images';

const StepThree = () => {

  const { substractStep, property, steps, setSteps, imagesForUpload, imagesForDelete, setImagesForUpload, setImagesForDelete } = useStore();
  const [loading, setLoading] = useState(false);
  const router = useRouter()

  const handleSubmitProperty = async () => {
    setLoading(true);
    let isEditing = true
    delete property.files

    console.log(property.id)

    if (!property.id) {
      property.id = Date.now();
      isEditing = false
    }
    let uploadedImages

    const resultadoSinUpload = property.fotos.filter(item => !imagesForUpload.includes(item));
    const resultadoSinDelete = resultadoSinUpload.filter(item => !imagesForDelete.includes(item))



    if (imagesForUpload.length > 0) {
      // property.fotos.push(...await uploadPhotos(imagesForUpload))
      uploadedImages = await uploadPhotos(imagesForUpload)
      property.fotos = [...resultadoSinDelete, ...uploadedImages]
    }

    if (imagesForDelete.length > 0) {
      //ELIMINAR LAS FOTOS
      for (let img of imagesForDelete) {
        const response = await deleteImagesFromFirebase(img.name)
        console.log(response)
      }
    }

    if (isEditing) {
      try {

        const response = await editExistingProperty(property)

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
          // setSteps(1)
          router.push('/autogestion/lista-de-propiedades')
          setLoading(false);
        }



      } catch (error) {
        console.log(error);
        setLoading(false);
      }

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
          // setSteps(1)
          router.push('/autogestion/lista-de-propiedades')
          setLoading(false);
        }



      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

  };

  useEffect(() => {
    console.log(imagesForDelete)
    console.log(imagesForUpload)
  }
    , [])


  const uploadPhotos = async (files) => {
    if (!files) return
    const fotos = []

    for (let file of files) {

      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await sendImageToFirebase(formData, property.direccion)

        if (response.ok) {
          fotos.push({ url: response.url, name: response.name })
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