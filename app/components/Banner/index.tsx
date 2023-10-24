"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import ModalVideo from 'react-modal-video';
import Slider from "react-slick";


const Banner = () => {

    const [isOpen, setOpen] = useState(false)

    const [imageIndex, setImageIndex] = useState(0);
    const images = ["/images/Banner/fondos2.png", "/images/Banner/fondos8.png"];

    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
          setFadeIn(false); // Comienza a desvanecer
          setTimeout(() => {
            setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setFadeIn(true); // Comienza a aparecer con la nueva imagen
          }, 700); // tiempo de transparecncia
        }, 3000); // cambios de imagen
    
        return () => {
          clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
        };
      }, [images]);
    
      const currentImage = images[imageIndex];
   
    return (

        /*
        <div className='col-span-5 lg:-m-48'>
                            <Image id="expanding-image" src="/images/Banner/fondos2.png" alt="nothing" width={1013} height={760} style={{ marginTop: '100px' }} /> 
                        </div>
         */
      
      //<div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6" style={{ marginTop: '0px' }}>
      //  <div className='arrowTwo'></div> lineA 25
        <div className='bg-image relative' id="home-section">

            <div className='arrowOne'></div>
            <div className='radial-banner hidden lg:block'></div>
            <ModalVideo channel='youtube' isOpen={isOpen} videoId="QDYSFxEOfz0" onClose={() => setOpen(false)} />

            <div className="mx-auto max-w-7xl pt-16 lg:pt-40 sm:pb-24 px-6">

                <div className='height-work'>
                    <div className='grid grid-cols-1 lg:grid-cols-12 my-16'>

       
                        <div className='col-span-7'>
                            <h1 className="text-4xl lg:text-7xl font-bold mb-5 text-black md:4px md:text-start text-center">
                                Gestion comercial<br /> y Facturación
                            </h1>
                            <p className='text-black md:text-lg font-normal mb-10 md:text-start text-center'>Diseñada para impulsar el crecimiento de tu negocio, <br />simplifica tus procesos diarios, gestiona clientes, productos <br /> y servicios de manera eficiente y emite facturas profesionales.</p>
                            <div className='flex align-middle justify-center md:justify-start'>
                                
                                <button className='text-xl font-semibold text-white py-4 px-6 lg:px-12 navbutton mr-6'>
                                    <a href="https://wa.link/pzw01y" target="_blank">Más información</a></button>
                                
                                <button onClick={() => setOpen(true)} className='bg-transparent flex justify-center items-center text-black'>
                                <Image id="expanding-icono"  src={'/images/Banner/icono.svg'} alt="button-image" className='mr-3' width={47} height={47} />
                                Ver más</button>

                            </div>
                        </div>
                
                        
                        <div className='col-span-5 lg:-m-48 contenedor_b'>
                            <Image id="expanding-image"   src={currentImage}
                                alt={`Imagen ${imageIndex + 1}`}
                                style={{
                                display: "block",
                                marginTop: "100px",
                                transition: "opacity 0.5s ease-in-out", // Transición suave de opacidad
                                opacity: fadeIn ? 1 : 0, // Aplicar opacidad gradualmente
                                }} width={1013} height={760} />
                           
                            
                            <button onClick={() => setOpen(true)} className='btn_b bg-transparent flex justify-center items-center text-black'>
                            <div className='icon_banner_ant'> 
                            <div className='icon_banner'> 
                                <Image id="expanding-icono"  src={'/images/Banner/icono.svg'} alt="button-image"  width={65} height={65} />
                                </div>
                                </div>
                                </button>
    
                        
                        </div>
                      
                        

                        

                    </div>
                    

                </div>
            </div>


        </div>
    )}

export default Banner;
