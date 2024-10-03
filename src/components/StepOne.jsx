

const StepOne = ({ }) => {
    return (
        <>
            <div className="step-one">
                <div className="column-left">
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
                            <label htmlFor="direccion">Ubicación*</label>
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
                            <label class="expensas-title">¿Paga expensas?</label>
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
                            <label htmlFor="codigo">Ubicación*</label>
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
                            <label htmlFor="link-maps">Ubicación*</label>
                            <input type="text" id="link-maps" name="link-maps" placeholder="Pegar link de Google maps" />
                        </div>
                    </div>
                <div className="column-right">
                    <h2 className="title">Vista previa de Google Maps</h2>
                    <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8731958097183!2d-58.60336282353169!3d-34.58207495635691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb90a998a79f5%3A0xff796e0ff1e3bc60!2sGrippo%20Propiedades!5e0!3m2!1ses!2sar!4v1727916179247!5m2!1ses!2sar" width="100%" height="440" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    
                    <h2 className="title">Fotos*</h2>

                    <div className='add__button'>
                        <a className="button button--add" href="#">Subí fotos a tu publicación</a>
                    </div>

                    <p className='paragraph'>Acepta jpg y png. Hasta 20 fotos.</p>
                </div>
            </div>
        </>
    )
}

export default StepOne