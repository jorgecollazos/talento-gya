import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import PersonalForm from '../pages/PersonalForm';
import AcademicForm from '../pages/AcademicForm';
import ContinuosForm from '../pages/ContinuosForm';
import ExperienceForm from '../pages/ExperienceForm';
import Curriculum from '../pages/Curriculum';


import Layout from '../pages/Layout';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/register" element={<PersonalForm/>} />
          <Route exact path="/academicform" element={<AcademicForm/>} />
          <Route exact path="/continuosform" element={<ContinuosForm/>} />
          <Route exact path="/experienceform" element={<ExperienceForm/>} />
          <Route exact path="/curriculum" element={<Curriculum/>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
