import '../../globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banner'
import SectionCard from '@/components/SectionCard'

export default async function Home() {
  try {
    const urlentorno = process.env.NEXT_URL_ENTORNO
    const properties = await fetch(`${urlentorno}/api/propiedades`, {
      method: 'GET',
    }).then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });
  } catch (error) {
    console.error('Error fetching properties:', error);
  }

  return (
    <>
      <Banner />
      <SectionCard />
    </>
  );
}
