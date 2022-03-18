import React from "react";

const Signup = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-tl from-tAquamarine to-tBlue py-16 px-4">
      <div className="flex flex-col items-center justify-center">
        <img
          className="object-contain w-72"
          src="http://143.198.153.102:4010/img/TALENTO.png"
          alt="logo"
        />

        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabindex="0"
            className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
          >
            Crea una cuenta con
          </p>
          <p
            tabindex="0"
            className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
          >
            Ya tienes una cuenta?{" "}
            <a
              href="/login"
              className="hover:text-gray-500 focus:text-gray-500 focus:outline-none focus:underline hover:underline text-sm font-medium leading-none  text-gray-800 cursor-pointer"
            >
              {" "}
              Inicia sesión aquí
            </a>
          </p>
          <div className="flex flex-row">
            <div className="basis-1/2">
              <button
                aria-label="Continue with google"
                role="button"
                className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 mr-2"
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg2.svg"
                  alt="google"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Google
                </p>
              </button>
            </div>
            <div className="basis-1/2">
              <button
                aria-label="Continue with github"
                role="button"
                className="focus:outline-none  focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4 ml-2"
              >
                <img className="w-6 h-auto"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAARVBMVEUAAAAYd/IYdvMYd/ITc+8Yd+8XdvMYd/IYd/IYd/IYd/IYdvMYdvIYd/MZd/EXdvEYePIYd/MXdvMYdvEYde8VdfQYd/IJb26AAAAAFnRSTlMA3z/vECDPb7+fj3+vX5CPYL+vf2AwOzKJBAAAAQlJREFUOMuNlO1uwyAMRS+Yj1CSdms3v/+jLhXRTGLi5vyKrBMu2Ajs8fnpiJnSs3qcEl7EHa7EsXZnxUjNxAPccvTufMJtH/vNp6QAIbHBZOa6FZX+pdbwLc5zIzcvuoO3YCNyg9p/5eBliNiHR7V3LXIYLLiMxArguMOwTSp152aSk0lp2AmPemzgeAQZ80jUG5qRbFHKdE0ksCkK0K0Wci+SId76aGeI3XVOmA0x9e3JhshC7UeY/Jvm/K5f/RjXMtntkWq9IhYA4YoYpVumWPAm0CfRRZmUKS4yKlN84J/JEhOEkM7FKaiLokXJFX7cSKQMRSxafLRYrbpepJdoCl+3x7Bkjx1/kzFOUX2NHDUAAAAASUVORK5CYII="
                  alt="facebook"
                />
                <p className="text-base font-medium ml-4 text-gray-700">
                  Facebook
                </p>
              </button>
            </div>
          </div>

          <div className="w-full flex items-center justify-between py-5">
            <hr className="w-full bg-gray-400" />
            <p className="text-base font-medium leading-4 px-2.5 text-gray-400">
              O
            </p>
            <hr className="w-full bg-gray-400" />
          </div>
          <div>
            <label
              id="email"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Email
            </label>
            <input
              aria-labelledby="email"
              type="email"
              className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
            />
          </div>
          <div className="mt-6  w-full">
            <label
              for="pass"
              className="text-sm font-medium leading-none text-gray-800"
            >
              Contraseña
            </label>
            <div className="relative flex items-center justify-center">
              <input
                id="pass"
                type="password"
                className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
              />
              <div className="absolute right-0 mt-2 mr-3 cursor-pointer">
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in-svg5.svg"
                  alt="viewport"
                />
              </div>
            </div>
          </div>
          <div className="mt-8">
            <button
              role="button"
              className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full"
            >
              Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
