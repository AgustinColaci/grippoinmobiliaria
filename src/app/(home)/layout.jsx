import Footer from '@/components/Footer';
import '@/css/styles.css'

//LAYOUT ESTATICO - HEADER - FOOTER
export default function RootLayout({ children }) {

  return (
    <html lang="es">
      <body>
        <section className="viewport">
          <header className="header">
            <a href="./">
              <div className="logo--grippo">
              </div>
            </a>
          </header>

          {children}
        </section>
        <Footer />
      </body>
    </html>
  );
}
