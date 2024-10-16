import Banner from "@/components/Banner";
import '../globals.css'

export default async function Home() {

  const properties = await fetch('http://localhost:3000/api/propiedades', {
    method:'GET',
  }).then(res => res.json())

  console.log(properties.data)

  return (

    <Banner />

  );
}
