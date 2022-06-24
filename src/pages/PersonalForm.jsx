import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../containers/NavBar.containers";
import Steps from "../containers/Steps.containers";
import Card from "../containers/Card.containers";

const PersonalForm = () => {
  let {token} = useParams();
  return (
    <>
      <NavBar />
      <Steps />
      <Card token={token} />
    </>
  );
};

export default PersonalForm;
