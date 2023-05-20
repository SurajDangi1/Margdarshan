import { Formik, Form, Field } from "formik";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  gender: string;
  pin: string;
  state: string;
  city: string;
  level_of_study: string;
  field_of_study: string;
}

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  gender: Yup.string().required("gender is required"),
  pin: Yup.string().required("Pin is required"),
  state: Yup.string().required("State is required"),
  city: Yup.string().required("City is required"),
  level_of_study: Yup.string().required("Level of Study is required"),
  field_of_study: Yup.string().required("Field of Study is required"),
});

const UserSignUp = () => {
  const initialValues: FormValues = {
    fullName: "",
    email: "",
    password: "",
    gender: "",
    pin: "",
    state: "",
    city: "",
    level_of_study: "",
    field_of_study: "",
  };

  const [selectedCourse, setSelectedCourse] = useState("");

  const handleSubmit = async (values: FormValues) => {
    console.log(values);
    try {
      const response = await axios.post(
        "http://localhost:9000/auth/signup",
        values,
        { withCredentials: true }
      );
      toast.success("Sign Up successful");
    } catch (error) {
      console.error("Error:", Response);
      toast.error("Sign Up failed");
    }
  };
  return (
    <div className="pt-16">
      <div className="grid grid-cols-2 gap-2  pl-6 bg-secondary pb-8">
        <div className="">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="">
                <div className="grid grid-cols-2 gap-2 pt-5">
                  <div className="">
                    <Field name="fullName">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="fullName"
                          label="Full Name"
                          variant="outlined"
                          error={errors.fullName && touched.fullName}
                          helperText={
                            errors.fullName && touched.fullName
                              ? errors.fullName
                              : null
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div className="">
                    <Field name="email">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="email"
                          label="Email"
                          type="email"
                          variant="outlined"
                          error={errors.email && touched.email}
                          helperText={
                            errors.email && touched.email ? errors.email : null
                          }
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-5">
                  <div className="">
                    <Field name="password">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="password"
                          label="password"
                          type="password"
                          variant="outlined"
                          error={errors.password && touched.password}
                          helperText={
                            errors.password && touched.password
                              ? errors.password
                              : null
                          }
                        />
                      )}
                    </Field>
                  </div>
                  <div className="">
                    <FormControl
                      className="w-56"
                      error={Boolean(errors.gender && touched.gender)}
                    >
                      <InputLabel id="gender-label">gender</InputLabel>
                      <Field name="gender" as={Select} labelId="gender-label">
                        <MenuItem value="">Select a gender</MenuItem>
                        <MenuItem value="Male">Male</MenuItem>
                        <MenuItem value="Female">Female</MenuItem>
                        <MenuItem value="Other">Other</MenuItem>
                      </Field>
                      {errors.gender && touched.gender ? (
                        <div className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
                          {errors.gender}
                        </div>
                      ) : null}
                    </FormControl>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2  pt-5">
                  <div className="">
                    <Field name="pin">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="pin"
                          label="pin"
                          type="number"
                          variant="outlined"
                          error={errors.pin && touched.pin}
                          helperText={
                            errors.pin && touched.pin ? errors.pin : null
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div className="">
                    <Field name="state">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="state"
                          label="state"
                          variant="outlined"
                          error={errors.state && touched.state}
                          helperText={
                            errors.state && touched.state ? errors.state : null
                          }
                        />
                      )}
                    </Field>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-5">
                  {/* <div className="">
                                        <FormControl className="w-56" error={Boolean(errors.field_of_study && touched.field_of_study)}>
                                            <InputLabel id="field_of_study">Education</InputLabel>
                                            <Field name="field_of_study" as={Select} labelId="field_of_study" onChange={(e: any) => setSelectedCourse(e.target.value)}>
                                                <MenuItem value="">Select an option</MenuItem>
                                                <MenuItem value="Male">10th</MenuItem>
                                                <MenuItem value="Female">12th</MenuItem>
                                                <MenuItem value="Other">Post Graduate</MenuItem>
                                                <MenuItem value="Other">Under Graduate</MenuItem>

                                            </Field>
                                            {errors.field_of_study && touched.field_of_study ? (
                                                <div className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
                                                    {errors.field_of_study}
                                                </div>
                                            ) : null}
                                        </FormControl>
                                    </div> */}

                  <div className="">
                    <Field name="field_of_study">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="field_of_study"
                          label="Feild of Study"
                          variant="outlined"
                          error={
                            errors.field_of_study && touched.field_of_study
                          }
                          helperText={
                            errors.field_of_study && touched.field_of_study
                              ? errors.field_of_study
                              : null
                          }
                        />
                      )}
                    </Field>
                  </div>

                  <div className="">
                    <Field name="level_of_study">
                      {({ field }: { field: any }) => (
                        <TextField
                          {...field}
                          id="level_of_study"
                          label="Level of Study"
                          variant="outlined"
                          error={
                            errors.level_of_study && touched.level_of_study
                          }
                          helperText={
                            errors.level_of_study && touched.level_of_study
                              ? errors.level_of_study
                              : null
                          }
                        />
                      )}
                    </Field>
                  </div>

                  {/* {selectedCourse === "12th" && (
                                        <div>
                                            <FormControl className="w-56" error={Boolean(errors.level_of_study && touched.level_of_study)}>
                                                <InputLabel id="level_of_study">Level of Study</InputLabel>
                                                <Field name="level_of_study" as={Select} labelId="field_of_study" onChange={(e: any) => setSelectedCourse(e.target.value)}>
                                                    <MenuItem value="">Select an option</MenuItem>
                                                    <MenuItem value="10th">10th</MenuItem>
                                                    <MenuItem value="12th">12th</MenuItem>
                                                    <MenuItem value="Post Graduate">Post Graduate</MenuItem>
                                                    <MenuItem value="Under Graduate"></MenuItem>

                                                </Field>
                                                {errors.field_of_study && touched.field_of_study ? (
                                                    <div className="MuiFormHelperText-root MuiFormHelperText-contained Mui-error">
                                                        {errors.field_of_study}
                                                    </div>
                                                ) : null}
                                            </FormControl>
                                        </div>
                                    )} */}
                </div>

                <div className="pt-5">
                  <Field name="city">
                    {({ field }: { field: any }) => (
                      <TextField
                        {...field}
                        id="city"
                        label="city"
                        variant="outlined"
                        error={errors.city && touched.city}
                        helperText={
                          errors.city && touched.city ? errors.city : null
                        }
                      />
                    )}
                  </Field>
                </div>

                <div className="col-span-2 flex justify-end pt-4 mb-2">
                  <button
                    type="submit"
                    className="w-full text-black bg-cherry-300 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-sm font-light text-grey-900">
                  Already have an account ?{" "}
                  <Link
                    href="/login"
                    className="font-medium text-cherry-300 hover:underline dark:text-primary-500"
                  >
                    Log in
                  </Link>
                </p>
              </Form>
            )}
          </Formik>
        </div>
        <div className="pt-5 hidden lg:block">
          <Image
            src="/Scholarship-dum-images/img-1.jpg"
            className="rounded"
            alt="img-1"
            width={1000}
            height={100}
          ></Image>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UserSignUp;
