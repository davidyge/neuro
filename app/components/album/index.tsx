"use client"
import Image from 'next/image';
import React, { useState } from 'react';

const Album = () => {

    const [mostrarMas, setMostrarMas] = useState(false);

    const workdata = [
        {
            imgSrc: '/images/Rubros/restaurante.webp',
            title: 'Restaurante'
        },
        {
            imgSrc: '/images/Rubros/farmacia.webp',
            title: 'Farmacia'
        },
        {
            imgSrc: '/images/Rubros/ferreteria.webp',
            title: 'Ferreteria'
        },
        {
            imgSrc: '/images/Rubros/taller.webp',
            title: 'Taller'
        },
        {
            imgSrc: '/images/Rubros/supermercado.webp',
            title: 'Supermercado'
        },
        {
            imgSrc: '/images/Rubros/grifo.webp',
            title: 'Grifo'
        },
        {
            imgSrc: '/images/Rubros/colegio.webp',
            title: 'Colegio'
        },
        {
            imgSrc: '/images/Rubros/comercio.webp',
            title: 'Comercio'
        },
        {
            imgSrc: '/images/Rubros/clinica.webp',
            title: 'Clínica'
        },
        {
            imgSrc: '/images/Rubros/notaria.webp',
            title: 'Notaría'
        },
        {
            imgSrc: '/images/Rubros/instituto.webp',
            title: 'Instituto'
        },
        {
            imgSrc: '/images/Rubros/servicios.webp',
            title: 'Servicios',
            alt: 'Imagen de servicios publicos'
        },
        {
            imgSrc: '/images/Rubros/agencia.webp',
            title: 'Agencia'
        },
        {
            imgSrc: '/images/Rubros/hotel.webp',
            title: 'Hotel'
        },
        {
            imgSrc: '/images/Rubros/transporte.webp',
            title: 'Transporte'
        },
        {
            imgSrc: '/images/Rubros/vidrieria.webp',
            title: 'Vidriería'
           
        },
    ];

    const primerasFilas = workdata.slice(0, 8);
    const filasRestantes = workdata.slice(8);

    const toggleMostrarMas = () => {
        setMostrarMas(!mostrarMas);
    }
    return (
        <div className='cab_1 py-20 ' id="industrias">

            <div className='text-center mb-14 b_industria'>
                <h3 className='text-black text-3xl md:text-5xl font-bold mb-3 mx-auto py-4'>Industrias Neurosoft</h3>
                <p className='text-black md:text-3xl font-normal leading-8'>Tenemos sistemas para todo tipo de empresas.</p>
            </div>


            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-15 max-w-7xl relative mx-auto'>
                
            

                {primerasFilas.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <center>
                            <a href="https://wa.link/pzw01y" target="_blank">
                                <h3 className="titulo text-xl font-bold py-0">{item.title}</h3>
                                <Image
                                    className="clients bg-blue-500 rounded-lg overflow-hidden shadow-2xl opacity-100 hover:opacity-80 transition-opacity"
                                    src={item.imgSrc}
                                    alt={item.title}
                                    width={320}
                                    height={320}
                                    
                                />
                            </a>
                        </center>
                    </div>
                ))}


                {mostrarMas && filasRestantes.map((item, index) => (
                    <div className="col-span-1" key={index}>
                        <center>
                            <a href="https://wa.link/pzw01y" target="_blank">
                                <h3 className="titulo text-xl font-bold py-0">{item.title}</h3>
                                <Image
                                    className="clients bg-blue-500 rounded-lg overflow-hidden shadow-2xl opacity-100 hover:opacity-80 transition-opacity"
                                    src={item.imgSrc}
                                    alt={`Imagen de ${item.title}`}
                                    width={320}
                                    height={320}
                                />
                            </a>
                        </center>
                    </div>
                ))}

            </div>

            {filasRestantes.length > 0 && (
                    
                    <div className="text-center mt-5 flex justify-center">
                      
                        <button
                            onClick={toggleMostrarMas}
                            className="text-xl font-semibold text-white py-4 px-10 lg:px-12 despliegue navbutton"
                        >
                            {mostrarMas ? 'Ver Menos' : 'Ver Más'}
                        </button>
                       
                    </div>
                    
                )}
        </div>

    )
}

export default Album;

