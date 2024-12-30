import { getPropertyById } from "@/actions/propiedades"
import BannerAutogestion from "@/components/BannerAutogestion"
import ContainerForm from "@/components/ContainerForm"

const EditarPropiedad = async ({ params }) => {

    const { id } = params
    const urlentorno = process.env.NEXT_URL_ENTORNO


    const loadedProperty = await getPropertyById(id)

    const tiposDeOperacion = await fetch(`${urlentorno}/api/tipo-operacion`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });


    const inmuebles = await fetch(`${urlentorno}/api/inmuebles`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });

    const cantAmbientes = await fetch(`${urlentorno}/api/ambientes`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });

    const monedas = await fetch(`${urlentorno}/api/monedas`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });

    const zonas = await fetch(`${urlentorno}/api/zonas`, {
        method: 'GET',
    }).then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });

    return (
        <>
            <BannerAutogestion isEditing={true} idProperty={loadedProperty.data.id} />
            <ContainerForm
                zonas={zonas}
                tiposDeOperacion={tiposDeOperacion}
                inmuebles={inmuebles}
                cantAmbientes={cantAmbientes}
                monedas={monedas}

                loadedProperty={loadedProperty.data}
            />
        </>
    )
}

export default EditarPropiedad