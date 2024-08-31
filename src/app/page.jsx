'use server'
// localhost:3000

export default async function Home() {

  const propiedades = await fetch('http://localhost:3000/api/propiedades', {method:'GET'}).then(res => res.json())

  return (
    <main>
      Grippo inmobiliaria
    </main>
  );
}
