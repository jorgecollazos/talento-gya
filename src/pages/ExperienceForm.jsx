import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../containers/NavBar.containers";
import Steps4 from "../containers/Steps4.containers";
import Experience from "../containers/Experience.containers";

const AcademicForm = () => {
  let {token} = useParams();
  return (
    <>
      <NavBar />
      <Steps4 />
      <Experience token={token}  />
    </>
  );
};

export default AcademicForm;
