import Footer from '@/components/Footer';
import '../css/styles.css'

//LAYOUT ESTATICO - HEADER - FOOTER
export default function RootLayout({ children }) {


  return (
    <html lang="es">
      <body>
        <header className="header">
          <div className="logo--grippo"></div>
        </header>

        {children}

        <Footer />

      </body>
    </html>
  );
}
