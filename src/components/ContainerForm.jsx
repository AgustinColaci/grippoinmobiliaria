'use client'

import useStore from "@/store/useStore";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ContainerForm = () => {

    const { steps, addStep, substractStep } = useStore();

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

    return (
        <section className='section__form'>
            <h2 className="title">Información principal</h2>
            <form>

                {steps === 1 && <StepOne />}
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