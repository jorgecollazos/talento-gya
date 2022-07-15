import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersonalForm from "../pages/PersonalForm";
import AcademicForm from "../pages/AcademicForm";
import ContinuosForm from "../pages/ContinuosForm";
import ExperienceForm from "../pages/ExperienceForm";
import Curriculum from "../pages/Curriculum";

import Layout from "../pages/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register/:token" element={<PersonalForm />} />
        <Route path="/academicform/:token" element={<AcademicForm />} />
        <Route path="/continuosform/:token" element={<ContinuosForm />} />
        <Route path="/experienceform/:token" element={<ExperienceForm />} />
        <Route path="/curriculum/:token" element={<Curriculum />} />
      </Routes>
    </>
  );
}

export default App;
