import React from "react";

export default function EditAbout({ about }) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <div>
      <button onClick={() => setShowModal(true)}>
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
                  <h3 className="text-2xl font-semibold">Datos personales</h3>
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
                <div className="relative p-6 flex-auto">
                  <form className="">
                    <div className="flex items-center space-x-9">
                      <input
                        placeholder="Primer nombre"
                        type="text"
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                        name="primernombre"
                        defaultValue={about.primernombre}
                      />
                      <input
                        placeholder="Segundo nombre"
                        defaultValue={about.segundonombre}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                      <input
                        placeholder="Apellido paterno"
                        defaultValue={about.apellidopaterno}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="Apellido materno"
                        defaultValue={about.apellidomaterno}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />

                      <div className="w-1/2 bg-white border rounded border-gray-200 py-2.5 px-3">
                        <select className="text-sm text-gray-500 w-full focus:outline-none">
                          <option selected disabled defaultValue>
                            Tipo de documento
                          </option>
                          <option>DNI</option>
                          <option>Carnet</option>
                          <option>Ruc</option>
                        </select>
                      </div>

                      <input
                        placeholder="Nº de documento"
                        defaultValue={about.numerodedocumento}
                        type="number"
                        min={0}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="Fecha de nacimiento"
                        defaultValue={about.fechadenacimiento}
                        type="date"
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />

                      <input
                        placeholder="Nº de contacto"
                        defaultValue={about.numerocelular1}
                        type="number"
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />

                      <input
                        placeholder="Nº de contacto"
                        defaultValue={about.numerocelular2}
                        type="number"
                        min={0}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="Dirección"
                        defaultValue={about.direccion}
                        className="w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="Distrito"
                        defaultValue={about.distrito}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                      <input
                        placeholder="Provincia"
                        defaultValue={about.provincia}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />

                      <input
                        placeholder="Región"
                        defaultValue={about.region}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                    </div>
                    <div className="flex items-center space-x-9 mt-4">
                      <input
                        placeholder="País"
                        defaultValue={about.pais}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />

                      <input
                        placeholder="Espectativa salarial"
                        defaultValue={about.expectativasueldo}
                        type="number"
                        min={0}
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                      />
                      <input
                        type="file"
                        placeholder="Foto de perfil"
                        id="imageUpload"
                        name="imageUpload"
                        className="w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white border rounded border-gray-200"
                        accept=".png, .jpg, .jpeg, .webp"
                      />
                    </div>
                  </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Descartar
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
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
