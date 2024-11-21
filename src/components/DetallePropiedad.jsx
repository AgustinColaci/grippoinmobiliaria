"use client";
import React from 'react';
import useStore from '@/store/useStore';
import Card from "@/components/Card";
import Image from 'next/image';
import iconM from '@/icons/icon--metros2.svg';
import iconMC from '@/icons/icon--metros-cubiertos.svg';
import iconAmbientes from '@/icons/icon--ambientes.svg';
import iconBano from '@/icons/icon--banos.svg';
import iconCocheras from '@/icons/icon--cocheras.svg';
import iconDormitorio from '@/icons/icon--dormitorio.svg';
import iconAlquiler from '@/icons/icon--operacion.svg';
import iconLocalidad from '@/icons/icon--localidad.svg';
import iconMascotas from '@/icons/icon--mascotas.svg';
import iconAntiguedad from '@/icons/icon--antiguedad.svg';
import iconPlantas from '@/icons/icon--plantas.svg';
import iconVista from '@/icons/icon--vista.svg';
import iconOrientacion from '@/icons/icon--orientacion.svg';
import iconAnticipo from '@/icons/icon--anticipo.svg';
import iconCodigo from '@/icons/icon--codigo.svg';

const DetallePropiedad = () => {
    const { steps, property } = useStore();

    function capitalizeFirstLetter(text) {
        if (!text) return ''; // Verifica si la cadena está vacía o es null
        return text.charAt(0).toUpperCase() + text.slice(1);
      }
      

    return (
        <>
            <section className='section__detalle'>
                <h2>Detalle de la propiedad</h2>
                <section className='section__detalle--info'>
                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconM} alt="Icono de metros cuadrados total" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.m2total} m² total</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconMC} alt="Icono de metros cuadrados cubiertos" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.m2cubierto} m² cubierto</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAmbientes} alt="Icono de ambientes" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.ambientes} Ambientes</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconBano} alt="Icono de baño" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.banos} Baño</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconCocheras} alt="Icono de cochera" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.tieneCochera ? `${property.cantidadCocheras} Cochera` :  ' 0 Cochera'}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconDormitorio} alt="Icono de dormitorio" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.dormitorios} Dormitorio</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAlquiler} alt="Icono de alquiler" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{capitalizeFirstLetter(property.tipoOperacion)}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconLocalidad} alt="Icono de localidad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.zona}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconMascotas} alt="Icono de mascotas" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.permiteMascotas ? 'Permite mascotas' : 'No permiten mascotas'}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAntiguedad} alt="Icono de antiguedad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.antiguedad || '0 años'}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconPlantas} alt="Icono de plantas" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.numeroDePlantas} Planta</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconVista} alt="Icono de vista" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{capitalizeFirstLetter(property.ubicacionDelInmueble)}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconOrientacion} alt="Icono de orientación" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.orientacion}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAnticipo} alt="Icono de anticipo" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">{property.anticipo > 0 ? `${property.anticipo}% Anticipo` : 'Sin anticipo'}</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconCodigo} alt="Icono de código de la propiedad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Cod.{property.codigo}</span>
                        </div>
                    </div>

                    <div className='detalle__legales'>
                        <p className='paragraph'>{property.detalle}</p>
                    </div>
                </section>
                <section className='section__similares'>
                    <h2 className='title'>Propiedades Similares</h2>
                    <Card />
                </section>
            </section>
        </>
    );
}

export default DetallePropiedad;