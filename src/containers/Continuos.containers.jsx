import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Select from "react-select";

import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputFile from "../components/InputFile.components";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";
import { universidad } from "../tb_universidad";

const Continuos = ({ token }) => {
  const [selectedCurso, setSelectedCurso] = useState();
  const [documentDate, setDocumentDate] = useState('');
  const [hours, setHours] = useState('');
  const [certificationName, setCertificationName] = useState('');
  const [data, setData] = useState(null);
  const [selectedUniversity, setSelectedUniversity] = useState(null);

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
      selectedUniversity: selectedUniversity,
      selectedCurso: selectedCurso.value,
    };
    setData(formData);
    setSelectedCurso('');
    setSelectedUniversity('');
    setDocumentDate('');
    setHours('');
    setCertificationName('');
  };

  const url = "http://137.184.7.140:4000/api/v1/users/continuos";
  const urlRedirect = "http://137.184.7.140:3001/experienceform";

  useEffect(() => {
    (async () => {
      if (data !== null) {
        try {
          const response = await axios.post(url, data);
          console.log(response);
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
                  Tipo de formación <span className="text-red-700">*</span>
                </label>
                <Select
                  className="h-10 w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                  defaultValue={selectedCurso}
                  value={selectedCurso}
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

              <DatalistInput
                value={selectedUniversity}
                className="w-96"
                placeholder="[EJEMPLO], UPC"
                label="Institución *"
                onSelect={(item) => setSelectedUniversity(item.value)}
                items={universidad}
              />

              <div>
                <Input title="Nombre de certificación" required="*" />
                <input
                  {...register("certificationName", { required: true })}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], Análisis de datos"
                  value={certificationName}
                  onChange={(event) => setCertificationName(event.target.value)}
                  required
                />
              </div>

              <div className="w-96">
                <Input title="Número de horas" required="*" />
                <input
                  type="number"
                  {...register("hours", { required: true })}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 20"
                  value={hours}
                  onChange={(event) => setHours(event.target.value)}
                  required
                />
              </div>
              <div>
                <InputDate title="Fecha de emisión de constancia" />
                <input
                  type="date"
                  {...register("documentDate")}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 11/02/2002"
                  value={documentDate}
                  onChange={(event) => setDocumentDate(event.target.value)}
                />
              </div>

              <InputFile title="Adjuntar documento" />
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
                <a href={urlRedirect + '/' + token} className="">
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

export default Continuos;
