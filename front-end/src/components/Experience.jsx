import React from "react";

const Experience = () => {
  return (
    <li>
      <div className="text-teal-700 font-bold">Consultor</div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Empresa</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">Becas BCP</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Periodo</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">01/09/2020 - 31/12/2020</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 px-2 py-2 font-semibold">Funciones</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 px-2 py-2">
          <ul>
            <li>
            Programa Lab Social. Contribuyo en la organización social, enlazando, pueda reinventarse y multiplicar su impacto social y ambiental utilizando la metodología de Design Thinking.
            </li>
            <li>
            Programa Lab Social. Contribuyo en la organización social, enlazando, pueda reinventarse y multiplicar su impacto social y ambiental utilizando la metodología de Design Thinking.
            </li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Experience;
