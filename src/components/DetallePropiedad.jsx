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
    const { steps } = useStore();

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
                            <span className="text mts">44 m² total</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconMC} alt="Icono de metros cuadrados cubiertos" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">20 m² cubierto</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAmbientes} alt="Icono de ambientes" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">2 Ambientes</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconBano} alt="Icono de baño" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">1 Baño</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconCocheras} alt="Icono de cochera" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">1 Cochera</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconDormitorio} alt="Icono de dormitorio" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">1 Dormitorio</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAlquiler} alt="Icono de alquiler" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Alquiler</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconLocalidad} alt="Icono de localidad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Localidad</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconMascotas} alt="Icono de mascotas" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">No permiten mascotas</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAntiguedad} alt="Icono de antiguedad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">20 años</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconPlantas} alt="Icono de plantas" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">1 Planta</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconVista} alt="Icono de vista" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Frente</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconOrientacion} alt="Icono de orientación" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Noroeste</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconAnticipo} alt="Icono de anticipo" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">50% Anticipo</span>
                        </div>
                    </div>

                    <div className='detalle__propiedad'>
                        <div className='detalle__propiedad--icon'>
                            <Image src={iconCodigo} alt="Icono de código de la propiedad" />
                        </div>
                        <div className='detalle__propiedad--text'>
                            <span className="text mts">Cod.123</span>
                        </div>
                    </div>

                    <div className='detalle__legales'>
                        <p className='paragraph'>VENTA Departamento monoambiente a estrenarsituado en un punto estratégico de la ciudad de Villa Bosch. A cuatrocientos metros de la estación de tren villa Bosch del ferrocarril Urquiza (que te lleva a la estación Federico Lacroze en 27 minutos), en dirección contraria nos acerca a la terminal general Lemos. En la estación Villa Bosch, contamos con cuatro ramales de colectivos, que nos facilitan el traslado a, caseros, San Martín, Loma Hermosa, Podestá.La propiedad cuenta con un gran caudal de luz, gracias a las ventanas de piso a techo con doble vidrio DVH laminado, cumpliendo con tres roles muy importantes, en primer lugar el ya mencionado aprovechamiento de la luz natural, en segundo lugar brinda una mayor seguridad, y por último, aislamiento acústico, que se traduce en un manto de Paz y tranquilidad.El suelo de porcelanato rectificado similar a la madera le suma una profunda sensación de calidez y elegancia.</p>
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