import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Image from "next/image";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: '',
  password: '',
};

const Login = () => {

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters')
  });

  const url = "https://localhost:9000/auth/login";

  const handleSubmit = async (values: FormValues) => {
    try {
      const response = await axios.post(url, values, {

      });
      console.log('Login successful!', response.data);
    } catch (error) {
      console.error('Login failed!', error);
    }
  };

  return (
    <div className="grid grid-cols-2">
      <div>
        <section className=" ">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

            <div className="w-full  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                  {({ errors, touched, isSubmitting }) => (
                    <Form className="space-y-4 md:space-y-6" action="#">
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-grey-900">
                          Your email
                        </label>
                        <Field
                          type="email"
                          name="email"
                          id="email"
                          placeholder="name@company.com"
                          className={`bg-grey-50 border ${errors.email && touched.email ? 'border-red-600' : 'border-grey-300'
                            } text-grey-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                        />
                        <ErrorMessage name="email" className="text-red-600" component="div" />
                      </div>
                      <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-grey-900">
                          Password
                        </label>
                        <Field
                          type="password"
                          name="password"
                          id="password"
                          placeholder="••••••••"
                          className={`bg-grey-50 border ${errors.password && touched.password ? 'border-red-600' : 'border-grey-300'
                            } text-grey-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5`}
                        />
                        <ErrorMessage name="password" className="text-red-600" component="div" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <Field
                              type="checkbox"
                              id="remember"
                              name="remember"
                              className="w-4 h-4 border border-grey-300 rounded bg-grey-50 focus:ring-3 focus:ring-primary-300 dark:bg-grey-700 dark:border-grey-600 dark:focus:ring-primary-600 dark:ring-offset-grey-800"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label htmlFor="remember" className="text-grey-900">
                              Remember me
                            </label>
                          </div>
                        </div>
                        <a href="#" className="text-sm font-medium text-cherry-300 hover:underline dark:text-primary-500">
                          Forgot password?
                        </a>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="w-full text-black bg-cherry-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Log in</button>
                      <p className="text-sm font-light text-grey-900">
                        Don’t have an account yet? <a href="#" className="font-medium text-cherry-300 hover:underline dark:text-primary-500">Sign up</a>
                      </p>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="pt-24">
        <Image src='/Scholarship-dum-images/log-in.jpg' className="rounded-sm" alt='img' height={90} width={1000}></Image>
      </div>
    </div>
  )
};

export default Login;
