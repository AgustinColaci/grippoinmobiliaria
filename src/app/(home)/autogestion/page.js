import ButtonSignOut from '@/components/ButtonSignOut';
import '../../../css/autogestion.css'
import Link from 'next/link';

const Autogestion = async () => {

  // const handleUser = async () => {
  //   const exit = await signOut()
  // }



  return (
    <div className='menu-autogestion'>
      <Link className="button button--nueva" href={'/autogestion/nueva-propiedad'}>Crear una nueva propiedad</Link>
      <Link className="button button--propiedades" href={'/autogestion/lista-de-propiedades'}>Ver todas las propiedades</Link>
      <Link className="button button--propiedades" href={'/autogestion/nuevo-usuario'}>Crear nuevo usuario</Link>
      <ButtonSignOut />
    </div>
  );
};

export default Autogestion;
