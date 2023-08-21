import React, { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../context/user';
import LogoResponsive from "../components/formDetailsRes/LogoResponsive";
import LogoContainer from "../components/formDetails/LogoContainer";
import ButtonsLoginPlataform from "../components/formDetailsRes/ButtonsLoginPlataform";
import styles from '../styles/SignIn.module.css';

function RegisterForm() {
    const { doRegister } = useContext(UserContext);

    const {
        register,
        handleSubmit,
        watch,
        reset,
        formState: { errors },
    } = useForm();

    const password = {};
    password.current = watch('password', '');

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [alert, setAlert] = useState(['', '']);

    const onSubmit = async (values) => {
        setIsSubmitting(true);
        const ret = await doRegister(values);

        if (ret[0] === 'alert') {
            setAlert(ret);
        } else {
            setAlert(ret);
            reset();
        }
        setIsSubmitting(false);
    };

    return (
        <div className={styles.container}>
            <div className="grid justify-items-center h-screen bg-slate-100 ">
                <div className="md:flex w-full md:h-5/6 md:w-5/6 md:mx-5 md:my-10 container-form bg-white ">
                    <div className="h-28 bg-color-blue">
                        <div className="flex justify-center items-center md:hidden z-0 pt-2">
                            <LogoResponsive />
                        </div>
                    </div>

                    <div className="grid justify-items-center md:w-2/4 md:mt-3 rounded-l-lg bg-white container-formu  container-form-scroll ">
                        <div className="grid justify-items-center md:w-3/4 md:mb-3 mt-5 w-full">
                            <div className="p-10 md:p-0.5 w-full">
                            <p className="title-form pb-1">
                    Registrarme
                  </p>
                  <p className="text-xs text-slate-500 pb-7 subtitle-form">
                    Registro completamente gratuito
                  </p>
                            <form onSubmit={handleSubmit(onSubmit)} className={ styles.form }>
        <div className="p-10 md:p-0.5 w-full ">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register">
            Username
            <input
              type="text"
              className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register" 
              {...register('username', {
                required: 'Please choose a username',
              })}
            />
            {errors.username && <p>{errors.username.message}</p>}
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register">
            Email address
            <input
              type="email"
              className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register" 
              {...register('email', {
                required: 'Email is required',
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
              placeholder="you@email.com"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register">
            Password
            <input
              type="password"
              {...register('password', {
                required: 'You must specify a password',
                minLength: { value: 8, message: 'At least 8 character' },
              })}
              className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register" 
            />
            {errors.password && <p>{errors.password.message}</p>}
          </label>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-dark label-form-register">
            Password confirmation
            <input
              type="password"
              {...register('repeatpassword', {
                validate: (value) =>
                  value === password.current || 'The passwords do not match',
              })}
              className="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-text-form-register" 

            />
            {errors.repeatpassword && <p>{errors.repeatpassword.message}</p>}
          </label>

          <div className="flex items-start mb-6">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        type="checkbox"
                        value=""
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      htmlFor="terms"
                      className="pl-2  text-accept"
                    >
                      Acepto los {" "}
                      <a
                        href="#"
                        className="text-term-cond"
                      >
                        Terminos y Condiciones {" "}
                      </a>
											asi como también las {" "}
											<a
                        href="#"
                        className="text-term-cond"
                      >
                        Politicas de Privacidad.
                      </a>
                    </label>
                  </div>
          
          <button
            type="submit"
            className="w-full bt-form-login"

            disabled={isSubmitting}
          >
            {isSubmitting && 'Registrarme...'}
            {!isSubmitting && 'Registrarme'}
          </button>
        </div>
        {alert[1]}
      </form>
                                <ButtonsLoginPlataform />
                                <div className="grid grid-cols-1 place-items-center">
                                    <div className="flex pt-2">
                                        <p className="ml-1 mr-3 mt-1 no-account">¿Ya tienes cuenta?</p>
                                        <a className="text-register" href="/user/login">Iniciar Sesión</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-2/4 md:rounded-r-lg hidden-mobile">
                        <div className="container-information h-11-12 m-4 bg-back">
                            <div className="md:h-3/4 md:p-10">
                                <div className="md:h-2/3">
                                    <p className="text-information-form">
                                        Tu bienestar, la clave de la felicidad
                                    </p>
                                    <p className="text-information-form">
                                        ¡Registrate ahora!
                                    </p>
                                </div>
                            </div>
                            <div className="h-1/4 grid grid-cols-1 place-items-end p-5">
                                <LogoContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
