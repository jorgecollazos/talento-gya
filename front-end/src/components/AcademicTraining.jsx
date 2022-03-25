import React from "react";
import EditAcademicTraining from "@components/EditAcademicTraining";

const AcademicTraining = ( {academic} ) => {
  return (
    <li>
      <div className="flex justify-between items-center space-x-2 font-semibold text-lg text-teal-700 leading-8">
        <div className="flex justify-start">
          <div>Pregrado: {academic.carrerauniversitaria}</div>
        </div>
        <div><EditAcademicTraining academic={academic}/></div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Institución</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{academic.universidad}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Grado</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{academic.idformacionpregrado}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Periodo</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{academic.inicioacademico}-{academic.finacademico}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Fecha de titulacion</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{academic.fechaexpediciontitulo}</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">Colegiado</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">{academic.erescolegiado}</div>
      </div>
    </li>
  );
};

export default AcademicTraining;
