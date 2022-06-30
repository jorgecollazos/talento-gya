import React from "react";

const Curriculum = () => {
  return (
    <div className="bg-neutral-100 py-5">
      <div className="container mx-auto flex flex-wra">
        <div className="basis-1/4 h-max flex flex-col">
          <div className="w-full mb-6 bg-slate-50 rounded-2xl">
            <div className="grid grid-row-1 content-center justify-items-center">
              {/* <div className="flex flex-end">
                <img className="w-8 h-8" src="src/assets/icons/edit2.png" />
              </div> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-48 w-48 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg">Jorge Collazos</p>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/cardId.png" />
              </div>
              <div className="text-base pt-1">78978987</div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/birthday.png" />
              </div>
              <div className="text-base pt-1">13/05/2002</div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/money.png" />
              </div>
              <div className="text-base pt-1">s/. 999</div>
            </div>
            <br />
          </div>
          <div className="w-full mb-6 bg-slate-50 rounded-2xl">
            <div className="grid grid-flow-col gap-4">
              <div className="row-span-2">
                <p className="pt-4 pl-4 text-xl">Datos de contacto</p>
              </div>
              <div className="row-span-2 mt-3">
                <img className="h-8 w-8" src="src/assets/icons/edit2.png" />
              </div>
            </div>
            <hr className="mx-3 divide-black"></hr>
            <div className="flex flex-wrap px-8 mt-4">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/email.png" />
              </div>
              <div className="text-base pt-1">jorgecollaz@gmail.com</div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/cell.png" />
              </div>
              <div className="text-base pt-1">+51 987897789</div>
            </div>
            <div className="flex flex-wrap px-8 mt-1">
              <div className="w-12">
                <img className="w-7 h-7" src="src/assets/icons/home.png" />
              </div>
              <div className="text-base pt-1">Lima - Peru</div>
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
          <div class="grid grid-cols-3 gap-0 content-center justify-items-center bg-gray-300 rounded-t-2xl ml-4">
            <div className="rounded-t-2xl bg-slate-50 w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center">
              Formación académica
            </div>
            <div className=" w-full h-10 grid grid-cols-1 gap-4 content-center justify-items-center">
              Formación continua
            </div>
            <div className="rounded-t-2xl w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center">
              Formación laboral
            </div>
          </div>
          <div
            className="bg-slate-50 ml-4 px-10 pt-5"
            style={{ height: "calc(100vh - 184px)", "overflow-y": "scroll" }}
          >
            <div className="flex flex-row justify-between	">
              <p className="font-semibold text-xl">Formación académica</p>
              <div className="flex flex-row space-x-3">
                <p className="font-semibold text-xl">Agregar</p>
                <img className="w-6 h-6" src="src/assets/icons/add.png" />
              </div>
            </div>
            <hr></hr>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
            <div className="flex flex-row justify-between px-8 py-3 bg-gray-200 rounded-3xl mt-2">
              <div>
                <p className="font-medium text-blue-700">
                  UNIVERSIDAD NACIONAL MAYOR DE SAN MARCOS
                </p>
                <p className="font-semibold">ECONOMIA</p>
                <p>PREGRADO - BACHILLER</p>
                <p>
                  23/04/2016 -{" "}
                  <a href="https://www.google.com" target="_blank">
                    Ver constancia
                  </a>
                </p>
              </div>
              <div className="flex flex-row space-x-3">
                <img className="w-6 h-6" src="src/assets/icons/edit2.png" />
                <img className="w-6 h-6" src="src/assets/icons/erase.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
