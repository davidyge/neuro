"use client"
import React from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const Faq2 = () => {
  
const faqdata = [
  {
    question: "1. ¿Es posible migrar sin problemas desde mi sistema actual a su software a medida?",
    answer: "Por supuesto, puedes empezar a trabajar con nosotros sin problemas y continuar la numeración de tus recibos electrónicos. Nos encargaremos de ingresar los detalles de tus productos en nuestros sistemas. La única solicitud que tenemos es que nos entregues la lista de tus productos en un archivo Excel.",
  },
  {
    question: "2. ¿Será necesario realizar un pago inicial o estar comprometido con un contrato de 6 o 12 meses como parte de este servicio?",
    answer: "No requerimos contratos vinculantes que te obliguen a mantener nuestros servicios. Puedes optar por diferentes frecuencias de pago, como mensual o trimestral, con total flexibilidad. No tienes ninguna obligación de renovar el servicio si no estás contento, y si decides cambiar a otro proveedor, podrás transferir tus datos de productos y recibos sin complicaciones.",
  },
  {
    question: "3. ¿Habrá algún costo relacionado con la instalación o la adquisición de equipos específicos?",
    answer:
      "No se requerirá invertir en costos de instalación ni comprar equipos costosos para empezar a emitir comprobantes electrónicos.",
  },
  {
    question: "4. ¿Ustedes manejan multiples precios por cada producto?",
    answer:
      "Claro, ofrecemos la opción de gestionar múltiples precios para cada producto. Esta funcionalidad está diseñada pensando especialmente para tu negocio, y estamos seguros de que te resultará muy beneficiosa.",
  },
];
  return (

    <div className="my-20 px-6 bg-gray py-24" id="faq-section">
            <h3 className="text-center text-3xl lg:text-5xl font-bold text-black mb-3">Preguntas frecuentes</h3>
            <p className="text-center lg:text-lg font-normal text-black">Encuentra respuestas rápidas y fiables a las preguntas más comunes sobre el proceso de emisión y recepción de facturas electrónicas. 
            <br />Simplifica tu experiencia y ahorra tiempo con facturación electrónica NeuroSoft</p>

            <div className="mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2">

                    {/* Column-1 */}
                    <div>

      <div className="contenedor_box w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex box_caja items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 text-white">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="flex2 px-4 pt-4 pb-2text-gray-500 dark:text-gray-300">
                    {item.answer}

                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
      </div>

      {/* Column-2 */}
      <div className="mt-20 ml-0" style={{ width: '120%', height: '120%' }}>
                        <Image src={'/images/Faq/faq9.png'} alt="faq-image" width={1200} height={1200} />
                    </div>

</div>
</div>

    </div>
  );
}


export default Faq2;

