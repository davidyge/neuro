// Importa los componentes necesarios
import Banner from './components/Banner/index';
import Companies from './components/Companies/index';
import Work from './components/Work/index';

import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Faq from './components/Faq/index';

import Contact from './components/Contact';
import Album from './components/album/index';
import Crecimiento from './components/Negocio_crecimiento/index';
import Fac from './components/Facturacion/index';

// Define el componente principal
export default function Home() {
  return (
    <main>
      <Banner/> 
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
