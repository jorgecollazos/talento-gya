import React from "react";

const Steps = () => {
  return (
    <>
      <div className="w-11/12 lg:w-5/6 mx-auto mt-10">
        <div className="bg-gray-200 h-1 flex items-center justify-between">
          <div className="w-1/3 flex justify-between  h-1 items-center relative">
            <div className="bg-slate-900 h-8 w-8 rounded-full shadow flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-check"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#FFFFFF"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M5 12l5 5l10 -10" />
              </svg>
            </div>

            <div className="bg-white h-8 w-8 rounded-full shadow flex items-center justify-center -mr-3 relative">
              <div className="bg-slate-900 h-8 w-8 rounded-full shadow flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-check"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#FFFFFF"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="bg-white h-8 w-8 rounded-full shadow flex items-center justify-center -mr-3 relative">
              <div className="h-5 w-5 bg-slate-900 rounded-full" />
            </div>
          </div>
          <div className="w-1/3 flex justify-end">
            <div className="bg-white h-8 w-8 rounded-full shadow flex items-center justify-center -mr-3 relative">
              <div className="h-5 w-5 bg-slate-900 rounded-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center pb-2 flex-col mt-10">
          <h1 className="text-3xl text-slate-900 font-bold">
            Formación académica
          </h1>
        </div>
      </div>
    </>
  );
};

export default Steps;
