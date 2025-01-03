import { handleErrorsFromStep1 } from "@/actions/errors";
import useStore from "@/store/useStore";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"


const StepOne = ({ operations, building, zones, money, qRooms, loadedProperty }) => {

    // const toastify = Toastify;
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
    const [urlMaps, setUrlMaps] = useState('');
    const [fotos, setFotos] = useState([]); //ALMACENO LAS IMAGENES YA CARGADAS
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    const [files, setFiles] = useState([])

    const campos = ['tipoOperacion', 'tipoInmueble', 'zona', 'direccion', 'precioInmueble', 'precioInmuebleValor', 'pagaExpensas', 'precioExpensas', 'precioExpensasValor', 'codigo', 'estadoVenta', 'linkMaps', 'urlMaps', 'fotos', 'files']

    const [errors, setErrors] = useState({})

    const { steps, addStep, setProperty, property, clearProperty, setImagesForDelete, setImagesForUpload } = useStore();


    useEffect(() => {

        if (property) {

            campos.forEach((key) => {
                if (property[key]) {
                    switchWithAll(key, property[key])
                }

                if ((key === 'fotos' || key === 'files') && property[key]) {
                    const newFiles = [...files, ...property[key]];
                    const uniqueFiles = Array.from(new Set(newFiles.map(file => file.name)))
                        .map(name => newFiles.find(file => file.name === name));
                    setFiles(uniqueFiles);
                }

                if (key === 'fotos' && property[key]) {
                    setFotos(property[key])
                }
            })
            // setFiles(getImages())
            setLoading(false)
        }
    }, [property])


    const handleBack = () => {
        clearProperty()
        router.push('/autogestion')
    }


    const switchWithAll = (key, valor) => {
        switch (key) {
            case 'tipoOperacion':
                setTipoOperacion(valor)
                break
            case 'tipoInmueble':
                setTipoInmueble(valor)
                break
            case 'zona':
                setZona(valor)
                break
            case 'direccion':
                setDireccion(valor)
                break
            case 'precioInmueble':
                setPrecioInmueble(valor)
                break
            case 'precioInmuebleValor':
                setPrecioInmuebleValor(valor)
                break
            case 'pagaExpensas':
                setPagaExpensas(valor)
                break
            case 'precioExpensas':
                setPrecioExpensas(valor)
                break
            case 'precioExpensasValor':
                setPrecioExpensasValor(valor)
                break
            case 'codigo':
                setCodigo(valor)
                break
            case 'estadoVenta':
                setEstadoVenta(valor)
                break
            case 'linkMaps':
                setLinkMaps(valor)
                break
            // case 'fotos':
            //     setFotos(valor)
            //     break
            // case 'files':
            //     setFiles(valor)
            //     break
            case 'urlMaps':
                setUrlMaps(valor)
                break
            default:
                return
        }
    }


    const sendImageToFirebase = async (file) => {
        if (!file) {
            return
        }

        if (files.length >= 18) {
            Toastify({
                text: "Ya tienes el limite de imágenes",
                className: "warning",
                gravity: "bottom", // `top` or `bottom`
                style: {
                    fontSize: '1.5rem'
                }
            }).showToast()
            return
        }

        const lookingForRepeatImage = files.find(archivo => archivo.name === file.name)

        if (lookingForRepeatImage) {
            Toastify({
                text: "Ya subiste esta imagen",
                className: "warning",
                gravity: "bottom", // `top` or `bottom`
                style: {
                    fontSize: '1.5rem'
                }
            }).showToast()
            return
        }

        setFiles((prevFiles) => [...prevFiles, file]);
    }

    function compareImageArrays(existingImages, newImages) {
        // Extraer las URLs de ambos arrays
        const existingUrls = existingImages.map(image => image.url);
        const newUrls = newImages.map(image => image.url);

        // Encontrar las URLs que se quedan (están en ambos arrays)
        const remainingImages = newImages.filter(image => existingUrls.includes(image.url));

        // Encontrar las URLs nuevas (están en el nuevo array pero no en el existente)
        const newImagesOnly = newImages.filter(image => !existingUrls.includes(image.url));

        // Encontrar las URLs que deben eliminarse (están en el array existente pero no en el nuevo)
        const imagesToDelete = existingImages.filter(image => !newUrls.includes(image.url));

        return {
            remainingImages,
            newImages: newImagesOnly,
            imagesToDelete
        };
    }

    const handleAddStep = () => {

        const result = compareImageArrays(fotos, files);
        const propertyFromStep1 = {
            tipoOperacion,
            tipoInmueble,
            zona,
            direccion,
            precioInmueble,
            precioInmuebleValor,
            pagaExpensas,
            precioExpensas,
            precioExpensasValor,
            codigo,
            estadoVenta,
            linkMaps,
            // files,
            urlMaps,
            fotos:[...result.remainingImages, ...result.newImages]
        }

        setImagesForDelete(result.imagesToDelete)
        setImagesForUpload(result.newImages)

        const errores = handleErrorsFromStep1(propertyFromStep1)
        setErrors({ ...errors, ...errores })


        for (const key in errores) {
            if (errores[key] === true) {
                console.log(`La propiedad '${key}' tiene el valor true.`);
                return null
            }
        }

        setProperty({ ...property, ...propertyFromStep1 })

        if (steps < 3) {
            addStep()
        }
    }

    // const deleteErrorAndClass = (id) => {

    //     const newErrors = errors;
    //     newErrors[id] = false;
    //     setErrors(newErrors);
    // }

    const deleteErrorAndClass = (id) => {
        const newErrors = { ...errors };
        newErrors[id] = false;
        setErrors(newErrors);
    }

    const handleLinkMaps = (iframeHTML) => {
        deleteErrorAndClass('linkMapsIncorrecto')
        deleteErrorAndClass('linkMaps')

        const srcMatch = iframeHTML?.match(/src="([^"]+)"/);
        const src = srcMatch ? srcMatch[1] : null;

        if (!src) {
            setErrors({ ...errors, linkMapsIncorrecto: true })
            setLinkMaps(iframeHTML)
            return
        }
        setLinkMaps(src)

        const url = new URL(src);
        const params = url.searchParams.get('pb');
        const addressPart = params.split('!2s')[1].split('!')[0];
        const address = decodeURIComponent(addressPart);
        const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(address)}`;

        setUrlMaps(mapsUrl)
    }


    const handleDeletePhoto = (nameFile) => {
        const filteredFiles = files?.filter(file => file.name !== nameFile)
        setFiles(filteredFiles)
    }



    return (
        <>
            <div className="step-one">
                <div className="column-left">
                    <div className='section__form--inputs'>
                        <label htmlFor="tipoOperacion">Tipo de operación*</label>
                        <select className={`${errors.tipoOperacion ? 'error--empty' : ''}`} value={tipoOperacion} onChange={(e) => { setTipoOperacion(e.target.value); deleteErrorAndClass(e.target.id) }} id="tipoOperacion" name="tipoOperacion" >
                            <option className={`${errors.tipoOperacion ? 'error--empty' : ''}`} value="" disabled>Selecciona una opción</option>
                            {operations?.map((el, i) => {
                                return <option key={i} className={`${errors.tipoOperacion ? 'error--empty' : ''}`} value={el.titulo}>{el.titulo}</option>
                            })}
                        </select>
                        {errors.tipoOperacion && <p className="error--text">Este campo es obligatorio</p>}

                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="tipoInmueble">Tipo de inmueble*</label>
                        <select className={`${errors.tipoInmueble ? 'error--empty' : ''}`} onChange={(e) => { setTipoInmueble(e.target.value); deleteErrorAndClass(e.target.id) }} id="tipoInmueble" name="tipoInmueble" value={tipoInmueble}>
                            <option className={`${errors.tipoInmueble ? 'error--empty' : ''}`} value="" disabled>Selecciona una opción</option>
                            {building?.map((el, i) => {
                                return <option key={i} className={`${errors.tipoInmueble ? 'error--empty' : ''}`} value={el.tipo}>{el.tipo}</option>
                            })}
                        </select>
                        {errors.tipoInmueble && <p className="error--text">Este campo es obligatorio</p>}

                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="zona">Zona*</label>
                        <select className={`${errors.zona ? 'error--empty' : ''}`} onChange={(e) => { setZona(e.target.value); deleteErrorAndClass(e.target.id) }} id="zona" name="zona" value={zona}>
                            <option className={`${errors.zona ? 'error--empty' : ''}`} value="" disabled>Selecciona una opción</option>
                            {zones.map((z, i) => {
                                return <option key={i} className={`${errors.zona ? 'error--empty' : ''}`} value={z.titulo}>{z.titulo}</option>
                            })}
                        </select>
                        {errors.zona && <p className="error--text">Este campo es obligatorio</p>}
                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="direccion">Dirección*</label>
                        <input className={`${errors.direccion ? 'error--empty' : ''}`} value={direccion} onChange={(e) => { setDireccion(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="direccion" name="direccion" placeholder="Ejemplo: Calle 1234" />
                        {errors.direccion && <p className="error--text">Este campo es obligatorio</p>}

                    </div>

                    <div>

                        <div className='section__form--inputs dos-cols'>
                            <div className='input-sin-label moneda'>
                                <label htmlFor="precioInmueble">Precio de inmueble*</label>
                                <select className={`${errors.precioInmueble ? 'error--empty' : ''}`} onChange={(e) => { setPrecioInmueble(e.target.value); deleteErrorAndClass(e.target.id) }} id="precioInmueble" name="precioInmueble" value={precioInmueble}>
                                    <option className={`${errors.precioInmueble ? 'error--empty' : ''}`} value="" disabled>Moneda</option>
                                    {money.map((el, i) => {
                                        return <option key={i} className={`${errors.precioInmueble ? 'error--empty' : ''}`} value={el.display}>{el.tipo}</option>
                                    })}
                                </select>

                            </div>
                            <div className='input-sin-label'>
                                <label className="label--hidden" htmlFor="precioInmuebleValor"></label>
                                <input className={`${errors.precioInmuebleValor ? 'error--empty' : ''}`} value={precioInmuebleValor} onChange={(e) => { setPrecioInmuebleValor(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="precioInmuebleValor" name="precioInmuebleValor" placeholder="Ejemplo: 8000" />

                            </div>
                        </div>
                        {(errors.precioInmuebleValor || errors.precioInmueble) && <p className="error--text">Este campo es obligatorio</p>}
                    </div>


                    <div className='section__form--inputs expensas'>
                        <label className="expensas-title">¿Paga expensas?</label>
                        <input className={`${errors.pagaExpensas ? 'error--empty' : ''}`} checked={pagaExpensas} onChange={(e) => { setPagaExpensas(true); deleteErrorAndClass(e.target.name) }} type="radio" id="expensas-si" name="pagaExpensas" value="si" />
                        <label htmlFor="expensas-si">Sí</label>
                        <input className={`${errors.pagaExpensas ? 'error--empty' : ''}`} checked={!pagaExpensas} onChange={(e) => { setPagaExpensas(false); deleteErrorAndClass(e.target.name) }} type="radio" id="expensas-no" name="pagaExpensas" value="no" />
                        <label htmlFor="expensas-no">No</label>
                        {errors.pagaExpensas && <p className="error--text">Este campo es obligatorio</p>}

                    </div>


                    {pagaExpensas &&
                        <div>

                            <div className='section__form--inputs dos-cols'>
                                <div className='input-sin-label moneda'>
                                    <label className="label--hidden" htmlFor="precioExpensas"></label>
                                    <select className={`${errors.precioExpensas ? 'error--empty' : ''}`} disabled={!pagaExpensas} value={precioExpensas} onChange={(e) => { setPrecioExpensas(e.target.value); deleteErrorAndClass(e.target.id) }} id="precioExpensas" name="precioExpensas">
                                        <option value="" disabled>Moneda</option>
                                        {money.map((el, i) => {
                                            return <option key={i} className={`${errors.precioInmueble ? 'error--empty' : ''}`} value={el.tipo}>{el.display}</option>
                                        })}
                                    </select>

                                </div>
                                <div className='input-sin-label'>
                                    <label className="label--hidden" htmlFor="precioExpensasValor"></label>
                                    <input className={`${errors.precioExpensasValor ? 'error--empty' : ''}`} disabled={!pagaExpensas} onChange={(e) => { setPrecioExpensasValor(e.target.value); deleteErrorAndClass(e.target.id) }} value={precioExpensasValor} type="text" id="precioExpensasValor" name="precioExpensasValor" placeholder="Ejemplo: 8000" />

                                </div>

                            </div>
                            {(errors.precioExpensasValor || errors.precioExpensa) && <p className="error--text">Este campo es obligatorio</p>}
                        </div>
                    }

                    <div className='section__form--inputs'>
                        <label htmlFor="codigo">Código*</label>
                        <input className={`${errors.codigo ? 'error--empty' : ''}`} value={codigo} onChange={(e) => { setCodigo(e.target.value); deleteErrorAndClass(e.target.id) }} type="text" id="codigo" name="codigo" placeholder="Ejemplo: 1234" />
                        {errors.codigo && <p className="error--text">Este campo es obligatorio</p>}

                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="estadoVenta">Estado de la venta*</label>
                        <select className={`${errors.estadoVenta ? 'error--empty' : ''}`} id="estadoVenta" name="estadoVenta" value={estadoVenta} onChange={(e) => { setEstadoVenta(e.target.value); deleteErrorAndClass(e.target.id) }} >
                            <option value="" disabled>Selecciona una opción</option>
                            <option value="disponible">Disponible</option>
                            <option value="vendida">Vendida</option>
                            <option value="alquilada">Alquilada</option>
                        </select>
                        {errors.estadoVenta && <p className="error--text">Este campo es obligatorio</p>}

                    </div>

                    <div className='section__form--inputs'>
                        <label htmlFor="link-maps">Link de Maps*</label>
                        <input className={`${errors.linkMaps ? 'error--empty' : ''}`} value={linkMaps} onChange={(e) => { handleLinkMaps(e.target.value) }} type="text" id="link-maps" name="link-maps" placeholder="Pegar link de Google maps" />
                        {errors.linkMaps && <p className="error--text">Este campo es obligatorio</p>}
                        {errors.linkMapsIncorrecto && <p className="error--text">Enlace incorrecto. Recorda pegar el mapa como HTML</p>}

                    </div>
                </div>
                <div className="column-right">
                    <h2 className="title">Vista previa de Google Maps</h2>
                    <div className="google-maps">
                        <iframe src={errors.linkMapsIncorrecto ? 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.8731958097223!2d-58.603362823511155!3d-34.5820749563568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb90a998a79f5%3A0xff796e0ff1e3bc60!2sGrippo%20Propiedades!5e0!3m2!1ses!2sar!4v1731379938048!5m2!1ses!2sar' : linkMaps} width="100%" height="440" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    <h2 className="title">Subí fotos a tu publicación*</h2>

                    <div className='add__button'>
                        <input className={`${errors.files ? 'error--empty' : ''} button button--add`} id="files" name="files" type="file" onChange={((e) => { sendImageToFirebase(e.target.files[0]); deleteErrorAndClass(e.target.id) })} />
                        {/* <label htmlFor="fotos">Subí fotos a tu publicación </label> */}
                        <div className="autogestion-img-container">
                            {files?.map((foto, index) => {
                                return (<div key={index} className="autogestion-img">
                                    <p>{foto.name}</p>
                                    <button type="button" onClick={(() => handleDeletePhoto(foto.name))}>X</button>
                                </div>)
                            })}
                        </div>

                    </div>

                    <p className='paragraph'>Acepta jpg y png. Hasta 18 fotos.</p>

                    {errors.files && <p className="error--text">Este campo es obligatorio</p>}

                </div>
            </div>
            <div className="button--bar">
                <button type="button" className="button button--previous" onClick={() => { handleBack() }}>Volver al menu</button>
                <button disabled={steps === 3} type="button" className="button button--next" onClick={() => { handleAddStep() }}>Siguiente paso</button>
            </div>

        </>
    )
}

export default StepOne