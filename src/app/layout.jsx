import Footer from '@/components/Footer';
import Card from "@/components/Card";
import '@/css/styles.css'

//LAYOUT ESTATICO - HEADER - FOOTER
export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <section className="viewport">
          <header className="header">
            <div className="logo--grippo"></div>
          </header>

          {children}

          {/* <section className="section__cards"> */}

            {/* LA CARD SE VE EN TODOS LADOS PORQUE EL LAYOUT ESTA EN TODA LA PAGINA */}
            {/* <Card /> */}
          {/* </section> */}
        </section>
        <Footer />
      </body>
    </html>
  );
}
