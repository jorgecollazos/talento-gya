import React from 'react';
import { useParams } from "react-router-dom";

import NavBarCurriculum from '../containers/NavBarCurriculum.containers'
import CurriculumC from "../containers/Curriculum.containers"

const Curriculum = () => {
  let {token} = useParams();
  return (
    <>
      <NavBarCurriculum />
      <CurriculumC token={token} />
    </>
  );
};

export default Curriculum;