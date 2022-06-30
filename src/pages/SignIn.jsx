import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../partials/Header";
import Form from "../components/Form";

function SignIn() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    console.log(email, password);
    e.preventDefault();
    try {
      let res = await fetch("http://137.184.220.167:4010/signin", {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      // let resJson = await res.json();
      if (res.status === 200) {
        setPassword("");
        setEmail("");
        console.log("User created successfully");
        // window.location.href = "http://localhost:4010/modulos";
      } else {
        console.log("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">
                  Bienvenido. Te ayudamos a gestionar tu curriculum.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <Form registro="Ingresar" />
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">O</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>
                <form>
                  <div className="flex flex-row -mx-3 mb-3">
                    <div className="basis-1/2 px-3">
                      <button className="btn px-0 text-white bg-facebook hover:bg-blue-900 w-full relative flex items-center">
                        <span className="pl-16 -ml-12">Ingresar con</span>
                        <svg
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 30 30"
                          width="30px"
                          height="30px"
                        >
                          {" "}
                          <path d="M12,27V15H8v-4h4V8.852C12,4.785,13.981,3,17.361,3c1.619,0,2.475,0.12,2.88,0.175V7h-2.305C16.501,7,16,7.757,16,9.291V11 h4.205l-0.571,4H16v12H12z" />
                        </svg>
                      </button>
                    </div>
                    <div className="basis-1/2 px-3">
                      <button className="btn px-0 text-gray-600 bg-slate-100 hover:bg-slate-200 w-full relative flex items-center">
                        <span className="pl-14 pr-2 -ml-12">Ingresar con</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 48 48"
                          width="30px"
                          height="30px"
                        >
                          <path
                            fill="#FFC107"
                            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                          <path
                            fill="#FF3D00"
                            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                          />
                          <path
                            fill="#4CAF50"
                            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                          />
                          <path
                            fill="#1976D2"
                            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="text-gray-600 text-center mt-6">
                  ¿No tienes una cuenta en TalentoGyA+?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Regístrate
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
