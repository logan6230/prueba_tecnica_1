import Head from "next/head";
import Image from "next/image";
import { title } from "process";
import React from "react";
const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex w-full justify-center">
      <Image className="rounded-lg" src='/img-6.jpg' width={300} height={300} alt="img-contact"/>
      </div>
      
      <h1 className="text-3xl font-bold mb-4">¡Contáctame!</h1>
      <p className="text-lg mb-6">
        Para cualquier consulta o colaboración, no dudes en ponerte en contacto
        conmigo a través de los siguientes medios:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          <span className="font-bold">Correo electrónico:</span>{" "}
          <a href="mailto:pantoja2187@gmail.com" className="text-blue-500">
            pantoja2187@gmail.com
          </a>
        </li>
        <li>
          <span className="font-bold">Teléfono móvil:</span>{" "}
          <a className="text-blue-500">+57 321 312 7957</a>
        </li>
        <li className="mb-2">
          <span className="font-bold">Redes Sociales:</span>
          <ul className="list-disc ml-6">
            <li>
              <a
                href="https://www.youtube.com/@Code-Logan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/logan6230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/segundo-pantoja"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://github.com/logan6230"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                GitHub
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <p className="text-lg mb-6">Ubicacion: Bogota, Colombia.</p>
    </div>
  );
};

export default Contact;
