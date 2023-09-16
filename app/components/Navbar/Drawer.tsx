
import React, { ReactNode } from "react";
import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from "next/link";

//XMarkIcon ES DEL ICONO DE X
interface DrawerProps {
    children: ReactNode;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}

const Drawer = ({ children, isOpen, setIsOpen }: DrawerProps) => {

    return (
        <main
            className={
                " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
                (isOpen
                    ? " transition-opacity opacity-100 duration-500 translate-x-0  "
                    : " transition-all delay-500 opacity-0 -translate-x-full  ")
            }
        >
           
            <section
            
                className={
                    "w-340px max-w-sm left-0 ggMobile h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform " +
                    (isOpen ? "translate-x-0" : "-translate-x-full")
                }
            >
                <div className="cabecera_m">
     
                    <header className="px-4 py-4 flex items-center justify-between">
                    <div className="flex flex-shrink-0 items-center">
                            <img
                                className="block logo_mcel lg:hidden"
                                src={'/images/Logo/logon.svg'}
                                alt="Crypto-Logo"
                                
                            />
                            

                        </div> 

                        <XMarkIcon className="block h-6 w-6 text-white cursor-pointer" onClick={() => {
                            setIsOpen(false);
                        }} />
                    </header>
                    
                    <div onClick={() => {
                        setIsOpen(false);
                    }}>{children}</div>
          
                
                </div>
                

                
            </section>
            <section
                className="w-screen h-full cursor-pointer "
                onClick={() => {
                    setIsOpen(false);
                }}
            ></section>
        </main>
    );
}

export default Drawer;
