import React, {useState, useEffect } from "react";
import axios from "axios";
import { useForm} from "react-hook-form";



export default function App({ registro }) {
  const [data, setData] = useState(null)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (formData) => {
    setData(formData);
  }

  console.log('sadsad')

  const url = 'http://localhost:4000/api/v1/users';
  const urlRedirect = 'http://localhost:3001/register';
  
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(
          url,
          data
        );
        console.log(response);
        window.location.replace(urlRedirect + '/' + response.data.token);
      } catch (error) {
        console.log(error.message);
      } finally {
        console.log(true);
      }
    })();
  }, [data]);

  const politicas = () => {
    if (registro === 'Registrarme'){
      return (
        <div className="text-sm text-gray-500 text-center mt-3">
          Al crear una cuenta, acepta nuestra{" "}
          <a className="underline" href="/politicas-de-privacidad">
            política de privacidad
          </a>
          .
        </div>
      );
    }
    return
  };

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <>
      <div className="max-w-sm mx-auto">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Correo <span className="text-red-600">*</span>
              </label>
              <input
                className="form-input w-full text-gray-800"
                placeholder="Ingresa tu correo electrónico"
                type="email"
                {...register("email", { required: true })}
                required
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-4">
            <div className="w-full px-3">
              <label
                className="block text-gray-800 text-sm font-medium mb-1"
                htmlFor="password"
              >
                Contraseña <span className="text-red-600">*</span>
              </label>
              <input
                className="form-input w-full text-gray-800"
                placeholder="Ingresa tu contraseña"
                type="password"
                {...register("password", { required: true })}
                required
              />
            </div>
          </div>
          {errors.exampleRequired && <span>Este campo es obligatorio</span>}
          <div className="flex flex-wrap -mx-3 mt-6">
            <div className="w-full px-3">
              <button
                type="submit"
                className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
              >
                {registro}
              </button>
            </div>
          </div>
          {politicas()}
        </form>
      </div>
    </>

    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
  );
}
