import React from "react";
import NavBar from "@components/NavBar";
import Skills from "@components/Skills";
import About from "@components/About";
import ListExperience from "@containers/ListExperience";
import ListContinuousTraining from "@containers/ListContinuousTraining";
import ListAcademicTraining from "@containers/ListAcademicTraining";
import profile from "@img/profile.webp";

const Profile = () => {
  return (
    <div>
      <NavBar />
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto my-5 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-4/12 md:mx-2">
              <div className="bg-white p-3 border-t-4 border-green-400">
                <div className="image overflow-hidden">
                  <img className="h-auto w-full mx-auto" src={profile} alt="" />
                </div>
                <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Última actualización</span>
                    <span className="ml-auto">16/04/2022</span>
                  </li>
                </ul>
              </div>
              <div className="my-4"></div>
              <About />
              <div className="my-4"></div>
              <Skills />
            </div>
            <div
              style={{ height: 1220 }}
              className="overflow-y-scroll md:w-8/12 mx-2 h-64 "
            >
              <div className="bg-white p-3 shadow-sm rounded-sm">
                <ListAcademicTraining />
              </div>

              <div className="my-4"></div>

              <div className="bg-white p-3 shadow-sm rounded-sm">
                <ListContinuousTraining />
              </div>

              <div className="my-4"></div>

              <div className="bg-white p-3 shadow-sm rounded-sm">
                <ListExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
