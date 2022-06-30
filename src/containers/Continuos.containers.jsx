import React, { useState } from "react";
import Select from "react-select";

import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputSelect from "../components/InputSelect.components";
import InputFile from "../components/InputFile.components";

import { carreras } from "../tb_carrera";
import { universidad } from "../tb_universidad";

const Card = () => {
  const [selectedCurso, setSelectedCurso] = useState();

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
            <div>
              <label className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2">
                Tipo de formación <span className="text-red-700">*</span>
              </label>
              <Select
                className="h-10 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                defaultValue={selectedCurso}
                onChange={setSelectedCurso}
                options={[
                  { label: "Curso", value: "Curso" },
                  { label: "Especialización", value: "Especialización" },
                  { label: "Idioma", value: "Idioma" },
                  { label: "Certificación", value: "Certificación" },
                  {
                    label: "Taller / Capacitación",
                    value: "Taller / Capacitación",
                  },
                  { label: "Diplomado", value: "Diplomado" },
                ]}
                placeholder="[EJEMPLO], Curso"
              />
            </div>
            <InputSelect
              title="Institución *"
              placeholder="[EJEMPLO], UPC"
              options={universidad}
            />
            <div>
              <Input
                title="Nombre de certificación"
                placeholder="[EJEMPLO], Curso análisis de datos"
                required="*"
              />
            </div>

            <Input
              title="Número de horas"
              placeholder="[EJEMPLO], 20"
              required="*"
            />
            <InputDate
              title="Fecha de emisión de constancia"
              placeholder="[EJEMPLO], 23/05/2015"
              required="*"
            />
            <InputFile title="Adjuntar documento" />
          </div>
          <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
            <p className="mt-5 w-96">
              <span className="text-red-700">*</span> Campos obligatorios
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 content-center justify-items-center mt-10">
            <button className="mx-2 my-2 w-40 bg-lime-600 transition duration-150 ease-in-out hover:bg-lime-800 rounded-3xl text-white px-6 py-3 text-ms">
              Añadir
            </button>
            <button className="mx-2 my-2 w-40 bg-amber-400 transition duration-150 ease-in-out hover:bg-yellow-600 rounded-3xl text-white px-6 py-3 text-ms">
              <a href="/experienceform" className="">
                Continuar
              </a>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
            <img className="h-96" src="/src/assets/img/logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
