import React from "react";
import EditExperience from "@components/EditExperience";

const Experience = ({ experience }) => {
  return (
    <li>
      <div className="flex justify-between items-center space-x-2 font-semibold text-lg text-teal-700 leading-8">
        <div className="flex justify-start">
          <div>{experience.nombrecargo}</div>
        </div>
        <div><EditExperience experience={experience} /></div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">
          Institución
        </div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">
          {experience.nombreempresa}
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="sm:basis-full md:basis-1/3 lg:basis-1/4 basis-full px-2 py-px font-semibold">
          Periodo
        </div>
        <div className="sm:basis-full md:basis-2/3 lg:basis-3/4 basis-full px-2 py-px">
          {experience.experienciafechainicio} -{" "}
          {experience.experienciafechafinal}
        </div>
      </div>
      <div >
        <div className="px-2 py-px font-semibold">
          Funciones
        </div>
        <div className="px-2 py-px">
          <ul>
            <li>{experience.funcionesdesarrolladas}</li>
            <li>{experience.funcion2}</li>
            <li>{experience.funcion3}</li>
            <li>{experience.funcion4}</li>
            <li>{experience.funcion5}</li>
          </ul>
        </div>
      </div>
    </li>
  );
};

export default Experience;
