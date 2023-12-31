"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/1_san_carlos.webp"
    },
    {
        imgSrc: "/images/Companies/2_trapiche_house.webp"
    },
    {
        imgSrc: "/images/Companies/3_hotel_fransico.webp"
    },
    {
        imgSrc: "/images/Companies/4_primax.webp"
    },
    {
        imgSrc: "/images/Companies/5_viajero.webp"
    },
    {
        imgSrc: "/images/Companies/6_cevicheria.webp"
    },
    {
        imgSrc: "/images/Companies/7_panaderia.webp"
    },
]


const dataR: Data[] = [
    {
        imgSrc: "/images/Companies/8_carwash.webp"
    },
    {
        imgSrc: "/images/Companies/9_genesis.webp"
    },
    {
        imgSrc: "/images/Companies/10_botica.webp"
    },
    {
        imgSrc: "/images/Companies/11_calzados.webp"
    },
    {
        imgSrc: "/images/Companies/12_licoreria.webp"
    },
    {
        imgSrc: "/images/Companies/13_repuestos.webp"
    },
    {
        imgSrc: "/images/Companies/14_ferreteria.webp"
    },
]





// CAROUSEL SETTINGS
export default class MultipleItems extends Component {
    render() {
        // const reversedData = [...data].reverse(); : ESTE ES PARA QUE LAS IMAGENES CAMBIEN SU ORDEN
        
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            rtl: false, //MOVIMIENTO HACIA LA DERECHA (true)
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        const settings2 = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            rtl: true, //MOVIMIENTO HACIA LA DERECHA (true)
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };
        return (

            <div className='text-center bg-lightpink mt-10' >
                <h2 className='text-black text-3xl md:text-5xl font-bold mb-3 mx-auto'>Nuestross clientes</h2>
                <p className="text-center text-black text-2xl font-normal mb-4">
                   Algunos de nuestros cientos de Clientes en todo el Perú</p>
                
                <div className="mx-auto max-w-2xl py-8 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} width={200} height={100} loading="lazy"/>    
                                </div>
                            )}
                        </Slider>
                        <br/>

                        <Slider {...settings2}>
                            {dataR.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} width={200} height={100} loading="lazy"/>  
                                    
                                </div>
                            )}
                        </Slider>

                    </div>
                </div>
            </div>

        )
    }
}
