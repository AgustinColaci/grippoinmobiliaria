
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
                            <a className="link" href="#">+54 11 11111111</a>
                        </li>
                        <li className="contacto__mail">
                            <a className="link" href="#">mail@mail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__ubicacion">
                    <h2>Ubicación</h2>
                    <ul>
                        <li className="ubicacion">
                            <a className="link" href="#">+54 11 11111111</a>
                        </li>
                    </ul>
                </div>
                <div className="footer__redes">
                    <h2>Redes sociales</h2>
                    <ul>
                        <li className="instagram">
                            <a className="link" href="#">Instagram</a>
                        </li>
                        <li className="facebook">
                            <a className="link" href="#">Facebook</a>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    )
}

export default Footer