import { useState } from "react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  pin: string;
  city: string;
  state: string;
  gender: string;
  level_of_study: string;
  field_of_study: string;
  dateOfBirth: string;
  country: string;
}

const initialValues: FormValues = {
  fullName: "",
  email: "",
  password: "",
  pin: "",
  city: "",
  state: "",
  gender: "",
  level_of_study: "",
  field_of_study: "",
  country: "",
  dateOfBirth: "",
};

const validationSchema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long"),
  pin: yup.string().required("Postal code is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  gender: yup.string().required("Gender is required"),
  level_of_study: yup.string().required("Education is required"),
  field_of_study: yup.string().required("Education is required"),
  country: yup.string().required("country is required"),
  dateOfBirth: yup.string().required("Date of birth is required"),
});

export default function SignUp() {
  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const response = await axios.post(
        `https://margdarshan.up.railway.app/auth/signup`,
        values,
        { withCredentials: true }
      );
      sessionStorage.setItem("token", response.data.access_token);
      window.location.href = "/";
      toast.success("Sign Up successful");
    } catch (error) {
      console.error("Error:", Response);
      toast.error("Sign Up failed");
    }
  };

  const [selectedValue, setSelectedValue] = useState("");
  const handleDropdownChange = (event: any) => {
    setSelectedValue(event.target.value);
  };
  return (
    <div className="grid  sm:grid-cols-1 lg:grid-cols-2">
      <div className="pt-24 mb-20 pl-10 pr-10 ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, isSubmitting }) => (
            <Form>
              <div className="border-grey-900 pl-2 pr-2 rounded-medium pb-12 border">
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 mb-5">
                  <div className="">
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Full name
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="fullName"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Email
                    </label>
                    <div className="mt-2">
                      <Field
                        type="email"
                        name="email"
                        id="email"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Password
                    </label>
                    <div className="mt-2">
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="password"
                        className="text-red-600"
                        component="div"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="gender"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Gender
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        id="gender"
                        name="gender"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      >
                        <option value="">Select an option</option>
                        <option value="Male"> Male</option>
                        <option value="option2">Female</option>
                        <option value="Other">Other</option>
                      </Field>
                    </div>
                    <ErrorMessage
                      name="gender"
                      component="div"
                      className="text-red-500 text-xs mt-1"
                    />
                  </div>

                  <div className="">
                    <label
                      htmlFor="pin"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      ZIP / Postal code
                    </label>
                    <div className="mt-2">
                      <Field
                        type="number"
                        name="pin"
                        id="pin"
                        autoComplete="postal-code"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="pin"
                        className="text-red-600"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="region"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      State / Province
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="state"
                        id="state"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="state"
                        className="text-red-600"
                        component="div"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="city"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      City
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="city"
                        id="city"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      {errors.city && touched.city ? (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.city}
                        </div>
                      ) : null}
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="level_of_study"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Education (currently pursuing)
                    </label>
                    <div className="mt-2">
                      <Field
                        as="select"
                        name="level_of_study"
                        id="level_of_study"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      >
                        {" "}
                        <option value="">Please select</option>
                        <option value="10th">10th</option>
                        <option value="12th">12th</option>
                        <option value="Under Graduate">Under Graduate</option>
                        <option value="Post Graduate">Post Graduate</option>
                      </Field>
                      <ErrorMessage
                        name="level_of_study"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="field_of_study"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Course
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="field_of_study"
                        id="field_of_study"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="field_of_study"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="dateOfBirth"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Date of birth
                    </label>
                    <div className="mt-2">
                      <Field
                        type="date"
                        name="dateOfBirth"
                        id="dateOfBirth"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="dateOfBirth"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  <div className="">
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium leading-6 text-grey-900"
                    >
                      Country
                    </label>
                    <div className="mt-2">
                      <Field
                        type="text"
                        name="country"
                        id="country"
                        className="bg-grey-50 border text-grey-900 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      />
                      <ErrorMessage
                        name="country"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-black bg-cherry-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-medium text-sm px-5 py-1.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign Up
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <div className="pt-36 bg-grey-50 hidden pl-20 lg:block">
        <div className="border-4 rounded-medium border-gray-300">
          <Image
            src="/Scholarship-dum-images/img-1.jpg"
            className="rounded"
            alt="img-1"
            width={900}
            height={100}
          ></Image>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
