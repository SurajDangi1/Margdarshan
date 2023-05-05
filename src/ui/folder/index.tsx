import { Formik, Form, Field } from "formik";
import { TextField, Button, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import * as Yup from "yup";
import axios from "axios";
import Image from "next/image";

interface FormValues {
    fullName: string;
    email: string;
    password: string;
    gender: string
    pin: string,
    state: string,
    city: string,
    level_of_study: string,
    field_of_study: string,

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
    const initialValues: FormValues = { fullName: "", email: "", password: "", gender: "", pin: "", state: "", city: "", level_of_study: "", field_of_study: "" };

    const handleSubmit = async (values: FormValues) => {
        console.log(values);
        try {
            console.log("2 min me chora bdl le")
            const response = await axios.post("http://localhost:9000/auth/signup", values, { withCredentials: true });
        } catch (error) {
            console.error("Error:", Response);
        }
    };


    return (
        <div className="grid grid-cols-2 gap-2 pt-5 pl-6 bg-secondary pb-6">
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
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                id="fullName"
                                                label="Full Name"
                                                variant="outlined"
                                                error={errors.fullName && touched.fullName}
                                                helperText={
                                                    errors.fullName && touched.fullName ? errors.fullName : null
                                                }
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className="">
                                    <Field name="email">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                id="email"
                                                label="Email"
                                                type="email"
                                                variant="outlined"
                                                error={errors.email && touched.email}
                                                helperText={errors.email && touched.email ? errors.email : null}
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>


                            <div className="grid grid-cols-2 gap-2 pt-5">
                                <div className="">
                                    <Field name="password">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                id="password"
                                                label="password"
                                                type="password"
                                                variant="outlined"
                                                error={errors.password && touched.password}
                                                helperText={errors.password && touched.password ? errors.password : null}
                                            />
                                        )}
                                    </Field>
                                </div>

                                <div className="">
                                    <FormControl className="w-56"  error={Boolean(errors.gender && touched.gender)}>
                                        <InputLabel  id="gender-label">gender</InputLabel>
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
                                        {({ field }) => (
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
                                        {({ field }) => (
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
                                <div className="">
                                    <Field name="city">
                                        {({ field }) => (
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

                                <div className="">
                                    <Field name="level_of_study">
                                        {({ field }) => (
                                            <TextField
                                                {...field}
                                                id="level_of_study"
                                                label="Level of Study"
                                                variant="outlined"
                                                error={errors.level_of_study && touched.level_of_study}
                                                helperText={
                                                    errors.level_of_study && touched.level_of_study ? errors.level_of_study : null
                                                }
                                            />
                                        )}
                                    </Field>
                                </div>
                            </div>

                            <div className="pt-5">
                                <Field name="field_of_study">
                                    {({ field }) => (
                                        <TextField
                                            {...field}
                                            id="field_of_study"
                                            label="Field of Study"
                                            variant="outlined"
                                            error={errors.field_of_study && touched.field_of_study}
                                            helperText={
                                                errors.field_of_study && touched.field_of_study ? errors.field_of_study : null
                                            }
                                        />
                                    )}
                                </Field>
                            </div>

                            <div className="col-span-2 flex justify-end">
                                <Button variant="contained" type="submit">
                                    Sign Up
                                </Button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <div className="pt-5 hidden lg:block">
                <Image src='/Scholarship-dum-images/img-1.jpg' className="rounded" alt='img-1' width={1000} height={100}></Image>
            </div>
        </div>
    );
};

export default UserSignUp;
