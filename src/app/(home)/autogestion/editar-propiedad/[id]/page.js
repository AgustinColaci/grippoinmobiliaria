import { getAmbientes } from "@/actions/ambientes"
import { getInmuebles } from "@/actions/inmuebles"
import { getMonedas } from "@/actions/monedas"
import { getPropertyById } from "@/actions/propiedades"
import { getOperaciones } from "@/actions/tipoOperacion"
import { getZonas } from "@/actions/zonas"
import BannerAutogestion from "@/components/BannerAutogestion"
import ContainerForm from "@/components/ContainerForm"

const EditarPropiedad = async ({ params }) => {

    const { id } = params
    const urlentorno = process.env.NEXT_URL_ENTORNO


    const loadedProperty = await getPropertyById(id)

    const tiposDeOperacion = await getOperaciones()


    const inmuebles = await getInmuebles()

    const cantAmbientes = await getAmbientes()

    const monedas = await getMonedas()

    const zonas = await getZonas()

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