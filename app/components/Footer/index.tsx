import Image from "next/image";
import Link from "next/link";

// MIDDLE LINKS DATA
interface ProductType {
  id: number;
  section: string;
  link: string[];
}

interface Social {
  imgsrc: string,
  href: string,
}

const products: ProductType[] = [
  {
    id: 1,
    section: "Soluciones",
    link: ['Factura Electronica', 'Desarrollos a medida', 'Negocio','Registro e importación de productos'],
  }
]

const socialLinks: Social[] = [
  { imgsrc: '/images/Footer/insta.svg', href: "https://www.instagram.com/neurosoftperu/" },
  { imgsrc: '/images/Footer/facebook.svg', href: "https://www.facebook.com/neurosoft.tech/" },
  { imgsrc: '/images/Footer/tiktok.svg', href: "https://www.tiktok.com/@neurosoftperu"},
  { imgsrc: '/images/Footer/youtube.svg', href: "https://www.youtube.com/@NeuroSoftPeru/featured" },
]


const footer = () => {
 
  return (
    <div className="footer relative">
      
      <div className="radial-bg hidden lg:block"></div>
      <div className=" mx-auto max-w-2xl mt-64 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="footer2"><h1><br/></h1></div>
        <div className="mt-24 grid grid-cols-1 gap-y-10 gap-x-16 sm:grid-cols-2 lg:grid-cols-12 xl:gap-x-8">

          {/* COLUMN-1 */}

          <div className='col-span-6'>
            <center>
            <img
              className="block h-50 w-100px mb-4"
              src={'/images/Logo/logos.png'}
              alt="Crypto-Logo"
            /></center>
            <h3 className='text-white text-sm font-normal leading-9 mb-4 lg:mb-16'>Estamos aquí para ayudarte. Te asignaremos un asesor personal para que te guía en todo el proceso de aprendizaje y/o puedas consultar con el cualquier duda que tengas
            </h3>
            <h3 className="text-white text-xl font-medium mb-5">Nuestras redes sociales</h3>
            <div className='flex gap-4'>
              {socialLinks.map((items, i) => (
                <Link href={items.href} key={i} target="_blank">
                  <div className='icon-container'>
                    
                  <img src={items.imgsrc} alt={items.imgsrc} className='footer-icons' />
                  </div>
                  </Link>
              ))}
            </div>
            
          </div>

          {/* CLOUMN-2/3 */}

          {products.map((product) => (
            <div key={product.id} className="group relative col-span-2">
              <p className="text-white text-xl font-medium mb-9">{product.section}</p>
              <ul>
                {product.link.map((link: string, index: number) => (
                  <li key={index} className='mb-5'>
                    <Link href="/" className="text-offwhite  text-sm font-normal mb-6 space-links">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-4">
          
            <h3 className="text-white text-xl font-medium mb-9">Contáctenos</h3>
            

            
            
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2" >
              <Image src={'/images/Footer/number.svg'} alt="number-icon" width={20} height={20} />
               <a href={`tel:964035352`} className="text-offwhite">964035352</a> 
            </h4>

            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2">
            <Image src={'/images/Footer/email.svg'} alt="email-icon" width={20} height={20} />
            <a href={'mailto:dgonzalesespinoza2.20@gmail.com'} className="text-offwhite">ventas@neurosystemperu.com</a>

            </h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Huánuco: Jr. 28 de Julio 313</h4>
            <h4 className="text-offwhite text-sm font-normal mb-6 flex gap-2"><Image src={'/images/Footer/address.svg'} alt="address-icon" width={20} height={20} />Pucallpa: Jr. TARAPACA 896</h4>
           
          </div>

        </div>
      </div>

      {/* All Rights Reserved */}

      <div className='py-8 px-4 border-t border-t-lightblue'>
        <h3 className='text-center text-offwhite'>@Copyright-2023 <Link href="https://adminmart.com/" target="_blank"> </Link></h3>
      </div>

    </div>
  )
}

export default footer;
