import BannerDetalle from '@/components/BannerDetalle';
import useStore from '@/store/useStore';
import { useEffect } from 'react';

const StepThree = () => {

  const { substractStep, property, steps, setProperty, addStep } = useStore();


  useEffect(() => {
    console.log(property, 'PROPIEDAD EN EL PASO 3')
  },[])
  return (
    <>
      <BannerDetalle />
      <div className="button--bar">
                <button disabled={steps === 1} type="button" className="button button--previous" onClick={() => { substractStep() }}>Volver al paso anterior</button>
                <button disabled={steps === 3} type="button" className="button button--next" onClick={() => { handleAddStep() }}>Siguiente paso</button>
            </div>
    </>
  )
}

export default StepThree