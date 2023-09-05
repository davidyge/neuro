"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
//https://www.emailjs.com/docs/examples/reactjs/
//https://dashboard.emailjs.com/

const Contact = () => {
    const form = useRef<HTMLFormElement | null>(null);

    // Define un estado para el formulario
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        phone_number: "",
        message: "",
    });

    const [showAlert, setShowAlert] = useState(false); // Estado para controlar la visibilidad de la alerta


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        if (form.current) {
            emailjs
                .sendForm("service_6rzmgza", "template_po03yhg", form.current, "zpzMW5MfVhIqt5eHz")
                .then(
                    (result) => {
                        console.log(result.text);

                        // Limpia el formulario restableciendo los valores de los campos
                        setFormData({
                            user_name: "",
                            user_email: "",
                            phone_number: "",
                            message: "",
                        });
                        // Muestra la alerta de éxito
                        setShowAlert(true);
                        // Oculta la alerta después de 5 segundos (puedes ajustar el tiempo)
                        setTimeout(() => {
                            setShowAlert(false);
                        }, 5000);
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    // Agrega un controlador de eventos para manejar los cambios en los campos del formulario
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        // Actualiza el estado del formulario cuando cambian los valores de los campos
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    return (
        <div className="mx-auto max-w-7xl mt-48 mb-16 px-6 relative" id="contact-section">

            <div className="radial-bgone hidden lg:block"></div>

            <div className="grid lg:grid-cols-2 gap-x-5">

                {/* Column-1 */}

                <div className="">
                    <center>
                        <h3 className="text-3xl lg:text-5xl font-semibold text-black mb-6 text-center sm:text-start">Contacto</h3>
                        <p className="lg:text-lg font-normal text-black mb-16 text-center sm:text-start">Escríbenos y te contactaremos lo más pronto posible</p>
                    </center>
                    <form ref={form} onSubmit={sendEmail} className="custom-form">
                        <div className="custom-form-group">
                            <label htmlFor="name">Nombres</label>
                            <input
                                type="text"
                                className="custom-form-control"
                                id="name"
                                aria-describedby="Nombre"
                                placeholder="Nombre*"
                                name="user_name"
                                value={formData.user_name} // Asocia el valor del campo al estado
                                onChange={handleInputChange} // Maneja el cambio en el campo
                                required
                            />
                        </div>
                        <div className="custom-form-group">
                            <label htmlFor="email">Correo electrónico</label>
                            <input
                                type="email"
                                className="custom-form-control"
                                id="email"
                                aria-describedby="Correo"
                                placeholder="Email*"
                                name="user_email"
                                value={formData.user_email} // Asocia el valor del campo al estado
                                onChange={handleInputChange} // Maneja el cambio en el campo
                                required
                            />
                        </div>
                        <div className="custom-form-group">
                            <label htmlFor="phone">Teléfono</label>
                            <input
                                type="number"
                                className="custom-form-control"
                                id="phone"
                                placeholder="Teléfono*"
                                name="phone_number"
                                value={formData.phone_number} // Asocia el valor del campo al estado
                                onChange={handleInputChange} // Maneja el cambio en el campo
                                required
                            />
                        </div>
                        <div className="custom-form-group">
                            <label htmlFor="message">Mensaje</label>
                            <textarea
                                className="custom-form-control"
                                id="message"
                                rows={4}
                                placeholder="Escribe tu mensaje aquí*"
                                name="message"
                                value={formData.message} // Asocia el valor del campo al estado
                                onChange={handleInputChange} // Maneja el cambio en el campo
                                required
                            />
                        </div>
                        <br />
                        <center> <button type="submit" className="custom-btn">SOLICITAR DEMO GRATUITA</button>
                            <br /><br />

                            {showAlert && (
                                <div className="alert alert-success text-green font-bold" >Mensaje enviado!! 😊</div>
                            )}

                        </center>
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
