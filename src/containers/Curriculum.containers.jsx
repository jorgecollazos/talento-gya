import React, { useState, useEffect } from "react";
import axios from "axios";
import PopUp from "../components/PopUp.components";

const Curriculum = ({ token }) => {
  const [data, setData] = useState(null);
  const [pregradolistActive, setPregradolistActive] = useState(true);
  const [continualistActive, setContinualistActive] = useState(false);
  const [experiencialistActive, setExperiencialistActive] = useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const url = "http://137.184.7.140:4000/api/v1/users/curriculum/" + token;

  useEffect(() => {
    (async () => {
      if (data === null) {
        try {
          const response = await axios.get(url);
          setData(response.data);
          console.log(response.data);
        } catch (error) {
          console.log(error.message);
        } finally {
          console.log(true);
        }
      }
    })();
  }, []);

  const onPregradoList = () => {
    setContinualistActive(false);
    setExperiencialistActive(false);
    setPregradolistActive(true);
  };

  const onContinuaList = () => {
    setContinualistActive(true);
    setExperiencialistActive(false);
    setPregradolistActive(false);
  };

  const onExperienciaList = () => {
    setContinualistActive(false);
    setExperiencialistActive(true);
    setPregradolistActive(false);
  };

  return (
    <div className="bg-neutral-100 py-5">
      <div className="container mx-auto flex flex-wra">
        <div className="basis-1/4 h-max flex flex-col">
          <div className="w-full mb-6 bg-slate-50 rounded-2xl">
            <div className="grid grid-row-1 content-center justify-items-center">
              {/* <div className="flex flex-end">
                <img className="w-8 h-8" src="/src/assets/icons/edit2.png" />
              </div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-48 w-48 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {data ? (
                <p className="text-lg">
                  {data[2].name} {data[2].f_last_name} {data[2].m_last_name}{" "}
                </p>
              ) : (
                <p></p>
              )}
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/cardId.png" />
              </div>
              <div className="text-base pt-1">
                {data ? <p>{data[2].document_number}</p> : <p></p>}
              </div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/birthday.png" />
              </div>
              <div className="text-base pt-1">
                {data ? <p>{data[2].birthday2}</p> : <p></p>}
              </div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/money.png" />
              </div>
              <div className="text-base pt-1">s/. </div>
            </div>
            <br />
          </div>
          <div className="w-full mb-6 bg-slate-50 rounded-2xl">
            <div className="flex flex-row justify-between">
              <div className="row-span-2">
                <p className="pt-4 pl-4 text-xl">Datos de contacto</p>
              </div>
              <button className="row-span-2 mt-3 pr-4">
                <img
                  onClick={() => setShowModal(true)}
                  className="h-8 w-8"
                  src="/src/assets/icons/edit2.png"
                />
              </button>
              <PopUp showModal={showModal} setShowModal={setShowModal} data2={data} token={token} vaueCell={data? data[2].cellphone_code : 'PE'}/>
            </div>

            <hr className="mx-3 divide-black"></hr>
            <div className="flex flex-wrap px-8 mt-4">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/email.png" />
              </div>
              <div className="text-base pt-1">
                {data ? <p>{data[1].email}</p> : <p></p>}
              </div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/cell.png" />
              </div>
              <div className="text-base pt-1">
                {data ? <span>{data[2].cellphone_code}</span> : <span></span>}{" "}
                {data ? <span>{data[2].cellphone}</span> : <p></p>}
              </div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="/src/assets/icons/home.png" />
              </div>
              <div className="text-base pt-1">
                {data ? <span>{data[2].country}</span> : <span></span>}{" - "}
                {data ? <span>{data[2].state}</span> : <p></p>}
              </div>
            </div>
            <br />
          </div>
          <div className="w-full bg-amber-400 rounded-2xl">
            <div className="grid grid-cols-1 gap-0 content-center justify-items-center text-3xl h-16">
              Descarga CV
            </div>
          </div>
        </div>
        <div className="basis-3/4 h-max">
          <div className="grid grid-cols-3 gap-0 content-center justify-items-center bg-gray-300 rounded-t-2xl ml-4">
            <button
              onClick={onPregradoList}
              className={
                pregradolistActive
                  ? "rounded-t-2xl bg-slate-50 w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
                  : "rounded-t-2xl w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
              }
            >
              Formación académica
            </button>
            <button
              onClick={onContinuaList}
              className={
                continualistActive
                  ? "rounded-t-2xl bg-slate-50 w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
                  : "rounded-t-2xl w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
              }
            >
              Formación continua
            </button>
            <button
              onClick={onExperienciaList}
              className={
                experiencialistActive
                  ? "rounded-t-2xl bg-slate-50 w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
                  : "rounded-t-2xl w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center"
              }
            >
              Experiencia laboral
            </button>
          </div>

          <div
            id="pregradolist"
            name="pregradolist"
            className={
              pregradolistActive
                ? "bg-slate-50 ml-4 px-10 pt-5 block"
                : "bg-slate-50 ml-4 px-10 pt-5 hidden"
            }
            style={{ height: "calc(100vh - 184px)", overflowY: "scroll" }}
          >
            <div className="flex flex-row justify-between	">
              <p className="font-semibold text-xl">Formación académica</p>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold text-xl">Agregar</p>
                <img className="w-6 h-6" src="/src/assets/icons/add.png" />
              </div>
            </div>
            <hr></hr>

            {data ? (
              <div>
                {data[3].map((pregrado) => (
                  <div
                    key={pregrado.id}
                    className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2"
                  >
                    <div>
                      <p className="font-medium text-blue-700">
                        {pregrado.institution}
                      </p>
                      <p className="font-semibold">
                        {" "}
                        {pregrado.graduation_degree}
                      </p>
                      <p>
                        {pregrado.educational_level} - {pregrado.level_obtained}
                      </p>
                      <p>
                        {pregrado.proof_date2}
                        {/* - <a href="https://www.google.com" target="_blank">
                      Ver constancia
                    </a> */}
                      </p>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/edit2.png"
                      />
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/erase.png"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div
            id="continualist"
            name="continualist"
            className={
              continualistActive
                ? "bg-slate-50 ml-4 px-10 pt-5 block"
                : "bg-slate-50 ml-4 px-10 pt-5 hidden"
            }
            style={{ height: "calc(100vh - 184px)", overflowY: "scroll" }}
          >
            <div className="flex flex-row justify-between	">
              <p className="font-semibold text-xl">Formación continua</p>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold text-xl">Agregar</p>
                <img className="w-6 h-6" src="/src/assets/icons/add.png" />
              </div>
            </div>
            <hr></hr>

            {data ? (
              <div>
                {data[4].map((pregrado) => (
                  <div
                    key={pregrado.id}
                    className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2"
                  >
                    <div>
                      <p className="font-medium text-blue-700">
                        {pregrado.institution}
                      </p>
                      <p className="font-semibold">
                        {" "}
                        {pregrado.certification_name}
                      </p>
                      <p>
                        {pregrado.certification_type} -{" "}
                        {pregrado.certification_hours} horas
                      </p>
                      <p>
                        {pregrado.document_date2}
                        {/* - <a href="https://www.google.com" target="_blank">
                      Ver constancia
                    </a> */}
                      </p>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/edit2.png"
                      />
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/erase.png"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>

          <div
            id="experiencialist"
            name="experiencialist"
            className={
              experiencialistActive
                ? "bg-slate-50 ml-4 px-10 pt-5 block"
                : "bg-slate-50 ml-4 px-10 pt-5 hidden"
            }
            style={{ height: "calc(100vh - 184px)", overflowY: "scroll" }}
          >
            <div className="flex flex-row justify-between	">
              <p className="font-semibold text-xl">Experiencia laboral</p>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold text-xl">Agregar</p>
                <img className="w-6 h-6" src="/src/assets/icons/add.png" />
              </div>
            </div>
            <hr></hr>

            {data ? (
              <div>
                {data[5].map((pregrado) => (
                  <div
                    key={pregrado.id}
                    className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2"
                  >
                    <div>
                      <p className="font-medium text-blue-700">
                        {pregrado.institution}
                      </p>
                      <p className="font-semibold"> {pregrado.position}</p>
                      <p>
                        {pregrado.start_date2} - {pregrado.end_date2}
                      </p>
                      <p>Funciones</p>
                    </div>
                    <div className="flex flex-row space-x-3">
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/edit2.png"
                      />
                      <img
                        className="w-6 h-6"
                        src="/src/assets/icons/erase.png"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
