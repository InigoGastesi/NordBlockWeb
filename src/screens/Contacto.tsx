import { Formik } from "formik";
import { SMTPClient } from "emailjs";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Footer } from "../components";

export function Contacto() {
  const form = useRef<any>();

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8u7v4mi",
        "template_c9c9c7d",
        form.current,
        "66lqtMz5UFDeg7XFw"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado correctamente");
        },
        (error) => {
          console.log(error.text);
          alert("Ha ocurrido un error, intentelo de nuevo");
        }
      );
  };

  return (
    <div className="w-full font-poppins text-blue">
      <div className="lg:w-1/2 w-5/6 flex flex-col mx-auto py-12">
        <h1 className="font-poppins lg:pb-8 text-center lg:text-left pb-4 font-bold text-3xl">
          Contacto
        </h1>
        <form
          className="grid grid-cols-1 content-around rounded-lg bg-gray-100 shadow-md p-10"
          onSubmit={sendEmail}
          ref={form}
        >
          <span>Nombre</span>
          <input type="text" name="user_name" />
          <span>Email</span>
          <input type="email" name="user_email" />
          <span className="text-poppins ">Mensaje</span>
          <textarea name="message" className="h-40" />
          <div className="flex flex-row justify-center pt-5">
            <button
              type="submit"
              className="bg-blue rounded-full px-12 py-2 text-white text-poppins text-center"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <div className="mt-auto">
        <Footer></Footer>
      </div>
    </div>
  );
}
