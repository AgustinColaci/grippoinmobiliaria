import ButtonSignOut from '@/components/ButtonSignOut';
import '../../../css/autogestion.css'
import Link from 'next/link';

const Autogestion = () => {

  // const handleUser = async () => {
  //   const exit = await signOut()
  // }

  return (
    <div className='menu-autogestion'>
      <Link className="button button--nueva" href={'/autogestion/nueva-propiedad'}>Crear una nueva propiedad</Link>
      <Link className="button button--propiedades" href={'/autogestion/lista-de-propiedades'}>Ver todas las propiedades</Link>
      <ButtonSignOut />
    </div>
  );
};

export default Autogestion;
