"use client"
import Image from 'next/image';

interface workdata {
    imgSrc: string;
    heading: string;
    subheading: string;
    hiddenpara: string;
}

const workdata: workdata[] = [
    {
        imgSrc: '/images/Work/building.svg',
        heading: 'Empresas variadas',
        subheading: 'Únete a empresas que ya aprovechan la facturación electrónica para transacciones más ágiles y precisas. Simplifica tus procesos y cumple con regulaciones fiscales. Envía y gestiona facturas de manera eficiente.',
        hiddenpara: 'Simplifica tus procesos y cumple con regulaciones fiscales. Envía y gestiona facturas de manera eficiente.',
    },
    {
        imgSrc: '/images/Work/setting.svg',
        heading: 'Adaptable a tu empresa',
        subheading: 'El sistema se adpta a tus necesidades y podemos personalizarlo a tu gusto. Personaliza y optimiza tus procesos de facturación. Simplifica la administración y mantén el control. Descubre cómo nuestra tecnología se amolda a tu empresa.',
        hiddenpara: 'Personaliza y optimiza tus procesos de facturación. Simplifica la administración y mantén el control. Descubre cómo nuestra tecnología se amolda a tu empresa.',
    },
    {
        imgSrc: '/images/Work/problem.svg',
        heading: '¿Tienes algún problema?',
        subheading: 'Contamos con el area de soporte las 24 horas del dia y los 7 dias de la semana en nuestra linea de atención al cliente. Resolvemos tus dudas y problemas rápidamente. Estamos aquí para ayudarte a superar cualquier obstáculo. Tu tranquilidad es nuestra prioridad.',
        hiddenpara: 'Resolvemos tus dudas y problemas rápidamente. Estamos aquí para ayudarte a superar cualquier obstáculo. Tu tranquilidad es nuestra prioridad.',
    },
    

]
/*f5f7fd*/
const Work = () => {
    return (
        <div className='tarjetas1 py-1' id='work_section'> 
        <div className='tarjetas bg-gray'> 
          
            <div className='mx-auto max-w-7xl mt-16 px-6 mb-20 relative py-24'>
                <div className="radial-bgone hidden lg:block"></div>
                <div className='text-center mb-14'>
                    <h3 className='text-black text-3xl md:text-5xl font-bold mb-3 mx-auto'>Personalizado a tus necesidades</h3>
                    <p className='text-black md:text-lg font-normal leading-8'>Optimiza tus operaciones comerciales con nuestro moderno sistema de facturación electrónica. <br /> Simplifica tus procesos de facturación y contabilidad mientras te mantienes al día con las regulaciones fiscales.</p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-x-5 mt-32'>

                    {workdata.map((items, i) => (
                        <div className='card-b p-8' key={i}>
                            <div className='work-img-bg rounded-full flex justify-center absolute p-6'>
                                <Image src={items.imgSrc} alt={items.imgSrc} width={44} height={44} />
                            </div>
                            <div>
                                <Image src={'/images/Work/bg-arrow.svg'} alt="arrow-bg" width={85} height={35} />
                                
                            </div>
                            <h3 className='text-2xl text-black font-semibold text-center mt-8'>{items.heading}</h3>
                            <p className='text-base font-normal text-darkblue text-center mt-2'>{items.subheading}</p>
                            <span className="text-base font-normal m-0 text-darkblue text-center hides">{items.hiddenpara}</span>
                        </div>
                    ))}

                </div>

            </div>
        </div>
        </div>
    )
}

export default Work;
