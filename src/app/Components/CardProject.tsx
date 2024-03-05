import Image from "next/image";
import React from "react";
const CardProject = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className=" h-64 overflow-hidden flex justify-center">
              <Image
                width={350}
                height={350}
                alt="content"
                className="object-cover object-center rounded-lg"
                src="/img-2.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Software veterinaria
            </h2>
            <p className="leading-relaxed text-base">
              Consta de un formulario para registrar los datos de la mascota y
              asi poderle agendar una cita, el proyecto esta creado en Js, HTML
              y CSS.
            </p>
            <button className="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
              <a href="https://logan6230.github.io/veterinaria-frontend/index.html" target="_blank">
              Ir ...
              </a>
            </button>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className=" h-64 overflow-hidden flex justify-center">
              <Image
                width={350}
                height={350}
                alt="content"
                className="object-cover object-center rounded-lg"
                src="/img-1.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              The Catalyzer
            </h2>
            <p className="leading-relaxed text-base">
              Proyecto que se desarrollo usando JS y HTML, consiste en una calculadora para realizar las 4 operaciones basicas matematicas.
            </p>

            <button className="flex mx-auto mt-6 text-white bg-yellow-500 border-0 py-2 px-5 focus:outline-none hover:bg-yellow-600 rounded">
              <a href="https://logan6230.github.io/calculadora-frontend/">
                Ir ...
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardProject;
