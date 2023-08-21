import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../../doctorfy-login/styles/SignIn.module.css';
import { UserContext } from '../context/user';
import LogoResponsive from "../components/formDetailsRes/LogoResponsive";
import LogoContainer from "../components/formDetails/LogoContainer";
import ButtonsLoginPlataform from "../components/formDetailsRes/ButtonsLoginPlataform";

function LoginForm() {
  const { handleSubmit, register } = useForm();

  const [alert, setAlert] = useState(['', '']);

  const { setUser, doLogin, loggingIn, setLoggingIn } = useContext(UserContext);

  const onSubmit = async (values) => {
    setLoggingIn(true);
    const ret = await doLogin(values);

    if (ret[0] == 'alert') {
      setAlert(ret);
    } else {
      setUser(ret.message.username);
    }
    setLoggingIn(false);
  };
  return (
    <div className={styles.container}>
			<div className="grid justify-items-center  h-screen bg-slate-100 ">
        <div className="md:flex w-full md:h-5/6 md:w-5/6 md:mx-5 md:my-10 container-form bg-white ">
          <div className="h-28 bg-color-blue">
            <div className="flex justify-center items-center md:hidden z-0 pt-2">
							{/* Contenedor del header del responsive */}
              <LogoResponsive/>

            </div>
          </div>
          <div className=" grid justify-items-center md:w-2/4 md:mt-3 rounded-l-lg bg-white container-formu ">
            <div className=" grid justify-items-center md:w-3/4  md:mb-3 mt-5 w-full">
              <div className="p-10 md:p-0.5 w-full">
              <p className="title-form pb-1">
                    Iniciar sesion
                  </p>
                  <p className="text-xs text-slate-500 pb-7 subtitle-form">
                    
                  </p>
								{/* contenedor del formualario */}
                <form  onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register">Correo electronico</label>
        <input  id="email" name="email" type="email" className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register"               {...register('identifier', {
                required: true,
              })} />
        <label
          className=" block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register"

        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register "
          {...register('password', {
            required: true,
          })}
          />
                            <div className="grid grid-cols-1 place-items-end">
                    <a  href='/user/forgotpassword' className="forgotten-password-form pt-2">
                      Olvide mi contraseña
                    </a>
                  </div>
                   <div className="pt-4 grid justify-items-center ">
        
        
                   

        <button
        type="submit"
          className="w-full bt-form-login"
          disabled={loggingIn}
        >
          
       {loggingIn && 'Logueado...'}
            {!loggingIn && 'Iniciar Sesión'}
        </button>
        {alert[1]}

        </div>
      </form>
      <ButtonsLoginPlataform/>

                <div className="grid grid-cols-1 place-items-center">
                  <div className=" flex pt-4">

                    <a href='/user/register' className=" no-account p-2">¿No tienes cuenta?</a>{" "}

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" md:w-2/4 md:rounded-r-lg hidden-mobile">
            <div className=" container-information h-11-12 m-4 bg-back">
              <div className=" md:h-3/4 md:p-10">
                <div className="md:h-2/3">
									{/* contenedor de informacion */}
                  <p className="text-information-form ">
                    Tu bienestar, la clave de la felicidad
                  </p>
                  
                  <p className="text-information-form">
                    ¡Inicia Sesión ahora!
                  </p>
                </div>
              </div>
              <div className=" h-1/4 grid grid-cols-1 place-items-end p-5">
								{/* contenedor de logo */}
                <LogoContainer></LogoContainer>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}

export default LoginForm;
