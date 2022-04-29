import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

import { pregrado } from "./../pregrado.js";
import { maestria } from "./../maestria.js";
import { doctorado } from "./../doctorado.js";
import { continua } from "./../continua.js";
import { experiencia } from "./../experiencia.js";

import useGetResult from "../hooks/useGetResult";
import useGetInfo from "../hooks/useGetInfo";
import Consultor from "./../components/Consultor";

const API = "http://localhost:4010/email-result";

const Search = () => {
  const [selectedPregrado, setPregrado] = useState([]);

  const [listPregradoGrado, setListPregradoGrado] = useState([]);
  const [selectedGradoPregrado, setGradoPregrado] = useState([]);

  const [selectedMaestria, setMaestria] = useState([]);
  const [listMaestria, setListMaestria] = useState([]);

  const [listMaestriaGrado, setListMaestriaGrado] = useState([]);
  const [selectedGradoMaestria, setGradoMaestria] = useState([]);

  const [selectedDoctorado, setDoctorado] = useState([]);
  const [listDoctorado, setListDoctorado] = useState([]);

  const [listDoctoradoGrado, setListDoctoradoGrado] = useState([]);
  const [selectedGradoDoctorado, setGradoDoctorado] = useState([]);

  const [selectedContinua, setContinua] = useState([]);
  const [listContinua, setListContinua] = useState([]);
  const [selectedExperiencia, setExperiencia] = useState([]);
  const [listExperiencia, setListExperiencia] = useState([]);
  const [selectedFuncionExperiencia, setFuncionExperiencia] = useState([]);
  let listEmail = [];
  const [resultConsultores, setResultConsultores] = useState([]);

  const pregrado1 = useGetInfo("http://localhost:4010/list-pregrado");
  let listPregrado = pregrado1;
  const gradopregrado1 = useGetInfo(
    "http://localhost:4010/list-grado-pregrado"
  );
  const maestria1 = useGetInfo("http://localhost:4010/list-maestria");
  const gradomaestria1 = useGetInfo(
    "http://localhost:4010/list-grado-maestria"
  );
  const doctorado1 = useGetInfo("http://localhost:4010/list-doctorado");
  const gradodoctorado1 = useGetInfo(
    "http://localhost:4010/list-grado-doctorado"
  );

  const continua1 = useGetInfo("http://localhost:4010/list-continua");
  const experiencia1 = useGetInfo("http://localhost:4010/list-experiencia");

  const hola = useGetResult(API, listEmail);

  const listConsultores = (listConsultor) => {
    let resultConsultoresTMP = [];
    if (listConsultor.length === 0) {
      return hola;
    }
    for (let i = 0; i < listConsultor.length; i++) {
      for (let j = 0; j < hola.length; j++) {
        if (listConsultor[i] === hola[j].email) {
          resultConsultoresTMP.push(hola[j]);
        }
      }
    }
    let uniqueChars = [...new Set(resultConsultoresTMP)];
    return uniqueChars;
  };

  const convertList = (list, list0) => {
    if (list.length === 0) {
      return list0;
    }
    let convertedList = [];
    for (let i = 0; i < list.length; i++) {
      for (let j = 0; j < list0.length; j++) {
        if (list[i].value === list0[j].value) {
          convertedList.push(list0[j]);
        }
      }
    }
    return convertedList;
  };

  const onSetPregrado = (listPregrado) => {
    setPregrado(listPregrado);
    let grado = [];
    for (let i = 0; i < gradopregrado1.length; i++) {
      for (let j = 0; j < listPregrado.length; j++) {
        if (gradopregrado1[i].carrerauniversitaria === listPregrado[j].value) {
          grado.push({
            value: gradopregrado1[i].value,
            label: gradopregrado1[i].label,
          });
        }
      }
    }
    let hash = {};
    grado = grado.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListPregradoGrado(grado);

    let selectedPregrado2 = convertList(listPregrado, pregrado);
    let listMaestriaTMP = [],
      listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedPregrado2.length; i++) {
      listEmailTMP.push(selectedPregrado2[i].email);
      for (let j = 0; j < maestria.length; j++) {
        if (maestria[j].email === selectedPregrado2[i].email) {
          listMaestriaTMP.push(maestria[j]);
        }
      }
      for (let j = 0; j < doctorado.length; j++) {
        if (doctorado[j].email === selectedPregrado2[i].email) {
          listDoctoradoTMP.push(doctorado[j]);
        }
      }
      for (let j = 0; j < continua.length; j++) {
        if (continua[j].email === selectedPregrado2[i].email) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (experiencia[j].email === selectedPregrado2[i].email) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }

    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listMaestriaTMP = listMaestriaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListMaestria(listMaestriaTMP);

    listDoctoradoTMP = listDoctoradoTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListDoctorado(listDoctoradoTMP);

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetGradoPregrado = (list) => {
    let hash = {};
    setGradoPregrado(list);
    let gradoTMP = [];
    for (let i = 0; i < list.length; i++) {
      gradoTMP.push(list[i].value);
    }
    let selectedPregrado2 = convertList(selectedPregrado, pregrado);
    let listMaestriaTMP = [],
      listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedPregrado2.length; i++) {
      if (gradoTMP.includes(selectedPregrado2[i].nombreformacionpregrado)) {
        listEmailTMP.push(selectedPregrado2[i].email);
      }
      for (let j = 0; j < maestria.length; j++) {
        if (
          maestria[j].email === selectedPregrado2[i].email &&
          gradoTMP.includes(selectedPregrado2[i].nombreformacionpregrado)
        ) {
          listMaestriaTMP.push(maestria[j]);
        }
      }
      for (let j = 0; j < doctorado.length; j++) {
        if (
          doctorado[j].email === selectedPregrado2[i].email &&
          gradoTMP.includes(selectedPregrado2[i].nombreformacionpregrado)
        ) {
          listDoctoradoTMP.push(doctorado[j]);
        }
      }
      for (let j = 0; j < continua.length; j++) {
        if (
          continua[j].email === selectedPregrado2[i].email &&
          gradoTMP.includes(selectedPregrado2[i].nombreformacionpregrado)
        ) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (
          experiencia[j].email === selectedPregrado2[i].email &&
          gradoTMP.includes(selectedPregrado2[i].nombreformacionpregrado)
        ) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }
    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listMaestriaTMP = listMaestriaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListMaestria(listMaestriaTMP);

    listDoctoradoTMP = listDoctoradoTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListDoctorado(listDoctoradoTMP);

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetMaestria = (list) => {
    setMaestria(list);
    let grado = [];
    for (let i = 0; i < gradomaestria1.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (gradomaestria1[i].carrerauniversitaria === list[j].value) {
          console.log("entro");
          grado.push({
            value: gradomaestria1[i].value,
            label: gradomaestria1[i].label,
          });
        }
      }
    }
    let hash = {};
    grado = grado.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    console.log(grado);
    setListMaestriaGrado(grado);

    let selectedMaestria2 = convertList(list, maestria);
    let listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedMaestria2.length; i++) {
      listEmailTMP.push(selectedMaestria2[i].email);
      for (let j = 0; j < doctorado.length; j++) {
        if (doctorado[j].email === selectedMaestria2[i].email) {
          listDoctoradoTMP.push(doctorado[j]);
        }
      }
      for (let j = 0; j < continua.length; j++) {
        if (continua[j].email === selectedMaestria2[i].email) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (experiencia[j].email === selectedMaestria2[i].email) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }
    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listDoctoradoTMP = listDoctoradoTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListDoctorado(listDoctoradoTMP);

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetGradoMaestria = (list) => {
    let hash = {};
    setGradoMaestria(list);
    let gradoTMP = [];
    for (let i = 0; i < list.length; i++) {
      gradoTMP.push(list[i].value);
    }

    let selectedMaestria2 = convertList(selectedMaestria, maestria);
    let listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedMaestria2.length; i++) {
      if (gradoTMP.includes(selectedMaestria2[i].nombresubpostgrado)) {
        listEmailTMP.push(selectedMaestria2[i].email);
      }
      for (let j = 0; j < doctorado.length; j++) {
        if (
          doctorado[j].email === selectedMaestria2[i].email &&
          gradoTMP.includes(selectedMaestria2[i].nombresubpostgrado)
        ) {
          listDoctoradoTMP.push(doctorado[j]);
        }
      }
      for (let j = 0; j < continua.length; j++) {
        if (
          continua[j].email === selectedMaestria2[i].email &&
          gradoTMP.includes(selectedMaestria2[i].nombresubpostgrado)
        ) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (
          experiencia[j].email === selectedMaestria2[i].email &&
          gradoTMP.includes(selectedMaestria2[i].nombresubpostgrado)
        ) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }

    if (listEmailTMP.length) {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listDoctoradoTMP = listDoctoradoTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListDoctorado(listDoctoradoTMP);

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetDoctorado = (list) => {
    setDoctorado(list);
    let grado = [];
    for (let i = 0; i < gradodoctorado1.length; i++) {
      for (let j = 0; j < list.length; j++) {
        if (gradodoctorado1[i].carrerauniversitaria === list[j].value) {
          grado.push({
            value: gradodoctorado1[i].value,
            label: gradodoctorado1[i].label,
          });
        }
      }
    }
    let hash = {};
    grado = grado.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListDoctoradoGrado(grado);

    let selectedDoctorado2 = convertList(list, doctorado);
    let listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedDoctorado2.length; i++) {
      listEmailTMP.push(selectedDoctorado2[i].email);
      for (let j = 0; j < continua.length; j++) {
        if (continua[j].email === selectedDoctorado2[i].email) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (experiencia[j].email === selectedDoctorado2[i].email) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }

    if (listEmailTMP.length) {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetGradoDoctorado = (list) => {
    let hash = {};
    setGradoDoctorado(list);
    let gradoTMP = [];
    for (let i = 0; i < list.length; i++) {
      gradoTMP.push(list[i].value);
    }

    let selectedDoctorado2 = convertList(selectedDoctorado, doctorado);
    let listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedDoctorado2.length; i++) {
      if (gradoTMP.includes(selectedDoctorado2[i].nombresubpostgrado)) {
        listEmailTMP.push(selectedDoctorado2[i].email);
      }
      for (let j = 0; j < continua.length; j++) {
        if (
          continua[j].email === selectedDoctorado2[i].email &&
          gradoTMP.includes(selectedDoctorado2[i].nombresubpostgrado)
        ) {
          listContinuaTMP.push(continua[j]);
        }
      }
      for (let j = 0; j < experiencia.length; j++) {
        if (
          experiencia[j].email === selectedDoctorado2[i].email &&
          gradoTMP.includes(selectedDoctorado2[i].nombresubpostgrado)
        ) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }

    if (listEmailTMP.length) {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listContinuaTMP = listContinuaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListContinua(listContinuaTMP);

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetContinua = (list) => {
    setContinua(list);
    let hash = {};
    let selectedContinua2 = convertList(list, continua);
    let listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedContinua2.length; i++) {
      listEmailTMP.push(selectedContinua2[i].email);
      for (let j = 0; j < experiencia.length; j++) {
        if (experiencia[j].email === selectedContinua2[i].email) {
          listExperienciaTMP.push(experiencia[j]);
        }
      }
    }
    if (listEmailTMP.length) {
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetHours = (number) => {
    let listEmailTMP = [];
    for (let i = 0; i < selectedContinua.length; i++) {
      if(selectedContinua[i].horasacademicas >= number && selectedContinua[i].horasacademicas !== null) {
        listEmailTMP.push(selectedContinua[i].email)
      }
    }
      setResultConsultores(listConsultores(listEmailTMP));
  }

  return (
    <div>
      <div className="px-2 py-2 ">
        <div className="flex flex-no-wrap items-start">
          <div className="w-full ">
            <div className="py-2 px-2">
              <div className="bg-white rounded shadow">
                <div className="py-7 px-7">
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Formación académica
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-4 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona pregrado
                      </p>
                      <MultiSelect
                        options={listPregrado}
                        value={selectedPregrado}
                        onChange={onSetPregrado}
                        labelledBy="Select"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona grado del pregrado
                      </p>
                      <MultiSelect
                        options={listPregradoGrado}
                        value={selectedGradoPregrado}
                        onChange={onSetGradoPregrado}
                        labelledBy=""
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona maestría
                      </p>
                      <MultiSelect
                        options={listMaestria}
                        value={selectedMaestria}
                        onChange={onSetMaestria}
                        labelledBy="Select"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona grado de la maestría
                      </p>
                      <MultiSelect
                        options={listMaestriaGrado}
                        value={selectedGradoMaestria}
                        onChange={onSetGradoMaestria}
                        labelledBy=""
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona doctorado
                      </p>
                      <MultiSelect
                        options={listDoctorado}
                        value={selectedDoctorado}
                        onChange={onSetDoctorado}
                        labelledBy="Select"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona grado del doctorado
                      </p>
                      <MultiSelect
                        options={listDoctoradoGrado}
                        value={selectedGradoDoctorado}
                        onChange={onSetGradoDoctorado}
                        labelledBy=""
                      />
                    </div>
                  </div>
                  <hr className="h-[1px] bg-gray-100 my-6" />
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Formación continua
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-4 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona capacitación
                      </p>
                      <MultiSelect
                        options={listContinua}
                        value={selectedContinua}
                        onChange={onSetContinua}
                        labelledBy="Select"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Ingresa el mínimo de horas
                      </p>
                      <input
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        type="number"
                        onChange={(event) => onSetHours(event.target.value)}
                      />
                    </div>
                  </div>
                  <hr className="h-[1px] bg-gray-100 my-6" />
                  <p className="text-xl font-semibold leading-tight text-gray-800">
                    Experiencia laboral
                  </p>
                  <div className="grid w-full grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4 mt-4 ">
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona cargo
                      </p>
                      <MultiSelect
                        options={listExperiencia}
                        value={selectedExperiencia}
                        onChange={setExperiencia}
                        labelledBy="Select"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Ingresa el mínimo de años
                      </p>
                      <input
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        type="number"
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona función
                      </p>
                      <MultiSelect
                        options={[]}
                        value={[]}
                        onChange={[]}
                        labelledBy=""
                        disabled={true}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Ingresa el mínimo de años
                      </p>
                      <input
                        className="w-full p-2 mt-1 border border-gray-300 rounded outline-none focus:bg-gray-50"
                        type="number"
                      />
                    </div>
                    <hr className="h-[1px] bg-gray-100 my-1" />
                    <p className="text-xl font-semibold leading-tight text-gray-800">
                      Nº de resultados: {resultConsultores.length}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-inside space-y-2 mx-4">
        {resultConsultores.map((resultConsultores) => (
          <Consultor
            consultor={resultConsultores}
            key={resultConsultores.idpostulante}
          />
        ))}
      </ul>
    </div>
  );
};

export default Search;
