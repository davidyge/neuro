import Image from "next/image";

const Contact = () => {
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative">

            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">

                {/* Column-1 */}
                
                <div className="custom-container">
                <center> 
                <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-6 text-center sm:text-start">Contacto</h3>
                    <p className="lg:text-lg font-normal text-black mb-16 text-center sm:text-start">Escribenos y te contactaremos lo mas pronto posible</p>
                    </center>
                                <form className="custom-form" >
                                    <div className="custom-form-group">
                                        <label htmlFor="name">Nombres</label>
                                        <input type="text" className="custom-form-control" id="name" aria-describedby="Nombre" placeholder="Nombre*" />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="email">Correo electrónico</label>
                                        <input type="email" className="custom-form-control" id="email" aria-describedby="Correo" placeholder="Email*" />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="phone">Teléfono</label>
                                        <input type="number" className="custom-form-control" id="phone" placeholder="Teléfono*" />
                                    </div>
                                    <div className="custom-form-group">
                                        <label htmlFor="message">Mensaje</label>
                                        <textarea className="custom-form-control" id="message" rows="4" placeholder="Escribe tu mensaje aquí*" />
                                    </div>
                                    <br />
                                    <button type="submit" className="custom-btn">Enviar</button>
                                </form>
                            </div>


                {/* Column-2 */}

                <div>
                    
                    <div className="location-map">
                                <center><h1 className="text-4xl lg:text-5xl font-bold mb-5 text-black md:4px md:text-start text-center">
                                    Google Maps <br />
                                </h1></center>
                                <div className="map-container">

                                    <iframe
                                        title="Mapa de Ejemplo"
                                        width="100%"
                                        height="600"
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15719.90619344304!2d-76.243562!3d-9.9359091!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91a7c2e68ce57c3d%3A0xfaeb784b95a90c04!2sNeurosystemPeru!5e0!3m2!1ses!2spe!4v1693245080419!5m2!1ses!2spe"
                                        allowFullScreen
                                    ></iframe>

                                </div>


                            </div>
                </div>




            </div>

        </div>
    )
}

export default Contact;
