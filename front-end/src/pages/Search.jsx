import React, { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";

import { pregrado } from "./../pregrado.js";
import { maestria } from "./../maestria.js";
import { doctorado } from "./../doctorado.js";
import { continua } from "./../continua.js";
import { experiencia } from "./../experiencia.js";
import { experienciafuncion } from "./../experienciafuncion.js";

import useGetResult from "../hooks/useGetResult";
import useGetInfo from "../hooks/useGetInfo";
import Consultor from "./../components/Consultor";

const API = "http://137.184.220.167:4010/email-result";

const Search = () => {
  const [selectedPregrado, setPregrado] = useState([]);

  const [listPregradoGrado, setListPregradoGrado] = useState([]);
  const [selectedGradoPregrado, setGradoPregrado] = useState([]);

  const [title, setTitle] = useState(false);

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

  const [selectedExperienciaFuncion, setExperienciaFuncion] = useState([]);
  const [listExperienciaFuncion, setListExperienciaFuncion] = useState([]);

  const [listEmail, setListEmail] = useState([]);
  const [listEmail2, setListEmail2] = useState([]);
  const [listEmail3, setListEmail3] = useState([]);
  const [listEmail4, setListEmail4] = useState([]);
  const [listEmail5, setListEmail5] = useState([]);
  const [listEmail6, setListEmail6] = useState([]);
  const [listEmail7, setListEmail7] = useState([]);
  const [listEmail8, setListEmail8] = useState([]);
  const [listEmailPregrado, setListEmailPregrado] = useState([]);
  const [listEmailGradoPregrado, setListEmailGradoPregrado] = useState([]);
  const [listEmailColegiado, setListEmailColegiado] = useState([]);
  const [listEmailMaestria, setListEmailMaestria] = useState([]);
  const [listEmailGradoMaestria, setListEmailGradoMaestria] = useState([]);
  const [listEmailDoctorado, setListEmailDoctorado] = useState([]);
  const [listEmailGradoDoctorado, setListEmailGradoDoctorado] = useState([]);
  const [listEmailContinua, setListEmailContinua] = useState([]);
  const [listEmailHorasContinua, setListEmailHorasContinua] = useState([]);
  const [listEmailCargo, setListEmailCargo] = useState([]);
  const [listEmailAniosCargo, setListEmailAniosCargo] = useState([]);
  const [listEmailFuncion, setListEmailFuncion] = useState([]);

  const [resultConsultores, setResultConsultores] = useState([]);

  const pregrado1 = useGetInfo("http://137.184.220.167:4010/list-pregrado");
  let listPregrado = pregrado1;
  const gradopregrado1 = useGetInfo(
    "http://137.184.220.167:4010/list-grado-pregrado"
  );
  const maestria1 = useGetInfo("http://137.184.220.167:4010/list-maestria");
  const gradomaestria1 = useGetInfo(
    "http://137.184.220.167:4010/list-grado-maestria"
  );
  const doctorado1 = useGetInfo("http://137.184.220.167:4010/list-doctorado");
  const gradodoctorado1 = useGetInfo(
    "http://137.184.220.167:4010/list-grado-doctorado"
  );

  const continua1 = useGetInfo("http://137.184.220.167:4010/list-continua");
  const experiencia1 = useGetInfo("http://137.184.220.167:4010/list-experiencia");

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

    // Carga los grados de los pregrados
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

    // Carga las maestrias, doctorados, capacitaciones, experiencias
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

    // Guarda la lista de email y filtra
    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setListEmail(listEmailTMP);
      setListEmail2(listEmailTMP);
      setListEmailPregrado(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setListEmail(listEmailTMP);
      setListEmail2(listEmailTMP);
      setListEmailPregrado(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    }
  };

  const onSetGradoPregrado = (list) => {
    setGradoPregrado(list);

    // Crea un array de grados selecionados
    let hash = {};
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

    // Guarda la lista de email y filtra
    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setListEmail(listEmailTMP);
      setListEmail2(listEmailTMP);
      setListEmailGradoPregrado(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setListEmail(listEmailTMP);
      setListEmail2(listEmailTMP);
      setListEmailGradoPregrado(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    }
  };

  const onSetTitle = (value) => {
    setTitle(value);
    // Crea un array de grados selecionados
    let hash = {};
    let gradoTMP = [];
    for (let i = 0; i < selectedGradoPregrado.length; i++) {
      gradoTMP.push(selectedGradoPregrado[i].value);
    }

    let selectedPregrado2 = convertList(selectedPregrado, pregrado);
    let listMaestriaTMP = [],
      listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [];

    let listEmailColegiado = [];
    if (value) {
      for (let i = 0; i < pregrado.length; i++) {
        for (let j = 0; j < listEmail.length; j++) {
          if (
            pregrado[i].email === listEmail[j] &&
            pregrado[i].erescolegiado == value
          ) {
            listEmailColegiado.push(listEmail[j]);
          }
        }
      }

      for (let i = 0; i < selectedPregrado2.length; i++) {
        if (listEmailColegiado.includes(selectedPregrado2[i].email)) {
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
      }

      setListEmail(listEmailColegiado);
      setListEmail2(listEmailColegiado);
      setListEmailColegiado(listEmailColegiado);
      setResultConsultores(listConsultores(listEmailColegiado));
    } else {
      for (let i = 0; i < selectedPregrado2.length; i++) {
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
      setListEmail(listEmailGradoPregrado);
      setListEmail2(listEmailGradoPregrado);
      setListEmailColegiado(listEmailColegiado);
      setResultConsultores(listConsultores(listEmailGradoPregrado));
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
    for (let i = 0; i < maestria.length; i++) {
      if (listEmail2.includes(maestria[i].email)) {
        for (let j = 0; j < list.length; j++) {
          if (maestria[i].value === list[j].value) {
            console.log("entro");
            grado.push({
              value: maestria[i].nombresubpostgrado,
              label: maestria[i].nombresubpostgrado,
            });
          }
        }
      }
    }
    let hash = {};
    grado = grado.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );

    setListMaestriaGrado(grado);

    let selectedMaestria2 = convertList(list, maestria);
    let listDoctoradoTMP = [],
      listContinuaTMP = [],
      listExperienciaTMP = [],
      listEmailTMP = [];
    for (let i = 0; i < selectedMaestria2.length; i++) {
      if (listEmail2.includes(selectedMaestria2[i].email)) {
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
    }
    if (listEmailTMP.length <= listEmail.length && listEmail.length !== 0) {
      setListEmail(listEmailTMP);
      setListEmail3(listEmailTMP);
      setListEmail4(listEmailTMP);
      setListEmailMaestria(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setListEmail(listEmailTMP);
      setListEmail3(listEmailTMP);
      setListEmail4(listEmailTMP);
      setListEmailMaestria(listEmailTMP);
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
      if (listEmail3.includes(selectedMaestria2[i].email)) {
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

    setListEmail(listEmailTMP);
    setListEmail4(listEmailTMP);
    setListEmailGradoMaestria(listEmailTMP);
    setResultConsultores(listConsultores(listEmailTMP));
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
      if (listEmail4.includes(selectedDoctorado2[i].email)) {
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
    }

    if (listEmailTMP.length) {
      setListEmail(listEmailTMP);
      setListEmail5(listEmailTMP);
      setListEmail6(listEmailTMP);
      setListEmailDoctorado(listEmailTMP);
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
      if (listEmail5.includes(selectedDoctorado2[i].email)) {
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
    }

    if (listEmailTMP.length) {
      setListEmail(listEmailTMP);
      setListEmail6(listEmailTMP);
      setListEmailGradoDoctorado(listEmailTMP);
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
      if (listEmail6.includes(selectedContinua2[i].email)) {
        listEmailTMP.push(selectedContinua2[i].email);
        for (let j = 0; j < experiencia.length; j++) {
          if (experiencia[j].email === selectedContinua2[i].email) {
            listExperienciaTMP.push(experiencia[j]);
          }
        }
      }
    }
    if (listEmailTMP.length) {
      setListEmail(listEmailTMP);
      setListEmail7(listEmailTMP);
      setListEmail8(listEmailTMP);
      setListEmailContinua(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    }

    listExperienciaTMP = listExperienciaTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperiencia(listExperienciaTMP);
  };

  const onSetHours = (number) => {
    if (number >= 0) {
      let listEmailTMP = [];
      for (let i = 0; i < selectedContinua.length; i++) {
        if (
          selectedContinua[i].horasacademicas >= number &&
          selectedContinua[i].horasacademicas !== null
        ) {
          listEmailTMP.push(selectedContinua[i].email);
        }
      }
      setListEmail(listEmailTMP);
      setListEmailHorasContinua(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setListEmail(listEmailContinua);
      setResultConsultores(listConsultores(listEmailContinua));
    }
  };

  const onSetExperiencia = (list) => {
    let hash = {};
    let listEmailTMP = [];
    let listCargos = [];
    let listExperienciaFuncionTMP = [];
    setExperiencia(list);
    for (let i = 0; i < list.length; i++) {
      listEmailTMP.push(list[i].email);
      listCargos.push(list[i].value);
    }
    listEmailTMP = [...new Set(listEmailTMP)];
    listCargos = [...new Set(listCargos)];
    for (let i = 0; i < experienciafuncion.length; i++) {
      for (let j = 0; j < listEmailTMP.length; j++) {
        if (
          listEmailTMP[j] === experienciafuncion[i].email &&
          listCargos.includes(experienciafuncion[i].nombrecargo)
        ) {
          listExperienciaFuncionTMP.push(experienciafuncion[i]);
        }
      }
    }
    listExperienciaFuncionTMP = listExperienciaFuncionTMP.filter((o) =>
      hash[o.value] ? false : (hash[o.value] = true)
    );
    setListExperienciaFuncion(listExperienciaFuncionTMP);

    setListEmail(listEmailTMP);
    setListEmailCargo(listEmailTMP);
    setResultConsultores(listConsultores(listEmailTMP));
  };

  const onSetAges = (number) => {
    let hash = {};
    let listEmailTMP = [];
    let listCargos = [];
    let listExperienciaFuncionTMP = [];
    let emailTMP = [];
    let emailAniosTMP = [];

    if (number >= 0) {
      for (let i = 0; i < listExperiencia.length; i++) {
        emailTMP.push(listExperiencia[i].email);
      }
      emailTMP = [...new Set(emailTMP)];
      for (let i = 0; i < emailTMP.length; i++) {
        emailAniosTMP.push(0);
      }

      for (let i = 0; i < listExperiencia.length; i++) {
        const index = emailTMP.indexOf(listExperiencia[i].email);
        emailAniosTMP[index] += listExperiencia[i].dias;
      }

      console.log(emailTMP);
      console.log(emailAniosTMP);

      for (let i = 0; i < emailTMP.length; i++) {
        if (emailAniosTMP[i] / 365 >= number) {
          listEmailTMP.push(emailTMP[i]);
        }
      }

      for (let i = 0; i < listExperiencia.length; i++) {
        if (emailTMP.includes(listExperiencia[i].email)) {
          listCargos.push(listExperiencia[i].value);
        }
      }

      listEmailTMP = [...new Set(listEmailTMP)];
      listCargos = [...new Set(listCargos)];

      for (let i = 0; i < experienciafuncion.length; i++) {
        for (let j = 0; j < listEmailTMP.length; j++) {
          if (
            listEmailTMP[j] === experienciafuncion[i].email &&
            listCargos.includes(experienciafuncion[i].nombrecargo)
          ) {
            listExperienciaFuncionTMP.push(experienciafuncion[i]);
          }
        }
      }
      listExperienciaFuncionTMP = listExperienciaFuncionTMP.filter((o) =>
        hash[o.value] ? false : (hash[o.value] = true)
      );
      setListExperienciaFuncion(listExperienciaFuncionTMP);

      setListEmailAniosCargo(listEmailTMP);
      setResultConsultores(listConsultores(listEmailTMP));
    } else {
      setResultConsultores(listConsultores(listEmailCargo));
    }
  };

  const onSetExperienciaFuncion = (list) => {
    setExperienciaFuncion(list);
    let listEmailTMP = [];
    for (let i = 0; i < list.length; i++) {
      listEmailTMP.push(list[i].email);
    }
    setListEmail(listEmailTMP);
    setResultConsultores(listConsultores(listEmailTMP));
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

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
                    <div className="grid w-full grid-cols-2">
                      <div>
                        <p className="text-base font-medium leading-none text-gray-800 mb-1">
                          Selecciona grado del pregrado
                        </p>
                        <MultiSelect
                          options={listPregradoGrado}
                          value={selectedGradoPregrado}
                          onChange={onSetGradoPregrado}
                          labelledBy="Select"
                        />
                      </div>

                      <div>
                        <p className="text-base font-medium leading-none text-gray-800 mb-1">
                          Selecciona si es colegiado
                        </p>
                        <div className="mx-auto flex flex-col items-center">
                          <div className="cursor-pointer my-5 rounded-full bg-gray-200 relative shadow-sm">
                            <input
                              type="checkbox"
                              name="toggle"
                              id="toggle1"
                              onChange={() => onSetTitle(!title)}
                              className="focus:outline-none checkbox w-6 h-6 rounded-full bg-white absolute shadow-sm appearance-none cursor-pointer border border-transparent top-0 bottom-0 m-auto"
                            />
                            <label
                              htmlFor="toggle1"
                              className="toggle-label dark:bg-gray-700 block w-12 h-4 overflow-hidden rounded-full bg-gray-300 cursor-pointer"
                            />
                          </div>
                          <style>
                            {`.checkbox:checked {
                                /* Apply class right-0*/
                                right: 0;
                            }
                            .checkbox:checked + .toggle-label {
                                /* Apply class bg-indigo-700 */
                                background-color: #4c51bf;
                            }`}
                          </style>
                        </div>
                      </div>
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
                        labelledBy="Select"
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
                        onChange={onSetExperiencia}
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
                        onChange={(event) => onSetAges(event.target.value)}
                      />
                    </div>
                    <div>
                      <p className="text-base font-medium leading-none text-gray-800 mb-1">
                        Selecciona función
                      </p>
                      <MultiSelect
                        options={listExperienciaFuncion}
                        value={selectedExperienciaFuncion}
                        onChange={onSetExperienciaFuncion}
                        labelledBy=""
                      />
                    </div>


                    <hr className="h-[1px] bg-gray-100 my-1" />
                    <p className="text-xl font-semibold leading-tight text-gray-800">
                      Nº de resultados: {resultConsultores.length}
                    </p>
                    <button
                        onClick={refreshPage}
                        className="mx-2 my-2 bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-6 py-2 text-xs"
                      >
                        Limpiar
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 gap-4">
        {resultConsultores.map((resultConsultores) => (
          <Consultor
            consultor={resultConsultores}
            key={resultConsultores.idpostulante}
          />
        ))}
      </div>
      {/* <ul className="list-inside space-y-2 mx-4">
        {resultConsultores.map((resultConsultores) => (
          <Consultor
            consultor={resultConsultores}
            key={resultConsultores.idpostulante}
          />
        ))}
      </ul> */}
    </div>
  );
};

export default Search;
