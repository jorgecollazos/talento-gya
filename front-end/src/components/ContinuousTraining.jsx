import React from "react";
import EditContinuousTraining from "@components/EditContinuousTraining"

const ContinuousTraining = ( {continuous} ) => {

  return (
    <li>
      <div className="flex justify-between items-center space-x-2 font-semibold text-lg text-teal-700 leading-8">
        <div className="flex justify-start">
          <div>{continuous.idselecformacioncontinua}: {continuous.nombrelogro}</div>
        </div>
        <div><EditContinuousTraining continuous={continuous} /></div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Institución</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{continuous.institucioneducativa}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Horas</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{continuous.horasacademicas}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Fecha de termino</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{continuous.fechaexpedicion}</div>
      </div>
    </li>
  );
};

export default ContinuousTraining;
