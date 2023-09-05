import Image from "next/image";


interface featuresdata {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const featuresdata: featuresdata[] = [
    {
        imgSrc: '/images/Features/featureOne.svg',
        heading: 'Agilidad',
        subheading: 'Genera y envía facturas en segundos, sin procesos manuales',
    },
    {
        imgSrc: '/images/Features/featureTwo.svg',
        heading: 'Ahorro',
        subheading: 'Reducción de costos en papel, impresiones y envíos postales',
    },
    {
        imgSrc: '/images/Features/featureThree.svg',
        heading: 'Cumplimiento',
        subheading: 'Cumple con regulaciones fiscales y normativas',
    },
]

const Features = () => {
    return (
        <div className="mx-auto max-w-7xl my-0 md:my-20 pt-36 px-6 relative" id="features-section">
            <div className="radial-bg hidden lg:block"></div>
            <div className="grid lg:grid-cols-2 gap-x-4 gap-y-4">
                {/* Column-1 */}
                <div>
                    
                    <h2 className="text-offblack text-3xl lg:text-5xl font-semibold leading-snug mb-6 text-center md:text-start">Beneficios para tu negocio</h2>
                    <p className="lg:text-lg font-normal text-black text-center md:text-start">Descubre la forma más eficiente y moderna de facturar. Nuestra solución de facturación electrónica ofrece:</p>
                </div>
                {/* Column-2 */}
                 {/* grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32 */}
                <div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 lg:-mr-56 ">
                                    
                        {featuresdata.map((items, i) => (
                            <div className="box_caract bg-blue py-10 pr-12 pl-6 rounded-lg" key={i}>

                                <div className="flex items-center justify-center "> 
                                <div className="rounded-full gg h-16 w-16 flex items-center justify-center mb-10">
                                    <Image src={items.imgSrc} alt={items.imgSrc} width={24} height={30} /> 
                                    
                                </div>
                               
                                </div>
                                
                                <div className="flex items-center justify-center"> 
                                <h5 className="text-black text-lg font-medium mb-4 ">{items.heading}</h5></div>
                                <div className="flex items-center justify-center "> 
                                <p className="text-black text-sm font-normal">{items.subheading}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
