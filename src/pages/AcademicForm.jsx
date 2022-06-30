import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../containers/NavBar.containers";
import Steps2 from "../containers/Steps2.containers";
import Academic from "../containers/Academic.containers";

const AcademicForm = () => {
  let {token} = useParams();
  return (
    <>
      <NavBar />
      <Steps2 />
      <Academic token={token} />
    </>
  );
};

export default AcademicForm;
