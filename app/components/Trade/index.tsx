import Image from "next/image";


const Trade = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">
            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <div>
                    <Image src={'/images/Trade/demo.png'} alt="macBook-image" width={787} height={512} />
                    
                </div>
                

                {/* Column-2 */}

                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-6 text-center sm:text-start">Demo gratuita</h3>
                    <p className="lg:text-lg font-normal text-black mb-16 text-center sm:text-start">¡Explora nuestras capacidades con nuestra demo gratuita! Obtén una probada de lo que ofrecemos sin compromiso alguno. Experimenta la potencia de nuestras herramientas y descubre cómo podemos ayudarte a lograr tus objetivos. No hay mejor manera de experimentar nuestro producto que con nuestras manos libres, y nuestra demo gratuita te brinda esa oportunidad. ¡Comienza tu viaje hoy mismo!</p>
                    <div className="flex justify-between">
                        <Image src={'/images/Trade/computer.svg'} alt="macOS-image" width={61} height={105} />  
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/laptop.svg'} alt="appstore-image" width={80} height={105} />
                        <div className="verticalLine"></div>
                        <Image src={'/images/Trade/cell_phone.svg'} alt="windows-image" width={80} height={105} />
                        
                    </div>
                    
                </div>
                
                
            </div>
            <br/>
            <br/><br/>
                    <div className="flex justify-center ">
                    <a href="#contact-section">
                    <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton'>Probar Demo gratis</button>
                    </a>
                </div>
        </div>
    )
}

export default Trade;
