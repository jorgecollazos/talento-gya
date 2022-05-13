import React from "react";

const Consultor = ({ consultor }) => {
  return (
    <div className="flex w-full items-center dark:bg-gray-900 py-3 px-6 flex justify-center items-center ">
      <div>
        <div className="max-w-xs h-64 flex flex-col justify-between bg-white dark:bg-gray-800 rounded-lg border border-gray-400 py-5 px-4">
          <div>
            <h4 className="text-gray-800 dark:text-gray-100 font-bold mb-3">
              {consultor.primernombre} {consultor.apellidopaterno}{" "}
              {consultor.apellidomaterno}
            </h4>
            <div class="flex flex-row">
              <div class="basis-1/4">Nº doc.</div>
              <div class="basis-3/4">{consultor.numerodedocumento}</div>
            </div>
            <div class="flex flex-row">
              <div class="basis-1/4">Nº cel.</div>
              <div class="basis-3/4">{consultor.numerocelular1}</div>
            </div>
            <p className="text-gray-800 dark:text-gray-100 text-sm">
              Breve resumen del perfil, Breve resumen del perfil, Breve resumen
              del perfil, Breve resumen del perfil, Breve resumen del perfil.
            </p>
          </div>
          <div>
            <div className="flex items-center justify-between text-gray-800">
              <p className="text-sm dark:text-gray-100">{consultor.email}</p>
              <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-eye"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultor;
