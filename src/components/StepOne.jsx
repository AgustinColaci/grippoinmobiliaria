

const StepOne = ({ }) => {
    return (
        <>
            <div className='section__form--inputs'>
                <label htmlFor="tipoOperacion">Tipo de operación*</label>
                <select id="tipoOperacion" name="tipoOperacion" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="venta">Venta</option>
                    <option value="alquiler">Alquiler</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="tipoInmueble">Tipo de inmueble*</label>
                <select id="tipoInmueble" name="tipoInmueble" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="casa">Casa</option>
                    <option value="departamento">Departamento</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="zona">Zona*</label>
                <select id="zona" name="zona" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="MartinCoronado">Martín Coronado</option>
                    <option value="VillaBosch">Villa Bosch</option>
                    <option value="CiudadJardin">Ciudad Jardin</option>
                    <option value="PabloPodesta">Pablo Podesta</option>
                    <option value="LomaHermosa">Loma Hermosa</option>
                    <option value="AltosDePodesta">Barrio Altos de Podesta</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="direccion">Ubicación:</label>
                <input type="text" id="direccion" name="direccion" placeholder="Ejemplo: Calle 1234" />
            </div>

            <div className='section__form--inputs dos-cols'>
                <div className='input-sin-label moneda'>
                    <label htmlFor="precioInmueble">Precio de inmueble*</label>
                    <select id="precioInmueble" name="precioInmueble" defaultValue="">
                        <option value="" disabled>Moneda</option>
                        <option value="ARS">ARS</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className='input-sin-label'>
                    <label className="label--hidden" htmlFor="precioInmuebleValor"></label>
                    <input type="text" id="precioInmuebleValor" name="precioInmuebleValor" placeholder="Ejemplo: 8000" />
                </div>
            </div>

            <div className='section__form--inputs expensas'>
                <label class="expensas-title">Paga expensas?</label>
                <input type="radio" id="si" name="pagaExpensas" value="si" />
                <label htmlFor="si">Sí</label>
                <input type="radio" id="no" name="pagaExpensas" value="no" />
                <label htmlFor="no">No</label>
            </div>

            <div className='section__form--inputs dos-cols'>
                <div className='input-sin-label moneda'>
                    <label className="label--hidden" htmlFor="precioExpensas"></label>
                    <select id="precioExpensas" name="precioExpensas" defaultValue="">
                        <option value="" disabled>Moneda</option>
                        <option value="ARS">ARS</option>
                        <option value="USD">USD</option>
                    </select>
                </div>
                <div className='input-sin-label'>
                    <label className="label--hidden" htmlFor="precioExpensasValor"></label>
                    <input type="text" id="precioExpensasValor" name="precioExpensasValor" placeholder="Ejemplo: 8000" />
                </div>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="codigo">Ubicación:</label>
                <input type="text" id="codigo" name="codigo" placeholder="Ejemplo: 1234" />
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="estadoVenta">Estado de la venta*</label>
                <select id="estadoVenta" name="estadoVenta" defaultValue="">
                    <option value="" disabled>Selecciona una opción</option>
                    <option value="disponible">Disponible</option>
                    <option value="vendida">Vendida</option>
                    <option value="alquilada">Alquilada</option>
                </select>
            </div>

            <div className='section__form--inputs'>
                <label htmlFor="link-maps">Ubicación:</label>
                <input type="text" id="link-maps" name="link-maps" placeholder="Pegar link de Google maps" />
            </div>
        </>
    )
}

export default StepOne