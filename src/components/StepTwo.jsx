
const StepTwo = () => {
    return (
        <div className="step-two">
            <div className='section__form--inputs'>
                <label htmlFor="m2total">M² total*</label>
                <input type="text" id="m2total" name="m2total" placeholder="Ejemplo: 20" />
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="m2cubierto">M² cubierto*</label>
                <input type="text" id="m2cubierto" name="m2cubierto" placeholder="Ejemplo: 5" />
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="ambientes">Ambientes*</label>
                <select id="ambientes" name="ambientes" defaultValue="">
                    <option value="" disabled>Selecciona cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="banos">Baños*</label>
                <select id="banos" name="banos" defaultValue="">
                    <option value="" disabled>Selecciona cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
            </div>

            <div className='section__form--inputs cochera'>
                <label className="cochera-title">¿Tiene cochera?</label>
                <input type="radio" id="cochera-si" name="tieneCochera" value="si" />
                <label htmlFor="cochera-si">Sí</label>
                <input type="radio" id="cochera-no" name="tieneCochera" value="no" />
                <label htmlFor="cochera-no">No</label>
            </div>

            <div className='section__form--inputs dos-cols'>
                <div className='input-sin-label cantidad-cochera'>
                    <label className="label--hidden" htmlFor="cantidadCochera"></label>
                    <select id="cantidadCochera" name="cantidadCochera" defaultValue="">
                        <option value="" disabled>Cantidad</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                </div>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="dormitorios">Dormitorios*</label>
                <select id="dormitorios" name="dormitorios" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="estado-inmueble">Estado del inmueble*</label>
                <select id="estado-inmueble" name="estado-inmueble" defaultValue="">
                    <option value="" disabled>Selecciona cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="plantas">Número de plantas*</label>
                <select id="plantas" name="plantas" defaultValue="">
                    <option value="" disabled>Selecciona cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="ubicacion-inmueble">Ubicación del inmueble*</label>
                <select id="ubicacion-inmueble" name="ubicacion-inmueble" defaultValue="">
                    <option value="" disabled>Selecciona cantidad</option>
                    <option value="frente">frente</option>
                    <option value="contrafrente">contrafrente</option>
                    <option value="no-aplica">no aplica</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="orientacion">Orientación*</label>
                <select id="orientacion" name="orientacion" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="anticipo">Anticipo*</label>
                <input type="text" id="anticipo" name="anticipo" placeholder="Ejemplo: 50%" />
            </div>

            <div className='section__form--inputs mascotas'>
                <label className="mascotas-title">¿Permite mascotas?</label>
                <input type="radio" id="mascotas-si" name="permiteMascotas" value="si" />
                <label htmlFor="mascotas-si">Sí</label>
                <input type="radio" id="mascotas-no" name="permiteMascotas" value="no" />
                <label htmlFor="mascotas-no">No</label>
            </div>

            <div className='section__form--inputs descripcion'>
                <label htmlFor="descripcion">Descripción*</label>
                <textarea type="text" id="descripcion" name="descripcion" placeholder="Ejemplo: 1234" />
            </div>
        </div>
    )
}

export default StepTwo