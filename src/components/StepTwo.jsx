import { handleErrorsFromStep2 } from "@/actions/errors";
import useStore from "@/store/useStore";
import { useEffect, useState } from "react"

const StepTwo = () => {

    const [m2total, setM2total] = useState('');
    const [m2cubierto, setM2cubierto] = useState('');
    const [ambientes, setAmbientes] = useState('');
    const [banos, setBanos] = useState('');
    const [tieneCochera, setTieneCochera] = useState(false);
    const [cantidadCochera, setCantidadCochera] = useState('');
    const [dormitorios, setDormitorios] = useState('');
    const [estadoInmueble, setEstadoInmueble] = useState('');
    const [numeroDePlantas, setNumeroDePlantas] = useState('');
    const [ubicacionDelInmueble, setUbicacionDelImmueble] = useState('');
    const [orientacion, setOrientacion] = useState('');
    const [anticipo, setAnticipo] = useState('');
    const [permiteMascotas, setPermiteMascotas] = useState(false);
    const [descripcion, setDescripcion] = useState('');
    const [antiguedad, setAntiguedad] = useState('')

    const { substractStep, property, steps, setProperty, addStep } = useStore();

    const campos = ['m2total', 'm2cubierto', 'ambientes', 'banos', 'tieneCochera', 'cantidadCochera', 'dormitorios', 'estadoInmueble', 'numeroDePlantas', 'ubicacionDelInmueble', 'orientacion', 'anticipo', 'permiteMascotas', 'descripcion', 'antiguedad']

    const [errors, setErrors] = useState({})



    useEffect(() => {
        campos.forEach((key) => {
            if (property[key]) {
                switchWithAll(key, property[key])
            }
        })
    }, [])


    const switchWithAll = (key, valor) => {
        switch (key) {
            case 'm2total':
                setM2total(valor)
                break
            case 'm2cubierto':
                setM2cubierto(valor)
                break
            case 'ambientes':
                setAmbientes(valor)
                break
            case 'banos':
                setBanos(valor)
                break
            case 'tieneCochera':
                setTieneCochera(valor)
                break
            case 'cantidadCochera':
                setCantidadCochera(valor)
                break
            case 'dormitorios':
                setDormitorios(valor)
                break
            case 'estadoInmueble':
                setEstadoInmueble(valor)
                break
            case 'numeroDePlantas':
                setNumeroDePlantas(valor)
                break
            case 'ubicacionDelInmueble':
                setUbicacionDelImmueble(valor)
                break
            case 'orientacion':
                setOrientacion(valor)
                break
            case 'anticipo':
                setAnticipo(valor)
                break
            case 'permiteMascotas':
                setPermiteMascotas(valor)
                break
            case 'descripcion':
                setDescripcion(valor)
                break
            default:
                return
        }
    }

    const handleAddStep = () => {

        const propertyFromStep2 = {
            m2total,
            m2cubierto,
            ambientes,
            banos,
            tieneCochera,
            cantidadCochera,
            dormitorios,
            // estadoInmueble,
            numeroDePlantas,
            ubicacionDelInmueble,
            orientacion,
            anticipo,
            permiteMascotas,
            descripcion
        }

        const errores = handleErrorsFromStep2(propertyFromStep2)
        setErrors({...errors, ...errores})

        for (const key in errores) {
            if (errores[key] === true) {
                console.log(`La propiedad '${key}' tiene el valor true.`);
                return null
            }
        }


        setProperty({...property, ...propertyFromStep2})
        if (steps < 3) {
            addStep()
        }
    }

    const handleSubstractStep = () => {
        substractStep()
    }

    const deleteErrorAndClass = (id) => {

        const newErrors = errors;
        newErrors[id] = false;
        setErrors(newErrors);
    }


    return (
        <>
            <div className="step-two">
                <div className='section__form--inputs'>
                    <label htmlFor="m2total">M² total*</label>
                    <input className={`${errors.m2total ? 'error--empty' : ''}`} value={m2total} onChange={(e) => { setM2total(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="m2total" name="m2total" placeholder="Ejemplo: 20" />
                    {errors.m2total && <p className="error--text">Este campo es obligatorio</p>}
                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="m2cubierto">M² cubierto*</label>
                    <input className={`${errors.m2total ? 'error--empty' : ''}`} value={m2cubierto} onChange={(e) => { setM2cubierto(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="m2cubierto" name="m2cubierto" placeholder="Ejemplo: 5" />
                    {errors.m2cubierto && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="antiguedad">Antigüedad de la propiedad*</label>
                    <input className={`${errors.antiguedad ? 'error--empty' : ''}`} value={antiguedad} onChange={(e) => { setAntiguedad(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="antiguedad" name="antiguedad" placeholder="Ejemplo: 20 años" />
                    {errors.antiguedad && <p className="error--text">Este campo es obligatorio</p>}

                </div>


                <div className='section__form--inputs'>
                    <label htmlFor="ambientes">Ambientes*</label>
                    <select className={`${errors.ambientes ? 'error--empty' : ''}`} onChange={(e) => { setAmbientes(e.target.value); deleteErrorAndClass(e.target.id) }} id="ambientes" name="ambientes" value={ambientes}>
                        <option className={`${errors.ambientes ? 'error--empty' : ''}`} value="" disabled>Selecciona cantidad</option>
                        <option className={`${errors.ambientes ? 'error--empty' : ''}`} value="1">1</option>
                        <option className={`${errors.ambientes ? 'error--empty' : ''}`} value="2">2</option>
                        <option className={`${errors.ambientes ? 'error--empty' : ''}`} value="3">3</option>
                        <option className={`${errors.ambientes ? 'error--empty' : ''}`} value="4">4</option>
                    </select>
                    {errors.ambientes && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="banos">Baños*</label>
                    <select className={`${errors.banos ? 'error--empty' : ''}`} onChange={(e) => { setBanos(e.target.value); deleteErrorAndClass(e.target.id) }} id="banos" name="banos" value={banos}>
                        <option className={`${errors.banos ? 'error--empty' : ''}`} value="" disabled>Selecciona cantidad</option>
                        <option className={`${errors.banos ? 'error--empty' : ''}`} value="1">1</option>
                        <option className={`${errors.banos ? 'error--empty' : ''}`} value="2">2</option>
                        <option className={`${errors.banos ? 'error--empty' : ''}`} value="3">3</option>
                        <option className={`${errors.banos ? 'error--empty' : ''}`} value="4">4</option>
                    </select>
                    {errors.banos && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs cochera'>
                    <label className="cochera-title">¿Tiene cochera?</label>
                    <input className={`${errors.tieneCochera ? 'error--empty' : ''}`} checked={tieneCochera} onChange={(e) => { setTieneCochera(true); deleteErrorAndClass(e.target.name) }} type="radio" id="si" name="tieneCochera" value="si" />
                    <label htmlFor="si">Sí</label>
                    <input className={`${errors.tieneCochera ? 'error--empty' : ''}`} checked={!tieneCochera} onChange={(e) => { setTieneCochera(false); deleteErrorAndClass(e.target.name) }} type="radio" id="no" name="tieneCochera" value="no" />
                    <label htmlFor="no">No</label>
                    {errors.tieneCochera && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                {tieneCochera && <div className='section__form--inputs dos-cols'>
                    <div className='input-sin-label cantidad-cochera'>
                        <label className="label--hidden" htmlFor="cantidadCochera"></label>
                        <select className={`${errors.tieneCochera ? 'error--empty' : ''}`} id="cantidadCochera" name="cantidadCochera" value={cantidadCochera} onChange={(e) => { setCantidadCochera(e.target.value); deleteErrorAndClass(e.target.id) }}>
                            <option value="" disabled>Cantidad</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                        </select>
                        {errors.cantidadCochera && <p className="error--text">Este campo es obligatorio</p>}

                    </div>
                </div>}

                <div className='section__form--inputs'>
                    <label htmlFor="dormitorios">Dormitorios*</label>
                    <select className={`${errors.dormitorios ? 'error--empty' : ''}`} onChange={(e) => { setDormitorios(e.target.value); deleteErrorAndClass(e.target.id) }} id="dormitorios" name="dormitorios" value={dormitorios}>
                        <option className={`${errors.dormitorios ? 'error--empty' : ''}`} value="" disabled>Selecciona una opción</option>
                        <option className={`${errors.dormitorios ? 'error--empty' : ''}`} value="1">1</option>
                        <option className={`${errors.dormitorios ? 'error--empty' : ''}`} value="2">2</option>
                        <option className={`${errors.dormitorios ? 'error--empty' : ''}`} value="3">3</option>
                    </select>
                    {errors.dormitorios && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                {/* <div className='section__form--inputs'>
                    <label htmlFor="estadoInmueble">Estado del inmueble*</label>
                    <select className={`${errors.estadoInmueble ? 'error--empty' : ''}`} onChange={(e) => { setEstadoInmueble(e.target.value); deleteErrorAndClass(e.target.id) }} id="estadoInmueble" name="estadoInmueble" value={estadoInmueble}>
                        <option className={`${errors.estadoInmueble ? 'error--empty' : ''}`} value="" disabled>Selecciona cantidad</option>
                        <option className={`${errors.estadoInmueble ? 'error--empty' : ''}`} value="1">1</option>
                        <option className={`${errors.estadoInmueble ? 'error--empty' : ''}`} value="2">2</option>
                        <option className={`${errors.estadoInmueble ? 'error--empty' : ''}`} value="3">3</option>
                    </select>
                    {errors.estadoInmueble && <p className="error--text">Este campo es obligatorio</p>}

                </div> */}

                <div className='section__form--inputs'>
                    <label htmlFor="plantas">Número de plantas*</label>
                    <select className={`${errors.numeroDePlantas ? 'error--empty' : ''}`} onChange={(e) => { setNumeroDePlantas(e.target.value); deleteErrorAndClass(e.target.id) }} id="numeroDePlantas" name="numeroDePlantas" value={numeroDePlantas}>
                        <option className={`${errors.numeroDePlantas ? 'error--empty' : ''}`} value="" disabled>Selecciona cantidad</option>
                        <option className={`${errors.numeroDePlantas ? 'error--empty' : ''}`} value="1">1</option>
                        <option className={`${errors.numeroDePlantas ? 'error--empty' : ''}`} value="2">2</option>
                        <option className={`${errors.numeroDePlantas ? 'error--empty' : ''}`} value="3">3</option>
                    </select>
                    {errors.numeroDePlantas && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="ubicacionDelInmueble">Ubicación del inmueble*</label>
                    <select className={`${errors.ubicacionDelInmueble ? 'error--empty' : ''}`} onChange={(e) => { setUbicacionDelImmueble(e.target.value); deleteErrorAndClass(e.target.id) }} id="ubicacionDelInmueble" name="ubicacionDelInmueble" value={ubicacionDelInmueble}>
                        <option className={`${errors.ubicacionDelInmueble ? 'error--empty' : ''}`} value="" disabled>Selecciona cantidad</option>
                        <option className={`${errors.ubicacionDelInmueble ? 'error--empty' : ''}`} value="frente">frente</option>
                        <option className={`${errors.ubicacionDelInmueble ? 'error--empty' : ''}`} value="contrafrente">contrafrente</option>
                        <option className={`${errors.ubicacionDelInmueble ? 'error--empty' : ''}`} value="no-aplica">no aplica</option>
                    </select>
                    {errors.ubicacionDelInmueble && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="orientacion">Orientación*</label>
                    <select className={`${errors.orientacion ? 'error--empty' : ''}`} onChange={(e) => { setOrientacion(e.target.value); deleteErrorAndClass(e.target.id) }} id="orientacion" name="orientacion" value={orientacion}>
                        <option className={`${errors.orientacion ? 'error--empty' : ''}`} value="" disabled>Selecciona una opción</option>
                        <option className={`${errors.orientacion ? 'error--empty' : ''}`} value="Norte">Norte</option>
                        <option className={`${errors.orientacion ? 'error--empty' : ''}`} value="Sur">Sur</option>
                        <option className={`${errors.orientacion ? 'error--empty' : ''}`} value="Este">Este</option>
                        <option className={`${errors.orientacion ? 'error--empty' : ''}`} value="Oeste">Oeste</option>
                    </select>
                    {errors.orientacion && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs'>
                    <label htmlFor="anticipo">Anticipo*</label>
                    <input className={`${errors.anticipo ? 'error--empty' : ''}`} onChange={(e) => { setAnticipo(e.target.value); deleteErrorAndClass(e.target.id) }} value={anticipo} type="text" id="anticipo" name="anticipo" placeholder="Ejemplo: 50%" />
                    {errors.anticipo && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs mascotas'>
                    <label className="mascotas-title">¿Permite mascotas?</label>
                    <input className={`${errors.permiteMascotas ? 'error--empty' : ''}`} onChange={(e) => { setPermiteMascotas(true); deleteErrorAndClass(e.target.name) }} checked={permiteMascotas} type="radio" id="si" name="permiteMascotas" value="si" />
                    <label htmlFor="si">Sí</label>
                    <input className={`${errors.permiteMascotas ? 'error--empty' : ''}`} onChange={(e) => { setPermiteMascotas(false); deleteErrorAndClass(e.target.name) }} checked={!permiteMascotas} type="radio" id="no" name="permiteMascotas" value="no" />
                    <label htmlFor="no">No</label>
                    {errors.permiteMascotas && <p className="error--text">Este campo es obligatorio</p>}

                </div>

                <div className='section__form--inputs descripcion'>
                    <label htmlFor="descripcion">Descripción*</label>
                    <textarea className={`${errors.descripcion ? 'error--empty' : ''}`} value={descripcion} onChange={(e) => { setDescripcion(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="descripcion" name="descripcion" placeholder="Ejemplo: 1234" />
                    {errors.descripcion && <p className="error--text">Este campo es obligatorio</p>}

                </div>

            </div>
            <div className="button--bar">
                <button disabled={steps === 1} type="button" className="button button--previous" onClick={() => { handleSubstractStep() }}>Volver al paso anterior</button>
                <button disabled={steps === 3} type="button" className="button button--next" onClick={() => { handleAddStep() }}>Siguiente paso</button>
            </div>
        </>

    )
}

export default StepTwo