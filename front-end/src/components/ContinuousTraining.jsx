import React from "react";

const ContinuousTraining = ( {continuous} ) => {

  return (
    <li>
      <div className="text-teal-700 font-bold">{continuous.idselecformacioncontinua}</div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Nombre</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">{continuous.nombrelogro}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Institución</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">{continuous.institucioneducativa}</div>
      </div>

      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Horas</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">{continuous.horasacademicas}</div>
      </div>
      
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Fecha de termino</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">{continuous.fechaexpedicion}</div>
      </div>
    </li>
  );
};

export default ContinuousTraining;
