import '../css/styles.css'

//LAYOUT ESTATICO - HEADER - FOOTER
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <header className="header">
          <img className="logo--grippo"></img>
        </header>

        <section className='section__banner'>
          <div className='filtros'>
            <label for="operacion"></label>
              <select id="operacion">
                  <option value="tipo-de-operacion">Tipo de operación</option>
                  <option value="venta">Venta</option>
                  <option value="alquiler">Alquiler</option>
              </select>
            <label for="inmueble"></label>
            <select id="inmueble">
                <option value="tipo-de-inmueble">Tipo de inmueble</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
            </select>
            <label for="ambientes"></label>
            <select id="ambientes">
                <option value="cantidad-de-ambientes">Cantidad de ambientes</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
            </select>
            <label for="valor-min"></label>
            <select id="valor-min">
                <option value="valor-minimo">Valor mínimo</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
            </select>
            <label for="valor-max"></label>
            <select id="valor-max">
                <option value="valor-maximo">Valor máximo</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
            </select>
            <label for="moneda"></label>
            <select id="moneda">
                <option value="moneda">Moneda</option>
                <option value="op2">op2</option>
                <option value="op3">op3</option>
            </select>
            <div className="search--button"></div>
          </div>
        </section>

        <section className="footer">
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
      </body>
    </html>
  );
}
