import React from "react";
import Link from "next/link";

interface NavigationItem {
    name: string;
    href: string;
    current: boolean;
}

const navigation: NavigationItem[] = [
    { name: 'Inicio', href: '#home-section', current: false },
    { name: 'Servicios', href: '#exchange-section', current: false },
   // { name: 'Features', href: '#features-section', current: false },
    { name: 'Demo', href: '#faq-section', current: false },
]
//navyblue
function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const Data = () => {
    return (
        <div className="rounded-md max-w-sm w-full">
            <div className="flex-1 space-y-4 py-1">
                <div className="sm:block">
                    <div className="space-y-1 px-5 pt-2 pb-3">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-purple' : 'text-black hover:bg-gray-700 hover:text-purple',
                                    'block  py-2 rounded-md text-base font-medium'
                                )}
                                aria-current={item.current ? 'page' : undefined}
                            >
                                {item.name}
                            </Link>
                        ))}
                        
                       
                        <center>
                        <button className='text-x font-semibold text-white py-3 px-3 lg:px-8 navbutton2 mr-6'>Contáctenos</button>
                        </center>



                    </div>
                </div>
            </div>
        </div>
    );
}

export default Data;
