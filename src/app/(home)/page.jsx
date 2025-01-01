import '../../globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banner'
import SectionCard from '@/components/SectionCard'
import { getAmbientes } from '@/actions/ambientes';
import { getAllProperties } from '@/actions/propiedades';
import { getOperaciones } from '@/actions/tipoOperacion';
import { getInmuebles } from '@/actions/inmuebles';
import { getMonedas } from '@/actions/monedas';
import { getZonas } from '@/actions/zonas';

export default async function Home() {

  const urlentorno = process.env.NEXT_URL_ENTORNO

  const properties = await getAllProperties()


  const tiposDeOperacion = await getOperaciones()


  const inmuebles = await getInmuebles()

  const cantAmbientes = await getAmbientes()

  const monedas = await getMonedas()

  const zonas = await getZonas()

  

  return (
    <>
      <Banner
        tiposDeOperacion={tiposDeOperacion}
        inmuebles={inmuebles}
        cantAmbientes={cantAmbientes}
        monedas={monedas}
        zonas={zonas}
      />

      <SectionCard
        properties={properties}
      />
    </>
  );
}
