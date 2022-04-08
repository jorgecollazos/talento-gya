import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import axios from 'axios';
import { experiencia } from "./../experiencia.js";
import { pregrado } from "./../pregrado.js";
import { maestria } from "./../maestria.js";
import { doctorado } from "./../doctorado.js";
import { consultores } from "./../consultores.js";
import { continua } from "./../continua.js";
import useGetInfo from "@hooks/useGetResult";
import Consultor from "./../components/Consultor";

let listPregrado = pregrado;
let listMaestria = maestria;
let listDoctorado = doctorado;
let listContinua = continua;
let listExperiencia = experiencia;
let listEmail = [],
  numListEmail = 0;
const API = "http://localhost:4010/email-result";
let resultConsultores = consultores;


const Search = () => {


  const [selectedExperiencia, setExperiencia] = useState([]);
  const [selectedPregrado, setPregrado] = useState([]);
  const [selectedMaestria, setMaestria] = useState([]);
  const [selectedDoctorado, setDoctorado] = useState([]);
  const [selectedContinua, setContinua] = useState([]);

  const result = () => {
    let listEmail = [],
      numListEmail = 0;
    for (let i = 0; i < selectedPregrado.length; i++) {
      listEmail.push(selectedPregrado[i].email);
    }
    for (let i = 0; i < selectedMaestria.length; i++) {
      listEmail.push(selectedMaestria[i].email);
    }
    for (let i = 0; i < selectedDoctorado.length; i++) {
      listEmail.push(selectedDoctorado[i].email);
    }
    for (let i = 0; i < selectedContinua.length; i++) {
      listEmail.push(selectedContinua[i].email);
    }
    for (let i = 0; i < selectedExperiencia.length; i++) {
      listEmail.push(selectedExperiencia[i].email);
    }
    listEmail = listEmail.filter(
      (value, index) => listEmail.indexOf(value) === index
    );
    numListEmail = listEmail.length;
    return [listEmail, numListEmail];
  };

  const  sendEmails = (data) => {
    axios
      .post("http://137.184.220.167:4010/email-result", data)
      .then(
        (response) => {
          console.log(response.data);
          resultConsultores = response.data;
          console.log(resultConsultores, "print");

        },
        (error) => {
          console.log(error);
        }
      );
  };

  

  if (selectedPregrado.length) {
    let listDoctoradoTMP = [],
      listMaestriaTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [];
    for (let i = 0; i < selectedPregrado.length; i++) {
      for (let j = 0; j < listDoctorado.length; j++) {
        if (listDoctorado[j].email === selectedPregrado[i].email) {
          listDoctoradoTMP.push(listDoctorado[j]);
        }
      }
      for (let j = 0; j < listMaestria.length; j++) {
        if (listMaestria[j].email === selectedPregrado[i].email) {
          listMaestriaTMP.push(listMaestria[j]);
        }
      }
      for (let j = 0; j < listContinua.length; j++) {
        if (listContinua[j].email === selectedPregrado[i].email) {
          listContinuaTMP.push(listContinua[j]);
        }
      }
      for (let j = 0; j < listExperiencia.length; j++) {
        if (listExperiencia[j].email === selectedPregrado[i].email) {
          listExperienciaTMP.push(listExperiencia[j]);
        }
      }
    }
    listDoctorado = listDoctoradoTMP;
    listMaestria = listMaestriaTMP;
    listContinua = listContinuaTMP;
    listExperiencia = listExperienciaTMP;
    [listEmail, numListEmail] = result();
  }

  if (selectedMaestria.length) {
    let listDoctoradoTMP = [],
      listPregradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [];
    for (let i = 0; i < selectedMaestria.length; i++) {
      for (let j = 0; j < listDoctorado.length; j++) {
        if (listDoctorado[j].email === selectedMaestria[i].email) {
          listDoctoradoTMP.push(listDoctorado[j]);
        }
      }
      for (let j = 0; j < listPregrado.length; j++) {
        if (listPregrado[j].email === selectedMaestria[i].email) {
          listPregradoTMP.push(listPregrado[j]);
        }
      }
      for (let j = 0; j < listContinua.length; j++) {
        if (listContinua[j].email === selectedMaestria[i].email) {
          listContinuaTMP.push(listContinua[j]);
        }
      }
      for (let j = 0; j < listExperiencia.length; j++) {
        if (listExperiencia[j].email === selectedMaestria[i].email) {
          listExperienciaTMP.push(listExperiencia[j]);
        }
      }
    }
    listDoctorado = listDoctoradoTMP;
    listPregrado = listPregradoTMP;
    listContinua = listContinuaTMP;
    listExperiencia = listExperienciaTMP;
    [listEmail, numListEmail] = result();
  }

  if (selectedDoctorado.length) {
    let listPregradoTMP = [],
      listMaestriaTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [];
    for (let i = 0; i < selectedDoctorado.length; i++) {
      for (let j = 0; j < listPregrado.length; j++) {
        if (listPregrado[j].email === selectedDoctorado[i].email) {
          listPregradoTMP.push(listPregrado[j]);
        }
      }
      for (let j = 0; j < listMaestria.length; j++) {
        if (listMaestria[j].email === selectedDoctorado[i].email) {
          listMaestriaTMP.push(listMaestria[j]);
        }
      }
      for (let j = 0; j < listContinua.length; j++) {
        if (listContinua[j].email === selectedDoctorado[i].email) {
          listContinuaTMP.push(listContinua[j]);
        }
      }
      for (let j = 0; j < listExperiencia.length; j++) {
        if (listExperiencia[j].email === selectedDoctorado[i].email) {
          listExperienciaTMP.push(listExperiencia[j]);
        }
      }
    }
    listPregrado = listPregradoTMP;
    listMaestria = listMaestriaTMP;
    listContinua = listContinuaTMP;
    listExperiencia = listExperienciaTMP;
    [listEmail, numListEmail] = result();
  }

  if (selectedContinua.length) {
    let listPregradoTMP = [],
      listMaestriaTMP = [],
      listDoctoradoTMP = [],
      listExperienciaTMP = [];
    for (let i = 0; i < selectedContinua.length; i++) {
      for (let j = 0; j < listPregrado.length; j++) {
        if (listPregrado[j].email === selectedContinua[i].email) {
          listPregradoTMP.push(listPregrado[j]);
        }
      }
      for (let j = 0; j < listMaestria.length; j++) {
        if (listMaestria[j].email === selectedContinua[i].email) {
          listMaestriaTMP.push(listMaestria[j]);
        }
      }
      for (let j = 0; j < listDoctorado.length; j++) {
        if (listDoctorado[j].email === selectedContinua[i].email) {
          listDoctoradoTMP.push(listDoctorado[j]);
        }
      }
      for (let j = 0; j < listExperiencia.length; j++) {
        if (listExperiencia[j].email === selectedContinua[i].email) {
          listExperienciaTMP.push(listExperiencia[j]);
        }
      }
    }
    listPregrado = listPregradoTMP;
    listMaestria = listMaestriaTMP;
    listDoctorado = listDoctoradoTMP;
    listExperiencia = listExperienciaTMP;
    [listEmail, numListEmail] = result();
  }

  if (selectedExperiencia.length) {
    let listPregradoTMP = [],
      listMaestriaTMP = [],
      listContinuaTMP = [],
      listDoctoradoTMP = [];
    for (let i = 0; i < selectedExperiencia.length; i++) {
      for (let j = 0; j < listPregrado.length; j++) {
        if (listPregrado[j].email === selectedExperiencia[i].email) {
          listPregradoTMP.push(listPregrado[j]);
        }
      }
      for (let j = 0; j < listMaestria.length; j++) {
        if (listMaestria[j].email === selectedExperiencia[i].email) {
          listMaestriaTMP.push(listMaestria[j]);
        }
      }
      for (let j = 0; j < listContinua.length; j++) {
        if (listContinua[j].email === selectedExperiencia[i].email) {
          listContinuaTMP.push(listContinua[j]);
        }
      }
      for (let j = 0; j < listDoctorado.length; j++) {
        if (listDoctorado[j].email === selectedExperiencia[i].email) {
          listDoctoradoTMP.push(listDoctorado[j]);
        }
      }
    }
    listPregrado = listPregradoTMP;
    listMaestria = listMaestriaTMP;
    listContinua = listContinuaTMP;
    listDoctorado = listDoctoradoTMP;
    [listEmail, numListEmail] = result();
  }

  sendEmails(listEmail);

  return (
    <div>
      <h1>Selecciona pregrado</h1>
      <MultiSelect
        options={listPregrado}
        value={selectedPregrado}
        onChange={setPregrado}
        labelledBy="Select"
      />
      <br />
      <h1>Selecciona maestria</h1>
      <MultiSelect
        options={listMaestria}
        value={selectedMaestria}
        onChange={setMaestria}
        labelledBy="Select"
      />
      <br />
      <h1>Selecciona doctorado</h1>
      <MultiSelect
        options={listDoctorado}
        value={selectedDoctorado}
        onChange={setDoctorado}
        labelledBy="Select"
      />
      <br />
      <h1>Selecciona formación continua</h1>
      <MultiSelect
        options={listContinua}
        value={selectedContinua}
        onChange={setContinua}
        labelledBy="Select"
      />
      <br />
      <h1>Selecciona experiencia</h1>
      <MultiSelect
        options={listExperiencia}
        value={selectedExperiencia}
        onChange={setExperiencia}
        labelledBy="Select"
      />
      <h1>Posibles resultados: {numListEmail}</h1>
      <br/>
      <br/>
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
