
const Footer = () => {
    return (
        <section className="footer">
            <section className='footer__content'>
                <div className="footer__logo">
                </div>
                <div className="footer__contacto">
                    <h2>Contacto</h2>
                    <ul>
                        <li className="contacto__wsp">
                            <a className="link" target="_blank" href="https://wa.link/q4e8za">1167173602</a>
                        </li>
                        <li className="contacto__tel">
                            <a className="link" target="_blank" href="tel:54343860">54343860</a>
                        </li>
                        <li className="contacto__mail">
                            <a className="link" target="_blank" href="mailto:grippopropiedades@gmail.com">grippopropiedades@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__ubicacion">
                    <h2>Ubicación</h2>
                    <ul>
                        <li className="ubicacion">
                            <a className="link" target="_blank" href="https://maps.app.goo.gl/fBHNGj7QsE715zvT6">San Lorenzo 1711 - M. Coronado</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__redes">
                    <h2>Redes sociales</h2>
                    <ul>
                        <li className="instagram">
                            <a className="link" target="_blank" href="https://www.instagram.com/inmobiliariagrippo">inmobiliariagrippo</a>
                        </li>
                        <li className="facebook">
                            <a className="link" target="_blank" href="https://www.facebook.com/inmobiliariagrippo">inmobiliariagrippo</a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Footer