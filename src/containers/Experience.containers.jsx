import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";

import InputDate from "../components/InputDate.components";
import InputSelect from "../components/InputSelect.components";
import InputFile from "../components/InputFile.components";
import DatalistInput from "react-datalist-input";
import "react-datalist-input/dist/styles.css";

import { cargos } from "../tb_cargos";
import { empresas } from "../tb_empresas";
import { universidad } from "../tb_universidad";

const Card = ({token}) => {
  const [data, setData] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [cargo, setCargo] = useState('');
  const [valueTexTarea, setValueTexTarea] = useState('');
  const [valueTexTarea2, setValueTexTarea2] = useState('');
  const [valueTexTarea3, setValueTexTarea3] = useState('');
  const [valueTexTarea4, setValueTexTarea4] = useState('');
  const [valueTexTarea5, setValueTexTarea5] = useState('');
  const [count, setCount] = useState(2);

  const [selectedCheck, setSelectedCheck] = useState(true);
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
      empresa: empresa,
      cargo: cargo,
      token: token,
      valueTexTarea: valueTexTarea,
      valueTexTarea2: valueTexTarea2,
      valueTexTarea3: valueTexTarea3,
      valueTexTarea4: valueTexTarea4,
      valueTexTarea5: valueTexTarea5,
    };
    setData(formData);
    setStartDate("");
    setEndDate("");
    setEmpresa("");
    setCargo("");
    setValueTexTarea("");
    setValueTexTarea2("");
    setValueTexTarea3("");
    setValueTexTarea4("");
    setValueTexTarea5("");
    hiddenTexTarea();
    setCount(2);
  };

  const url = "http://137.184.7.140:4000/api/v1/users/experience";
  const urlRedirect = "http://137.184.7.140:3001/curriculum";

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

  const hiddenTexTarea = () => {
    let element = document.getElementById('addFunction2');
    element.classList.remove("block");
    element.classList.add("hidden");
    element = document.getElementById('addFunction3');
    element.classList.remove("block");
    element.classList.add("hidden");
    element = document.getElementById('addFunction4');
    element.classList.remove("block");
    element.classList.add("hidden");
    element = document.getElementById('addFunction5');
    element.classList.remove("block");
    element.classList.add("hidden");
  }

  const addNewFunction = () => {
    setCount(count + 1);
    let idElement = "addFunction" + count;
    console.log(idElement);
    let element = document.getElementById(idElement);
    element.classList.remove("hidden");
    element.classList.add("block");
  };

  return (
    <div className="w-11/12 lg:w-5/6 mx-auto flex items-center justify-between">
      <div className="flex flex-col lg:flex-row w-full items-start lg:items-center ">
        <div className="w-full lg:w-2/3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4 content-center justify-items-center">

              <DatalistInput
                value={cargo}
                className="w-96"
                placeholder="[EJEMPLO], Administrador"
                label="Cargo *"
                onSelect={(item) => setCargo(item.value)}
                items={cargos}
              />

              <DatalistInput
                value={empresa}
                className="w-96"
                placeholder="[EJEMPLO], BCP"
                label="Empresa *"
                onSelect={(item) => setEmpresa(item.value)}
                items={empresas}
              />

              <div>
                <InputDate title="Fecha de inicio"  required="*"/>
                <input
                  type="date"
                  {...register("startDate")}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 11/02/2001"
                  value={startDate}
                  onChange={(event) => setStartDate(event.target.value)}
                />
              </div>
              <div>
                <InputDate title="Fecha de fin" required="*" />
                <input
                  type="date"
                  {...register("endDate")}
                  className="text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 dark:focus:border-indigo-700 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 font-normal w-96 h-10 flex items-center pl-3 text-sm border-gray-300 rounded-2xl border shadow"
                  placeholder="[EJEMPLO], 11/02/2002"
                  value={endDate}
                  onChange={(event) => setEndDate(event.target.value)}
                  disabled={selectedCheck}
                />
              </div>
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
                      {...register("validEndDate")}
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
                <a
                  className="text-lime-600 hover:text-lime-800"
                  onClick={() => addNewFunction()}
                >
                  Añadir nueva función +
                </a>
              </div>
            </div>

            <div
              className="grid grid-cols-1 gap-0 content-center justify-items-center"
              id="functions"
            >
              <textarea
                className="mb-4 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="addFunction"
                rows="1"
                onChange={(event) => setValueTexTarea(event.target.value)}
                value={valueTexTarea} 
              ></textarea>
              <textarea
                className="mb-4 form-control hidden w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="addFunction2"
                rows="1"
                onChange={(event) => setValueTexTarea2(event.target.value)}
                value={valueTexTarea2} 
              ></textarea>
              <textarea
                className="mb-4 form-control hidden w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="addFunction3"
                rows="1"
                onChange={(event) => setValueTexTarea3(event.target.value)}
                value={valueTexTarea3} 
              ></textarea>
              <textarea
                className="mb-4 form-control hidden w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="addFunction4"
                rows="1"
                onChange={(event) => setValueTexTarea4(event.target.value)}
                value={valueTexTarea4} 
              ></textarea>
              <textarea
                className="mb-4 form-control hidden w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                id="addFunction5"
                rows="1"
                onChange={(event) => setValueTexTarea5(event.target.value)}
                value={valueTexTarea5} 
              ></textarea>
            </div>

            <div className="grid grid-cols-2 gap-4 content-center justify-items-center">
              <p className="mt-5 w-96">
                <span className="text-red-700">*</span> Campos obligatorios
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 content-center justify-items-center mt-10">
              <button type="submit" className="mx-2 my-2 w-40 bg-lime-600 transition duration-150 ease-in-out hover:bg-lime-800 rounded-3xl text-white px-6 py-3 text-ms">
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

export default Card;
