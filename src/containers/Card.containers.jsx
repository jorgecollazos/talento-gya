import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { paises } from "../paises";

import Select from "react-select";
import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputSelectInput from "../components/InputSelectInput.components";

const Card = ({ token }) => {
  const [data, setData] = useState(null);

  const [cellCode, setCellCode] = useState(null);
  const [documentType, setDocumentType] = useState(null);

  let tipdoc = [
    { value: "1", label: "DNI" },
    { value: "2", label: "PASOPORTE" },
    { value: "3", label: "CARNET DE EXTRANJERIA" },
    { value: "4", label: "RUC" },
  ];

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    formData = {
      ...formData,
      cellphone_code: cellCode.value,
      document_type: documentType.label,
      token: token,
    };
    setData(formData);
  };

  const url = "http://137.184.7.140:4000/api/v1/users/information";
  const urlRedirect = "http://137.184.7.140:3001/academicform";

  useEffect(() => {
    (async () => {
      if(data !== null) {
        try {
          const response = await axios.post(
            url,
            data
          );
          console.log(response)
          window.location.replace(urlRedirect + "/" + token);
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
                <Input title="Nombres" required="*" />
                <input
                  {...register("name", { required: true })}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], Jorge Luis"
                  required
                />
              </div>

              <div>
                <Input title="Apellido paterno" required="*" />
                <input
                  {...register("f_last_name", { required: true })}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], Collazos"
                  required
                />
              </div>

              <div>
                <Input title="Apellido materno" required="*" />
                <input
                  {...register("m_last_name", { required: true })}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], Martinez"
                  required
                />
              </div>
              <div>
                <InputDate title="Fecha de nacimiento" />
                <input
                  id="email"
                  type="date"
                  {...register("birthday")}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 11/02/2002"
                />
              </div>

              <div className="w-96">
                <InputSelectInput title="Número de celular" required="*" />
                <div className="flex flex-row">
                  <div className="basis-2/4 pr-4">
                    <Select
                      className="h-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                      defaultValue={cellCode}
                      onChange={setCellCode}
                      options={paises}
                      placeholder="País"
                    />
                  </div>
                  <div className="basis-2/4">
                    <input
                      {...register("cellphone", { required: true })}
                      className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                      placeholder="[PAIS][Nº],+51 983593021"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="w-96">
                <InputSelectInput title="Número de documento" required="*" />
                <div className="flex flex-row">
                  <div className="basis-2/4 pr-4">
                    <Select
                      className="h-10 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 "
                      defaultValue={documentType}
                      onChange={setDocumentType}
                      options={tipdoc}
                      placeholder="Tipo"
                    />
                  </div>
                  <div className="basis-2/4">
                    <input
                      {...register("document_number", { required: true })}
                      className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                      placeholder="[TIPO][Nº],DNI 12343212"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
              <p className="mt-5 w-96">
                <span className="text-red-700">*</span> Campos obligatorios
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
              <button
                type="submit"
                className="mx-2 my-2 w-40 bg-amber-400 transition duration-150 ease-in-out hover:bg-yellow-600 rounded-3xl text-white px-6 py-3 text-ms"
              >
                Continuar
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
