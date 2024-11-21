import BannerDetalle from '@/components/BannerDetalle';
import Link from 'next/link';

const Detalle = () => {

  return (
    <>
      <div className='volver'>
        <Link className="link" href="/">Volver a la búsqueda</Link>
      </div>
      <BannerDetalle />
    </>
  );
};

export default Detalle;