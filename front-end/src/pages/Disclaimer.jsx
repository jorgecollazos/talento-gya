import React from "react";

const NotFound = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tl from-tAquamarine to-tBlue py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabindex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Protección de datos personales
          </p>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              EI CONSULTOR, que suscribe el presente documento, presta su
              consentimiento informado, previo, libre, expreso e inequívoco,
              para que GESTIONA Y APRENDE, con domicilio en Av. Petit Thouars
              4699, distrito de Miraflores, provincia y departamento de Lima,
              conforme a Ley N° 29733 Ley de Protección de Datos Personales y su
              Reglamento, pueda almacenar e incorporar en el banco de datos de
              "Consultores", los datos personales de la que es titular, a dar
              tratamiento a la información que le proporcionan e incorporar en
              sus bases de datos y procesarla de la manera más amplia permitida
              por las normas pertinentes; cederlos a terceros con legítimo
              interés, transferir la información necesaria a sus socios a
              efectos de que puedan ofrecer nuevos servicios. Declara además que
              están incluidos toda transferencia de información, todos aquellos
              datos y sus referencias a los que GESTIONA Y APRENDE pudiera
              acceder en el curso normal de sus operaciones, ya sea por haber
              sido proporcionada por el CONSULTOR, o por terceros, tanto en
              forma física, oral o electrónica y que pudieran calificar como
              Datos Personales" conforme lo establece la citada ley y su
              reglamento.
            </label>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
