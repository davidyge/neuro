import { Disclosure } from '@headlessui/react';

import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import Drawer from "./Drawer";
import Drawerdata from "./Drawerdata";

import { Routes, Route } from 'react-router-dom';

import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import {Outlet} from "react-router-dom";


import { useContext } from 'react'
import { Link } from 'react-router-dom'



// import Contactusform from './Contactus';



interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
    
}

const navigation: NavigationItem[] = [
    { name: 'Inicio', href: '#home-section', current: false },
    { name: 'Servicios', href: '#facturacion', current: false },
    { name: 'Demo', href: '#demo', current: false },
    { name: 'Soluciones', href: '#industrias', current: false },
    { name: 'Contacto', href: '#contact-section', current: false },
    
]





function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
    const handleCallSupport = () => {
        const phoneNumber = "997578199"; // Coloca aquí el número de teléfono al que deseas llamar //soporte
        window.location.href = `tel:${phoneNumber}`;
    }

    const [isOpen, setIsOpen] = React.useState(false);

    return (
        
        <Disclosure as="nav" className="navbar">
            <>

                <div className="mx-auto max-w-7xl p-3 md:p-4 lg:px-8">
                    <div className="relative flex h-12 sm:h-20 items-center">
                        <div className="flex flex-1 items-center sm:justify-between">

                            {/* LOGO */}

                            <div className="flex flex-shrink-0 items-center">
                                <img
                                    className="block logo_navmcel lg:hidden"
                                    src={'/images/Logo/logon.svg'}
                                    alt="Crypto-Logo"
                                />
                                <img
                                    className="hidden logo_navgr lg:block"
                                    src={'/images/Logo/logon.svg'}
                                    alt="Crypto-Logo"
                                />
                            </div>

                            {/* LINKS */}

                            <div className="hidden lg:flex items-center border-right ">
                                <div className="flex justify-end space-x-4">
                              
                                    {navigation.map((item) => (
                                        <a 
                                            key={item.name}
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-900' : 'navlinks text-white hover:text-offwhite hover-underline',
                                                'px-3 py-4 rounded-md text-lg font-normal'
                                            )}
                                            aria-current={item.href ? 'page' : undefined}
                                             >
                                            {item.name}  

                                        </a>
                                    ))}
                                </div>

                            </div>

                            <button
                        className='soporte hidden lg:flex justify-end text-xl font-semibold py-4 px-6 lg:px-12 text-black'
                        onClick={handleCallSupport}
                    >
                        Soporte
                    </button>
                            {/* <Contactusform /> */}
                        </div>


                        {/* DRAWER FOR MOBILE VIEW */}

                        {/* DRAWER ICON */}

                        <div className='block lg:hidden'>
                            <Bars3Icon className="block h-6 w-6 text-white cursor-pointer" aria-hidden="true" onClick={() => setIsOpen(true)} />
                        </div>

                        {/* DRAWER LINKS DATA */}

                        <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
                            <Drawerdata/>
                        </Drawer>

                    </div>
                </div>
            </>
        </Disclosure>
    )
}

export default Navbar;
