import React, { ChangeEvent, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import BrandBlackLogo from "public/assets/logo/margdarshan-logo-black.svg";
import Modal from '@mui/material/Modal';
import InputField from '../input';
import Dropdown from '../dropdown';
import axios from 'axios';
import InputsFields from '../input-form';
import toast, { Toaster } from "react-hot-toast";
import Image from 'next/image';
import { Button } from '../button';
import { useRouter } from 'next/router';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

interface FormData {
  fullName: string;
  twelve_percentage?: number;
  father_yearly_income?: number;
  category?: string;
  state: string;
  level_of_study: string;
  field_of_study: string;
}

const validationSchema = yup.object({
  fullName: yup.string().required('Full Name is required'),
  state: yup.string().required('State is required'),
  father_yearly_income: yup.number().required('Family Income is required'),
  category: yup.string().required('Category is required'),
  level_of_study: yup.string().required('Education is required'),
  twelve_percentage: yup.number().required('12th Percentage is required'),
});

interface DropdownOption {
  value: string;
  label: string;
}

interface OnboardModalProps {
  userData: FormData;
}

export const OnboardModal: React.FC<OnboardModalProps> = ({ userData }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    twelve_percentage: 50,
    father_yearly_income: 5,
    category: '',
    state: '',
    level_of_study: '',
    field_of_study: '',
  });

  const [updateStatus, setUpdateStatus] = useState<string>('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const accessToken = sessionStorage.getItem('token');
      const response = await axios.post('http://localhost:9000/on-board', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      toast.success("Update successful");
    } catch (error) {
      console.error(error);
      toast.error("Update failed");
      setUpdateStatus('An error occurred during the update.');
    }
  };


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const parsedValue = parseFloat(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue,
    }));
  };


  const handleInputOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const categoryOptions = ['St/Sc', 'Obc', 'General'];
  const Study = ['10th', '12th', 'UnderGraduate', 'PostGraduate'];
  const stateOptions = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const router = useRouter();

  const handleClick = () => {
    router.push('/profile');
    window.location.reload();
  };


  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <div className='flex justify-between mb-5  '>
              <div>

              </div>
              <div>
                <button onClick={handleClose} >
                  <Image src={'/assets/logo/close.png'} height={20} width={20} alt={''} />
                </button>
              </div>
            </div>
            <h1 className='text-center text-title-4 text-secondary'>Hello and welcome to the OnBoard Form</h1>
            <div className='flex justify-center'>
              <Image
                alt="Margdarshan Logo"
                src='/Scholarship-dum-images/ilus.png'
                width={100}
                height={110}
                className="w-60 h-48 pt-2"
              />
            </div>
            <h1 className='text-title-6 text-center mb-2'>Completes your profile in order to receive profile-matched Scholarships</h1>
          </>
        );
      case 2:
        return (
          <div>
            <Formik
              initialValues={formData as React.FormEvent<HTMLFormElement> & FormData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, touched, isSubmitting }) => (
                <Form>
                  <div className='flex justify-between mb-5'>
                    <div></div>
                    <div>
                      <button onClick={handleClose}>
                        <Image src={'/assets/logo/close.png'} height={20} width={20} alt={''} />
                      </button>
                    </div>
                  </div>
                  <div className='mb-2'>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      Full Name(as per Aadhar)
                    </label>
                    <Field
                      name='fullName'
                      id='fullName'
                      label='Full Name(as per Aadhar)'
                      type='text'
                      value={formData.fullName || userData.fullName || ''}
                      className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-3"
                      onChange={handleInputChange}
                    />
                    <ErrorMessage name="fullName" component="div" className="text-red-500" />
                  </div>
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                      State
                    </label>
                    <div className='mt-1'>
                      <Field
                        as='select'
                        name="state"
                        id="state"
                        className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-3"
                        value={formData.state || userData.state || ''}
                        onChange={handleInputOnChange}
                      >
                        {stateOptions.map((option) => (
                          <option key={option} value={option}>
                            {option}
                          </option>
                        ))}
                      </Field>
                    </div>
                  </div>

                </Form>
              )}
            </Formik>

          </div>
        );
      case 3:
        return (
          <div>
            <Formik
              initialValues={formData as React.FormEvent<HTMLFormElement> & FormData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form >
                <div className='flex justify-between mb-5  '>
                  <div>

                  </div>
                  <div>
                    <button onClick={handleClose}>
                      <Image src={'/assets/logo/close.png'} height={20} width={20} alt={''} />
                    </button>
                  </div>
                </div>
                <div className='mb-2'>
                  <label htmlFor="father_yearly_income" className="block  text-sm font-medium text-gray-700">
                    Family Income (In Lpa)
                  </label>
                  <div className='mt-1'>
                    <input
                      type='number'
                      name="father_yearly_income"
                      id="father_yearly_income"
                      className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-2.5"
                      value={formData.father_yearly_income || userData.father_yearly_income || ' '}
                      onChange={handleNumberChange}
                    />   </div>
                </div>
                <div>
                  <label htmlFor="category" className="block  text-sm font-medium text-gray-700">
                    Category
                  </label>
                  <div className='mt-1'>
                    <select
                      name="category"
                      id="category"
                      className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-3"
                      value={formData.category || userData.category || ''}
                      onChange={handleInputOnChange}
                    >
                      {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}

                    </select>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        );
      case 4:
        return (
          <div>
            <Formik
              initialValues={formData as React.FormEvent<HTMLFormElement> & FormData}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form >
                <div className='flex justify-between mb-5  '>
                  <div>
                  </div>
                  <div>
                    <button onClick={handleClose}>
                      <Image src={'/assets/logo/close.png'} height={20} width={20} alt={''} />
                    </button>
                  </div>
                </div>
                <div className='mb-2'>

                  <label htmlFor="level_of_study" className="block  text-sm font-medium text-gray-700">
                    Education (currently pursuing)
                  </label>
                  <div className='mt-1'>
                    <select
                      name="level_of_study"
                      id="level_of_study"
                      className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-3"
                      value={formData.level_of_study || userData.level_of_study || ''}
                      onChange={handleInputOnChange}
                    >
                      {Study.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}

                    </select>

                  </div>
                </div>
                <div className='mb-2'>
                  <InputField
                    name='level_of_study'
                    id='level_of_study'
                    label='Course'
                    type='Course'
                    value={formData.level_of_study || userData.field_of_study || ' '}
                    onChange={handleInputChange}
                  />
                  <div>
                    <div>
                      <label htmlFor="twelve_percentage" className="block  text-sm font-medium text-gray-700">
                        12th percentage
                      </label>
                      <div className='mt-1'>
                        <input
                          type='number'
                          name="twelve_percentage"
                          id="twelve_percentage"
                          className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium  block w-full p-2.5"
                          value={formData.twelve_percentage || userData.twelve_percentage || ' '}
                          onChange={handleNumberChange}
                        />   </div></div>
                  </div>
                </div>
              </Form>
            </Formik>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className=''>
      <div>
        <Button onClick={handleOpen} theme='secondary' text='Open modal'></Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div className='fixed z-10 inset-0 overflow-y-auto' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
          <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
            <div className='font-serif font-semibold relative inline-block align-bottom bg-white rounded-large px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[512px] sm:p-6'>
              {renderFormStep()}
              <div className='mt-5 sm:mt-4 sm:flex justify-between mb-5'>
                {step > 1 && (
                  <button
                    type='button'
                    className='mt-3 w-full inline-flex justify-center rounded-medium border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm sm:mt-0 sm:w-auto sm:text-sm'
                    onClick={handleBack}
                  >
                    Back
                  </button>
                )}
                {step < 4 ? (
                  <div>
                    {step == 1 ? <div className='pl-48'><button
                      type='button'
                      className=' w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black sm:w-auto sm:text-sm'
                      onClick={handleNext}
                    >
                      Continue
                    </button> </div> :
                      <button
                        type='button'
                        className='inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black sm:w-auto sm:text-sm'
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    }
                  </div>
                ) : (
                  <div>
                    <Formik initialValues={formData as React.FormEvent<HTMLFormElement> & FormData}
                      validationSchema={validationSchema}
                      onSubmit={handleSubmit}  >
                      <button
                        type='submit'
                        onClick={handleClick}
                        className='inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black sm:w-auto sm:text-sm'
                      >
                        Submit
                      </button>
                    </Formik>
                  </div>
                )}
                <Toaster />
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
