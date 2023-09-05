"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const EmailForm = () => {
  const form = useRef<HTMLFormElement | null>(null);

  // Define un estado para el formulario
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    phone_number: "",
    message: "",
  });

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
    <div>
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
            />
          </div>
          <br />
          <button type="submit" className="custom-btn">SOLICITAR DEMO GRATUITA</button>
        </form>
      </div>
    </div>
  );
};




