'use client'

import useStore from "@/store/useStore";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

const ContainerForm = () => {

    const {steps, addStep, substractStep} = useStore();

    const handleAddStep = () => {
        if(steps < 3){
            addStep()
        }
    }

    const handleSubstractStep = () => {
        if(steps !== 1){
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
                {/* <button disabled={steps === 3} type="button" className="button button--next" onClick={() => {handleAddStep()}}>Siguiente paso</button> */}
            </form>
        </section>
    )
}

export default ContainerForm