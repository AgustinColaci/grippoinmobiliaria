'use client'

import useStore from "@/store/useStore";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import { useEffect } from "react";

const ContainerForm = ({tiposDeOperacion, zonas, monedas, cantAmbientes, inmuebles, loadedProperty}) => {

    const { steps, addStep, substractStep, setProperty } = useStore();

    const handleAddStep = () => {
        if (steps < 3) {
            addStep()
        }
    }

    const handleSubstractStep = () => {
        if (steps !== 1) {
            substractStep()
        }
    }

    useEffect(() => {

        if(loadedProperty){
            setProperty(loadedProperty)
        }

    },[])

    return (
        <section className='section__form'>
            <h2 className="title">Información principal</h2>
            <form>

                {steps === 1 && <StepOne
                qRooms={cantAmbientes.data}
                zones={zonas.data}
                operations={tiposDeOperacion.data}
                building={inmuebles.data}
                money={monedas.data}
                loadedProperty={loadedProperty}
                />}
                {steps === 2 && <StepTwo />}
                {steps === 3 && <StepThree />}
                {/* <div className="button--bar">
                    <button type="button" className="button button--previous">Volver al paso anterior</button>
                    <button disabled={steps === 3} type="button" className="button button--next" onClick={() => { handleAddStep() }}>Siguiente paso</button>
                </div> */}
            </form>
        </section>
    )
}

export default ContainerForm