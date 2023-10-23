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

<Cliente/>

*/



import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Album from './components/album/index';
import Crecimiento from './components/Negocio_crecimiento/index';
import Fac from './components/Facturacion/index';
import Cliente from './components/Clientes/index';



export default function Home() {

  return (
    <main>
      <Banner /> 
      <Companies />
      <Crecimiento/>
      <Fac/>
      <Work />
      <Features />
      <Trade />
      <Simple />
      <Album/>
      <Faq />
      
      <Contact/>

    </main>
  )
}
