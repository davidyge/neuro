import './globals.css';
import '@/node_modules/react-modal-video/scss/modal-video.scss';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';




export const metadata = {
  title: 'NEUROSYSTEM',
  description: 'Logotipo para la empresa NEUROSYSTEM',
  alt: 'Logotipo de NEUROSYSTEM',
  icons: {
    icon: '/logo.svg',
    
  },
}
import { FaWhatsapp  } from 'react-icons/fa';
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    /*{children}*/
    return (
      <html lang="es">
        <body>
          <Navbar />
          {children}
          
          <Footer />
          <a
        href="https://wa.link/pzw01y"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon" 
      >
        <FaWhatsapp />
        <span className="contact-message">Contáctanos en WhatsApp</span>
      </a>
         
        </body>
      </html>
    )
  }

  


