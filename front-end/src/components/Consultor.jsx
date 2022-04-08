import React from "react";

const Consultor = ({ consultor }) => {
  console.log("consutor componente", consultor);
  return (
    <li>
      <div className="flex justify-between items-center space-x-2 font-semibold text-lg text-teal-700 leading-8">
        <div className="flex justify-start">
          <div>{consultor.primernombre}</div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">
          Telefono
        </div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">
          {consultor.numerocelular1}
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">
          
          N de documento
        </div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">
          {consultor.numerodedocumento}
        </div>
      </div>
    </li>
  );
};

export default Consultor;
