import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';

import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';



/*
- /inicio - navbar
- Banner:pantalla principal
- Companies:carrucel de las compañias
- Work: Informacion del trabajo en los 3 cuadros
- Table:lista de informaciòn en una tabla
- Features: caracteristicas del trabajo
- Simple: Una forma sencilla y segura de comprar
- Trade: iconos de sistemas operativos
- Faq: preguntas frecuentes
- / fin - footer

*/


import { FaWhatsappSquare } from 'react-icons/fa';

import { FaWhatsapp  } from 'react-icons/fa';
import Contact from './components/Contact';



export default function Home() {

  return (
    <main>
      <Banner /> 
      <Companies />
      <Work />
      <Features />
      <Simple />
      <Trade />
      <Faq />
      <Contact/>
  
 
      <a
        href="https://wa.link/pzw01y"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp  />
        <span className="contact-message">Contáctanos</span>
      </a>

    </main>
  )
}
