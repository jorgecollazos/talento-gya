import React, { useState, useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { paises } from "../paises";

import Select from "react-select";
import Input from "../components/Input.components";
import InputDate from "../components/InputDate.components";
import InputSelectInput from "../components/InputSelectInput.components";

const PopUp = ({ showModal, setShowModal, data2, token, vaueCell }) => {
  const [data, setData] = useState(null);

  const [cellCode, setCellCode] = useState({
    value: vaueCell,
    label: "",
  });

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
      token: token,
    };
    setData(formData);
  };

  const url = "http://137.184.7.140:4000/api/v1/users/information";
  const urlRedirect = "http://137.184.7.140:3001/academicform";

  useEffect(() => {
    (async () => {
      if (data !== null) {
        try {
          console.log(data);
          const response = await axios.put(url, data);
          console.log(response);
        } catch (error) {
          console.log(error.message);

        } finally {
          console.log(true);
          setShowModal(false);
        }
      }
    })();
  }, [data]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}

                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Datos de contacto</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="relative p-6 flex-auto">
                    <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
                      <div className="w-96">
                        <InputSelectInput
                          title="Número de celular"
                          required="*"
                        />
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
                              defaultValue={data2[2].cellphone}
                              placeholder="[PAIS][Nº],+51 983593021"
                              required
                            />
                          </div>
                        </div>
                      </div>

                      <div className="w-96">
                        <InputSelectInput title="Dirección" />
                        <div className="flex flex-row">
                          <div className="basis-2/4 mr-1">
                            <input
                              {...register("country", {
                                required: true,
                              })}
                              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                              placeholder="País"
                              defaultValue={data2[2].country}

                            />
                          </div>
                          <div className="basis-2/4 mf-1">
                            <input
                              {...register("state", {
                                required: true,
                              })}
                              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                              placeholder="Estado/Región"
                              defaultValue={data2[2].state}

                            />
                          </div>
                        </div>
                        <div className="flex flex-row mt-2">
                          <div className="basis-2/4 mr-1">
                            <input
                              {...register("province", {
                                required: true,
                              })}
                              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                              placeholder="Provincia"
                              defaultValue={data2[2].province}

                            />
                          </div>
                          <div className="basis-2/4 mf-1">
                            <input
                              {...register("address", {
                                required: true,
                              })}
                              className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                              placeholder="Dirección"
                              defaultValue={data2[2].address}

                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 content-center justify-items-center">
                      <p className="mt-5 w-96">
                        <span className="text-red-700">*</span> Campos
                        obligatorios
                      </p>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Cerrar
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      // onClick={() => setShowModal(false)}
                    >
                      Guardar cambios
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};
export default PopUp;
