import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputSelect from "../components/InputSelect.components";
import InputFile from "../components/InputFile.components";
import InputMultiSelect from "../components/InputMultiSelect.components";
import Select from "react-select";

import { carreras } from "../tb_carrera";
import { universidad } from "../tb_universidad";

const Card = ({ token }) => {
  const [data, setData] = useState(null);
  const [selectedCheck, setSelectedCheck] = useState(false);
  const [selectedNivelEstudio, setSelectedNivelEstudio] = useState(null);
  const [selectedNivelObtenido, setSelectedNivelObtenido] = useState(null);
  const [selectedNivelObtenidoCheck, setSelectedNivelObtenidoCheck] =
    useState(true);
  const [selectedNivelObtenidoOptions, setSelectedNivelObtenidoOptions] =
    useState(true);

  const onSelectNivel = (list) => {
    setSelectedNivelObtenidoCheck(false);
    setSelectedNivelEstudio(list);
    if (list.value == "Pregrado") {
      setSelectedNivelObtenidoOptions([
        { label: "Estudiante", value: "Estudiante" },
        { label: "Egresado", value: "Egresado" },
        { label: "Bachiller", value: "Bachiller" },
        { label: "Titulado", value: "Titulado" },
      ]);
    } else {
      setSelectedNivelObtenidoOptions([
        { label: "Estudiante", value: "Estudiante" },
        { label: "Egresado", value: "Egresado" },
        { label: "Titulado", value: "Titulado" },
      ]);
    }
  };
  const onCheck = (value) => {
    setSelectedCheck(value);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    formData = {
      ...formData,

      token: token,
    };
    setData(formData);
  };

  const url = "http://localhost:4000/api/v1/users/academic";
  let urlRedirect = "http://localhost:3001/continuosform";

  useEffect(() => {
    (async () => {
      if (data !== null) {
        try {
          const response = await axios.post(url, data);
          console.log(response);
          urlRedirect = urlRedirect + "/" + token;
          // window.location.replace(urlRedirect + "/" + token);
        } catch (error) {
          console.log(error.message);
        } finally {
          console.log(true);
        }
      }
    })();
  }, [data]);
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
              <div>
                <label className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2">
                  Nivel de estudios <span className="text-red-700">*</span>
                </label>
                <Select
                  className="h-10 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  defaultValue={selectedNivelEstudio}
                  onChange={onSelectNivel}
                  options={[
                    { label: "Pregrado", value: "Pregrado" },
                    { label: "Maestría", value: "Maestría" },
                    { label: "Doctorado", value: "Doctorado" },
                  ]}
                  placeholder="[EJEMPLO], Pregrado"
                />
              </div>
              <div>
                <label className="text-gray-800 dark:text-gray-100 text-ms leading-tight tracking-normal mb-2">
                  Nivel obtenido <span className="text-red-700">*</span>
                </label>
                <Select
                  className="h-10 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  defaultValue={selectedNivelObtenido}
                  onChange={setSelectedNivelObtenido}
                  isDisabled={selectedNivelObtenidoCheck}
                  options={selectedNivelObtenidoOptions}
                  placeholder="[EJEMPLO], Egresado"
                />
              </div>

              <InputSelect
                title="Institución *"
                placeholder="[EJEMPLO], UPC"
                options={universidad}
              />

              <InputSelect
                title="Carrera *"
                placeholder="[EJEMPLO], Economía"
                options={carreras}
              />

              <div>
                <InputDate
                  title="Fecha de emisión de constancia"
                  required="*"
                />
                <input
                  id="email"
                  type="date"
                  {...register("proof_date")}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 23/05/2015"
                />
              </div>

              <InputFile title="Adjuntar documento" />

              <div className="flex flex-row w-96">
                <div className="pr-5">¿Colegiado?</div>
                <div className="mt-1">
                  <div className="cursor-pointer rounded-full bg-gray-200 relative shadow-sm">
                    <input
                      type="checkbox"
                      name="toggle"
                      id="toggle1"
                      onChange={() => onCheck(!selectedCheck)}
                      className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                    />
                    <label
                      htmlFor="toggle1"
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
            </div>
            <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
              <p className="mt-5 w-96">
                <span className="text-red-700">*</span> Campos obligatorios
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 content-center justify-items-center mt-10">
              <button
                type="submit"
                className="mx-2 my-2 w-40 bg-lime-600 transition duration-150 ease-in-out hover:bg-lime-800 rounded-3xl text-white px-6 py-3 text-ms"
              >
                Añadir
              </button>
              <button className="mx-2 my-2 w-40 bg-amber-400 transition duration-150 ease-in-out hover:bg-yellow-600 rounded-3xl text-white px-6 py-3 text-ms">
                <a href={urlRedirect} className="">
                  Continuar
                </a>
              </button>
            </div>
          </form>
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
