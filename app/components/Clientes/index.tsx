"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Cliente = () => {



    const workdata = [
        {
            imgSrc: '/images/Rubros/restaurante.png',
            title: 'Restaurante'
        },
        {
            imgSrc: '/images/Rubros/farmacia.png',
            title: 'Farmacia'
        },
        {
            imgSrc: '/images/Rubros/ferreteria.png',
            title: 'Ferreteria'
        },
        {
            imgSrc: '/images/Rubros/taller.png',
            title: 'Taller'
        },
        {
            imgSrc: '/images/Rubros/supermercado.png',
            title: 'Supermercado'
        },
        {
            imgSrc: '/images/Rubros/grifo.png',
            title: 'Grifo'
        },
        {
            imgSrc: '/images/Rubros/colegio.png',
            title: 'Colegio'
        },
        {
            imgSrc: '/images/Rubros/comercio.png',
            title: 'Comercio'
        },
  
 
    ];

    return (
        <div className='cab_1 py-20 ' id="industrias">

            <div className='text-center mb-14 b_industria'>
                <h3 className='text-black text-3xl md:text-5xl font-bold mb-3 mx-auto py-4'>Ellos confian en nosotros </h3>
                <p className='text-black md:text-3xl font-normal leading-8'>Tenemos sistemas para todo tipo de empresas.</p>
            </div>


            <div className=' grid md:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-15 max-w-7xl relative mx-auto'>
                

                {workdata.map((item, index) => (
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

            </div>

        </div>

    )
}

export default Cliente;

