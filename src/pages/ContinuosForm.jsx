import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../containers/NavBar.containers";
import Steps3 from "../containers/Steps3.containers";
import Continous from "../containers/Continuos.containers";

const AcademicForm = () => {
  let {token} = useParams();
  return (
    <>
      <NavBar />
      <Steps3 />
      <Continous token={token} />
    </>
  );
};

export default AcademicForm;
