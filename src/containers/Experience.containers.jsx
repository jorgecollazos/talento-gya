import React, { useState, useRef } from "react";
import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputSelect from "../components/InputSelect.components";
import InputFile from "../components/InputFile.components";

import { cargos } from "../tb_cargos";
import { empresas } from "../tb_empresas";
import { universidad } from "../tb_universidad";

const Card = () => {
  const [selectedCheck, setSelectedCheck] = useState(true);
  const onCheck = (value) => {
    setSelectedCheck(value);
  };

  const myContainer = useRef(null);
  console.log(myContainer.current);

  const addNewFunction = () => {
    let container = document.getElementById("functions");
    let section = document.getElementById("addFunction");
    container.appendChild(section.cloneNode(true));
  };

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-full lg:w-2/3">
          <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
            <InputSelect
              title="Cargo *"
              placeholder="[EJEMPLO], Administrador"
              options={cargos}
            />
            <InputSelect
              title="Empresa *"
              placeholder="[EJEMPLO], BCP"
              options={empresas}
            />
            <InputDate
              title="Fecha de inicio"
              placeholder="[EJEMPLO], 23/05/2015"
              required="*"
            />
            <InputDate
              title="Fecha de fin"
              placeholder="[EJEMPLO], 23/05/2015"
              disabled={selectedCheck}
              required="*"
            />
            <InputFile title="Adjuntar documento" />
            <div className="flex flex-row w-96">
              <div className="pr-5">¿Trabajo actual?</div>
              <div className="mt-1">
                <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                  <input
                    defaultChecked
                    type="checkbox"
                    name="toggle"
                    id="toggle2"
                    onChange={() => onCheck(!selectedCheck)}
                    className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                  />

                  <label
                    htmlFor="toggle2"
                    className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                  />
                </div>
                <style>
                  {`.checkbox:checked {
                        /* Apply class right-0*/
                        right: 0;
                    }
                    .checkbox:checked + .toggle-label {
                        /* Apply class bg-indigo-700 */
                        background-color: #4c51bf;
                    }`}
                </style>
              </div>
            </div>
            
            <label className="text-gray-800 w-96 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2">
              Funciones
            </label>
            <div className="w-96 grid grid-cols-1 gap-0 content-end justify-items-end">
              <button
                className="text-lime-600 hover:text-lime-800"
                onClick={() => addNewFunction()}
              >
                Añadir nueva función +
              </button>
            </div>
          </div>

          <div
            className="grid grid-cols-1 gap-0 content-center justify-items-center"
            id="functions"
          >
            <textarea
              class="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              id="addFunction"
              rows="1"
              placeholder="Función"
            ></textarea>
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
              <a href="/curriculum" className="">
                Continuar
              </a>
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
