import React from "react";
import Input from "../components/Input.components";
import InputNumber from "../components/InputNumber.components";
import InputDate from "../components/InputDate.components";
import InputMultiSelect from "../components/InputMultiSelect.components";
import InputSelectInput from "../components/InputSelectInput.components";
import { paises } from "../paises";

const Card = () => {
  let tipdoc = [
    { value: "1", label: "DNI" },
    { value: "2", label: "PASOPORTE" },
    { value: "3", label: "CARNET DE EXTRANJERIA" },
    { value: "4", label: "RUC" },
  ];
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
            <Input
              placeholder="[EJEMPLO], Jorge Luis"
              title="Nombres"
              required="*"
            />
            <Input
              placeholder="[EJEMPLO], Collazos"
              title="Apellido paterno"
              required="*"
            />
            <Input
              placeholder="[EJEMPLO], Martinez"
              title="Apellido materno"
              required="*"
            />
            <InputDate
              placeholder="[EJEMPLO], 11/02/2002"
              title="Fecha de nacimiento"
            />
            <InputSelectInput
              placeholder="[PAIS][Nº],+51 983593021"
              placeholder2="País"
              title="Número de celular"
              options={paises}
              required="*"
            />
            <InputSelectInput
              placeholder="[TIPO][Nº],DNI 12343212"
              placeholder2="Tipo"
              title="Número de documento"
              options={tipdoc}
              required="*"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
            <p className="mt-5 w-96">
            <span className="text-red-700">*</span> Campos obligatorios 
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
            <button className="mx-2 my-2 w-40 bg-amber-400 transition duration-150 ease-in-out hover:bg-yellow-600 rounded-3xl text-white px-6 py-3 text-ms">
              <a href="/academicform" className="">
                Continuar
              </a>
              {/* <div className="grid grid-cols-2 content-center justify-items-center">
                <div>Continuar</div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div> */}
            </button>
          </div>
        </div>
        <div className="w-full lg:w-1/3">
          <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
            <img className="h-96" src="src/assets/img/logo.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
