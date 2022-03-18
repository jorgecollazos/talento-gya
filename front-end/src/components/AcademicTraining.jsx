import React from "react";

const ContinuousTraining = () => {
  return (
    <li>
      <div className="text-teal-700 font-bold">Pregrado</div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Carrera</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">Ciencia de la computación</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Institución</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">Universidad de Ingeniería y Tecnología</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Grado</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">Estudiante</div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-2 font-semibold">Periodo</div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-2">2019-2022</div>
      </div>
    </li>
  );
};

export default ContinuousTraining;
