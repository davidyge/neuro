import Image from "next/image";


const Crecimiento = () => {
    return (
        <div className="mx-auto max-w-8xl mt-16 px-6 mb-20 relative py-0 bg-gray">
        <div className="mx-auto max-w-7xl mt-16 px-6 mb-20 relative py-10">

            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">
                {/* Column-1 */}
                <div>
                    <Image className="vendedor shadow-md" src={'/images/Negocio_crecimiento/vender.webp'} alt="macBook-image" width={470} height={462} />

                </div>


                {/* Column-2 */}

                <div>
                    <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-6 text-center sm:text-start mt-10"> Haz crecer tu negocio</h3>
                    <h6 className="text-2xl lg:text-2xl font-semibold text-black mb-6 text-center sm:text-start"> Sistema diseñado para emprendedores y pequeños negocios.</h6>

                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                            Organiza de forma fácil tus ingresos y salidas del efectivo.
                        </p>
                    </div>


                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                        Crea y gestiona tu inventario en minutos.
                        </p>
                    </div>


                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                        Controla tu efectivo donde quiera que estés.
                        </p>
                    </div>


                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                        Emite tus comprobantes de pago desde tu celular.
                        </p>
                    </div>


                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                        Acelera el proceso de pago y mejorar la liquidez del negocio.
                        </p>
                    </div>


                    <div className="flex items-center">
                        <Image
                            className="vendedor flex-shrink-0"
                            src={'/images/Negocio_crecimiento/check.webp'}
                            alt="macBook-image"
                            width={26}
                            height={26}
                        />
                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                        Crea y envía tus boletas de venta y facturas electrónicas al instante.
                        </p>
                    </div>


                </div>


            </div>
            
            <br />
            <br /><br />


            {/* <div className='btn_asesor flex align-middle  justify-center mx-auto'>
                                
                                <button className='text-xl font-semibold text-white py-4 px-10 lg:px-12 despliegue navbutton'>
                                    <a href="https://wa.link/pzw01y" target="_blank">Contacto a un asesor</a></button>

                            </div>*/}
      
            
                         
        </div>
        </div>
        
        
    )
}

export default Crecimiento;
