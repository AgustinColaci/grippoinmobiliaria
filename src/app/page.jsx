import '../globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Banner from '@/components/Banner'

export default async function Home() {
  try {
    const properties = await fetch('http://localhost:3000/api/propiedades', {
      method: 'GET',
    }).then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }
      return res.json();
    });

    console.log(properties.data);
  } catch (error) {
    console.error('Error fetching properties:', error);
  }

  return (
    <Banner />
  );
}
