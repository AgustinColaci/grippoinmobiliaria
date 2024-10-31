import useStore from "@/store/useStore";
import { useEffect, useState } from "react";


const StepOne = ({ }) => {


    const [tipoOperacion, setTipoOperacion] = useState('');
    const [tipoInmueble, setTipoInmueble] = useState('');
    const [zona, setZona] = useState('');
    const [direccion, setDireccion] = useState('');
    const [precioInmueble, setPrecioInmueble] = useState('');
    const [precioInmuebleValor, setPrecioInmuebleValor] = useState('');
    const [pagaExpensas, setPagaExpensas] = useState(false);
    const [precioExpensas, setPrecioExpensas] = useState('');
    const [precioExpensasValor, setPrecioExpensasValor] = useState('');
    const [codigo, setCodigo] = useState('');
    const [estadoVenta, setEstadoVenta] = useState('');
    const [linkMaps, setLinkMaps] = useState('');
    const [fotos, setFotos] = useState([]);

    const [errors, setErrors] = useState({})

    const { steps, addStep, setProperty } = useStore();


    useEffect(() => {
        console.log(steps, '')
    }, [steps])


    const sendImageToFirebase = async (file) => {
        console.log(file)
        if (!file) {
            return
        }
        const formData = new FormData();
        formData.append("file", file);

        try {
            const response = await fetch(`/api/imagenes`, {
                method: "POST",
                body: formData,
            });


            if (response.ok) {
                const data = await response.json();
                console.log(data)
                console.log("URL de la imagen subida:", data.url);
                setFotos((prevFotos) => [...prevFotos, { url: data.url, name: file.name }]);
            } else {
                console.error("Error al subir la imagen");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }


    const handleAddStep = () => {

        if (
            tipoOperacion == '' ||
            tipoInmueble == '' ||
            zona == '' ||
            direccion == '' ||
            precioInmueble == '' ||
            precioInmuebleValor == '' ||
            (pagaExpensas && precioExpensas == '') ||
            (pagaExpensas && precioExpensasValor == '') ||
            codigo == '' ||
            estadoVenta == '' ||
            linkMaps == '' ||
            fotos.length <= 0
        ) {
            console.log('errror')
            return
            //TENGO QUE CODEAR TODO EL SISTEMA DE ERRORES DEL FORMULARO
        }

        const property = { tipoOperacion, tipoInmueble, zona, direccion, precioInmueble, precioInmuebleValor, pagaExpensas, precioExpensas, precioExpensasValor, codigo, estadoVenta, linkMaps, fotos }

        setProperty(property)

        if (steps < 3) {
            addStep()
        }
    }





    return (
        <>
            <div className="step-one">
                <div className="column-left">
                    <div className='section__form--inputs'>
                        <label htmlFor="tipoOperacion">Tipo de operación*</label>
                        <select value={tipoOperacion} onChange={(e) => setTipoOperacion(e.target.value)} id="tipoOperacion" name="tipoOperacion" >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="venta">Venta</option>
                            <option value="alquiler">Alquiler</option>
                        </select>
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="tipoInmueble">Tipo de inmueble*</label>
                        <select onChange={(e) => setTipoInmueble(e.target.value)} id="tipoInmueble" name="tipoInmueble" value={tipoInmueble}>
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="casa">Casa</option>
                            <option value="departamento">Departamento</option>
                        </select>
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="zona">Zona*</label>
                        <select onChange={(e) => setZona(e.target.value)} id="zona" name="zona" value={tipoInmueble}>
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="Martin Coronado">Martín Coronado</option>
                            <option value="Villa Bosch">Villa Bosch</option>
                            <option value="Ciudad Jardin">Ciudad Jardin</option>
                            <option value="Pablo Podesta">Pablo Podesta</option>
                            <option value="Loma Hermosa">Loma Hermosa</option>
                            <option value="Altos De Podesta">Barrio Altos de Podesta</option>
                        </select>
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="direccion">Ubicación*</label>
                        <input value={direccion} onChange={(e) => setDireccion(e.target.value)} type="text" id="direccion" name="direccion" placeholder="Ejemplo: Calle 1234" />
                    </div>

                    <div className='section__form--inputs dos-cols'>
                        <div className='input-sin-label moneda'>
                            <label htmlFor="precioInmueble">Precio de inmueble*</label>
                            <select onChange={(e) => setPrecioInmueble(e.target.value)} id="precioInmueble" name="precioInmueble" value={precioInmueble}>
                                <option value="" disabled>Moneda</option>
                                <option value="ARS">ARS</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div className='input-sin-label'>
                            <label className="label--hidden" htmlFor="precioInmuebleValor"></label>
                            <input value={precioInmuebleValor} onChange={(e) => setPrecioInmuebleValor(e.target.value)} type="text" id="precioInmuebleValor" name="precioInmuebleValor" placeholder="Ejemplo: 8000" />
                        </div>
                    </div>

                    <div className='section__form--inputs expensas'>
                        <label classNameName="expensas-title">¿Paga expensas?</label>
                        <input onChange={(e) => setPagaExpensas(true)} type="radio" id="expensas-si" name="pagaExpensas" value="si" />
                        <label htmlFor="expensas-si">Sí</label>
                        <input onChange={(e) => setPagaExpensas(false)} type="radio" id="expensas-no" name="pagaExpensas" value="no" />
                        <label htmlFor="expensas-no">No</label>
                    </div>

                    <div className='section__form--inputs dos-cols'>
                        <div className='input-sin-label moneda'>
                            <label className="label--hidden" htmlFor="precioExpensas"></label>
                            <select value={precioExpensas} onChange={(e) => setPrecioExpensas(e.target.value)} id="precioExpensas" name="precioExpensas">
                                <option value="" disabled>Moneda</option>
                                <option value="ARS">ARS</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                        <div className='input-sin-label'>
                            <label className="label--hidden" htmlFor="precioExpensasValor"></label>
                            <input onChange={(e) => setPrecioExpensasValor(e.target.value)} value={precioExpensasValor} type="text" id="precioExpensasValor" name="precioExpensasValor" placeholder="Ejemplo: 8000" />
                        </div>
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="codigo">Ubicación*</label>
                        <input value={codigo} onChange={(e) => setCodigo(e.target.value)} type="text" id="codigo" name="codigo" placeholder="Ejemplo: 1234" />
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="estadoVenta">Estado de la venta*</label>
                        <select id="estadoVenta" name="estadoVenta" value={estadoVenta} onChange={(e) => setEstadoVenta(e.target.value)} >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="disponible">Disponible</option>
                            <option value="vendida">Vendida</option>
                            <option value="alquilada">Alquilada</option>
                        </select>
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="link-maps">Ubicación*</label>
                        <input value={linkMaps} onChange={(e) => setLinkMaps(e.target.value)} type="text" id="link-maps" name="link-maps" placeholder="Pegar link de Google maps" />
                    </div>
                </div>
                <div className="column-right">
                    <h2 className="title">Vista previa de Google Maps</h2>
                    <div className="google-maps">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8731958097183!2d-58.60336282353169!3d-34.58207495635691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb90a998a79f5%3A0xff796e0ff1e3bc60!2sGrippo%20Propiedades!5e0!3m2!1ses!2sar!4v1727916179247!5m2!1ses!2sar" width="100%" height="440" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <h2 className="title">Fotos*</h2>

                    <div className='add__button'>
                        <a className="button button--add" href="#"> Subí fotos a tu publicación</a>
                        <input id="fotos" name="fotos" type="file" onChange={((e) => { sendImageToFirebase(e.target.files[0]) })} />
                        {/* <label htmlFor="fotos">Subí fotos a tu publicación </label> */}
                        <div className="autogestion-img-container">
                            {fotos.map((foto, index) => {
                                return (<div className="autogestion-img">
                                    <p key={index}>{foto.name}</p>
                                    <button>X</button>
                                </div>)
                            })}
                        </div>

                    </div>

                    <p className='paragraph'>Acepta jpg y png. Hasta 20 fotos.</p>
                </div>
            </div>
            <button disabled={steps === 3} type="button" className="button button--next" onClick={() => { handleAddStep() }}>Siguiente paso</button>

        </>
    )
}

export default StepOne