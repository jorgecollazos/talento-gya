import React from "react";

export default function EditContinuousTraining( {continuous}) {
  const [showModal, setshowModal] = React.useState(false);
  return (
    <div>
      <button onClick={() => setshowModal(true)}>
        <img
          className="w-8 ml-8"
          src="http://143.198.153.102:4010/img/icons/iconos-08.png"
        />
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-2xl font-semibold">
                    Editar formación continua
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setshowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <form className="">
                    <div className="flex items-center space-x-9">
                      <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                        <select className="text-sm text-gray-500 w-full focus:outline-none">
                          <option selected disabled defaultValue>
                            Tipo de formación
                          </option>
                          <option>Curso</option>
                          <option>Idioma</option>
                          <option>Especialización</option>
                        </select>
                      </div>
                      <input
                        placeholder="Institución"
                        type="text"
                        defaultValue={continuous.institucioneducativa}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                        
                      />
                    </div>

                    <div className="flex items-center space-x-9 mt-4">
                      
                      <input
                        placeholder="Nombre (curso/idioma/etc)"
                        defaultValue={continuous.nombrelogro}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                      <input
                        placeholder="Horas"
                        type="number"
                        defaultValue={continuous.horasacademicas}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="Fecha de finalización"
                        type="date"
                        defaultValue={continuous.fechaexpedicion}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                      <input
                        placeholder="Adjuntar documento"
                        type="file"
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
                  >
                    Descartar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setshowModal(false)}
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}