"use client"
import React, { Component } from "react";
import Slider from "react-slick";

// IMAGES DATA FOR CAROUSEL
interface Data {
    imgSrc: string;
}

const data: Data[] = [
    {
        imgSrc: "/images/Companies/1_san_carlos.png"
    },
    {
        imgSrc: "/images/Companies/2_trapiche_house.png"
    },
    {
        imgSrc: "/images/Companies/3_hotel_fransico.png"
    },
    {
        imgSrc: "/images/Companies/4_primax.png"
    },
    {
        imgSrc: "/images/Companies/5_viajero.png"
    },
    {
        imgSrc: "/images/Companies/6_cevicheria.png"
    },
    {
        imgSrc: "/images/Companies/7_panaderia.png"
    },
]


const dataR: Data[] = [
    {
        imgSrc: "/images/Companies/8_carwash.png"
    },
    {
        imgSrc: "/images/Companies/9_genesis.png"
    },
    {
        imgSrc: "/images/Companies/10_botica.png"
    },
    {
        imgSrc: "/images/Companies/11_calzados.png"
    },
    {
        imgSrc: "/images/Companies/12_licoreria.png"
    },
    {
        imgSrc: "/images/Companies/13_repuestos.png"
    },
    {
        imgSrc: "/images/Companies/14_ferreteria.png"
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

            <div className='text-center bg-lightpink' >
                <div className="mx-auto max-w-2xl py-8 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
                    <div>
                        <Slider {...settings}>
                            {data.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} />  
                                    
                                </div>
                            )}
                        </Slider>
                        <br/>

                        <Slider {...settings2}>
                            {dataR.map((item, i) =>
                                <div key={i}>
                                    <img src={item.imgSrc} alt={item.imgSrc} />  
                                    
                                </div>
                            )}
                        </Slider>

                    </div>
                </div>
            </div>

        )
    }
}
