import React from "react";

const Curriculum = () => {
  return (
    <div className="container mx-auto my-5 flex flex-wrap">
      <div className="basis-1/3 bg-green-400 h-screen flex flex-col">
        <div className="w-full h-72 mb-10 bg-slate-50 rounded-2xl">
          <div className="grid grid-row-1 content-center justify-items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-60 w-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl">Nombre completo de la persona</p>
          </div>
        </div>
        <div className="w-full h-72 bg-slate-50 rounded-2xl">
          <div className="grid grid-row-1 content-center justify-items-center">
            <p className="pt-4 text-xl">Datos de contacto</p>
          </div>
        </div>
      </div>
      <div className="basis-2/3 h-screen">
        <div class="grid grid-cols-3 gap-0 content-center justify-items-center bg-slate-400 rounded-t-2xl ml-4">
          <div className="rounded-t-2xl bg-slate-50 w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center">Formación académica</div>
          <div className=" w-full h-10 grid grid-cols-1 gap-4 content-center justify-items-center">Formación continua</div>
          <div className="rounded-t-2xl w-full h-10 shadow-2xl grid grid-cols-1 gap-4 content-center justify-items-center">Formación laboral</div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
