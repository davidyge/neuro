"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";


const Fac = () => {


    const [facturacion, setfacturacion] = useState(true);
    const [puntodeventa, setpuntodeventa] = useState(false);

    const [isHuanucoActive, setIsHuanucoActive] = useState(true);
    const [isPucallpaActive, setIsPucallpaActive] = useState(false);

    const handlefacturacion = () => {
        setfacturacion(true);
        setpuntodeventa(false);

        setIsHuanucoActive(true);
        setIsPucallpaActive(false);
    };

    const handlepuntodeventa = () => {
        setfacturacion(false);
        setpuntodeventa(true);

        setIsHuanucoActive(false);
        setIsPucallpaActive(true);
    };


    return (
        <div className="factura py-20 " id="facturacion">
            
            <div className="mx-auto max-w-7xl py-10 mb-16 px-6 relative"   >
           
                <div className="radial-bgone hidden lg:block"></div>
                
                <div className="grid gap-x-5">

                    {/* Column 2*/}

                    
                    <div>

                        
                        {/* Agregar botones para mostrar ubicaciones */}
                        <div className='text-center mb-14'>
                    <h3 className='text-black text-3xl md:text-5xl font-bold mb-3 mx-auto'>Nuestros servicios</h3>
                </div>

                        <div className="text-center flex flex-col md:flex-row justify-center ">
                            <button onClick={handlefacturacion} className={`custom-btn2 md:mr-2 font-bold  ${isHuanucoActive ? 'active' : ''}`}>Facturación Electrónica</button>
                            <button onClick={handlepuntodeventa} className={`custom-btn2 m  ${isPucallpaActive ? 'active' : ''}`}>Punto de Venta y Caja</button>
                        </div>


                        {/* Mostrar ubicaciones según el botón presionado */}
                        {facturacion && (

                            <div className="location-map mt-8 grid lg:grid-cols-2 gap-x-0">
                                <div className="bg-blue_tranp borde_f_azul flex justify-center items-center h-full ">

                                    <Image className="py-5 px-5" src={'/images/Facturacion/f_basico.webp'} alt="imagen de facturacion basica" width={520} height={312} />
                                </div>


                                <div className="bg-gray px-8  justify-center h-full ">

                                    <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-6 text-center sm:text-start mt-10">Sistemas para emitir comprobantes electronicos</h3>
                                    <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                     Neurosoft es una solución integral para la administración de ventas y cierre de caja, empleada por numerosas compañías en diversas regiones de Perú
                                    </p>

                                    <div className="flex items-center">
                                        <Image
                                            className="vendedor flex-shrink-0"
                                            src={'/images/Facturacion/cheque.webp'}
                                            alt="imagen de check"
                                            width={26}
                                            height={26}
                                        />
                                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                        Funcionando completamente en la nube.
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <Image
                                            className="vendedor flex-shrink-0"
                                            src={'/images/Facturacion/cheque.webp'}
                                            alt="imagen de check"
                                            width={26}
                                            height={26}
                                        />
                                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                        Accesible a través de Web, Android y IOS.
                                        </p>
                                    </div>

                                    <div className="flex items-center">
                                        <Image
                                            className="vendedor flex-shrink-0"
                                            src={'/images/Facturacion/cheque.webp'}
                                            alt="imagen de check"
                                            width={26}
                                            height={26}
                                        />
                                        <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                        Poseemos la certificación como proveedores autorizados por SUNAT (PSE).
                                        </p>
                                    </div>
                                </div>

                            </div>
                        )}

                        {puntodeventa && (
                              <div className="location-map mt-8 grid lg:grid-cols-2 gap-x-5">
                              <div className="bg-blue_tranp borde_f_azul flex justify-center items-center h-full ">

                                  <Image className="py-5 px-5" src={'/images/Facturacion/f_avanzado.webp'} alt="imagen de punto de venta" width={520} height={312} />
                              </div>


                              <div className="bg-gray ">

                                  <h3 className="text-3xl lg:text-4xl font-semibold text-black mb-6 text-center sm:text-start mt-10">Plataforma con Punto de Venta, Caja, Inventarios y Reportes</h3>
                                  <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                  Con Neurosoft Plus tendrás una amplia gama de módulos que te permitirán gestionar tu empresa de una manera eficaz y confiable.
                                  </p>

                                  <div className="flex items-center">
                                      <Image
                                          className="vendedor flex-shrink-0"
                                          src={'/images/Facturacion/cheque.webp'}
                                          alt="imagen de check"
                                          width={26}
                                          height={26}
                                      />
                                      <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                      100% en la nube
                                      </p>
                                  </div>

                                  <div className="flex items-center">
                                      <Image
                                          className="vendedor flex-shrink-0"
                                          src={'/images/Facturacion/cheque.webp'}
                                          alt="imagen de check"
                                          width={26}
                                          height={26}
                                      />
                                      <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                      Punto de Venta y Cajas
                                      </p>
                                  </div>

                                  <div className="flex items-center">
                                      <Image
                                          className="vendedor flex-shrink-0"
                                          src={'/images/Facturacion/cheque.webp'}
                                          alt="imagen de check"
                                          width={26}
                                          height={26}
                                      />
                                      <p className="lg:text-lg font-normal text-black py-3 ml-2 sm:text-left">
                                      Kardex
                                      </p>
                                  </div>
                              </div>

                          </div>
                        )}


                    </div>




                </div>

            </div>
        </div>
    )
}

export default Fac;
