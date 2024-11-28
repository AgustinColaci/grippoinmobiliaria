import '../../globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banner'
import SectionCard from '@/components/SectionCard'

export default async function Home() {

  const urlentorno = process.env.NEXT_URL_ENTORNO

  const properties = await fetch(`${urlentorno}/api/propiedades`, {
    method: 'GET',
  }).then(res => {
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
  });


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
      <Banner
        tiposDeOperacion={tiposDeOperacion.data}
        inmuebles={inmuebles.data}
        cantAmbientes={cantAmbientes.data}
        monedas={monedas.data}
        zonas={zonas.data}
      />

      <SectionCard
        properties={properties.data}
      />
    </>
  );
}
