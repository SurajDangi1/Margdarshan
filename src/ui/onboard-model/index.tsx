import React, { useEffect, useState } from 'react';
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

interface FormData {
  fullName: string;
  twelve_percentage: number;
  father_yearly_income: number;
  category: string;
  state: string;
  level_of_study: string;
  field_of_study: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

export default function OnboardModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 30); // 300 seconds = 300,000 milliseconds

    return () => {
      clearTimeout(timer); // Clear the timer if the component unmounts before it expires
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
      // if (response.status === 200) {
      //   setUpdateStatus('Update successful!');
      // } else {
      //   setUpdateStatus('Update failed.');
      //}
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

    // Parse the input value as a number
    const parsedValue = parseFloat(value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: parsedValue,
    }));
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };


  const categoryOptions = ['St/Sc', 'Obc', 'General'];
  const incomeOptions = ['50k - 1Lpa', '1Lpa - 2Lpa', '2Lpa - 3Lpa', '3Lpa - 4Lpa', '4Lpa - 5Lpa', 'above 5 Lpa'];
  const studyOptions = ['10th', '12th', 'UnderGraduate', 'PostGraduate'];
  const marksOptions = ['50%-60%', '60%-70%', '70%-80%', '80%-90%', '90%-100%'];
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
  const handleOptionSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  const [step, setStep] = useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const router = useRouter();

  const handleClick = () => {
    // Navigate to the desired page
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
            <form onSubmit={handleSubmit}>
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
                <InputField
                  name='fullName'
                  id='fullName'
                  label='Full Name(as per Aadhar)'
                  type='text'
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <Dropdown
                  id='state'
                  name='state'
                  label='State'
                  options={stateOptions}
                  onSelect={(value) => handleDropdownChange('state', value)}
                />
              </div>
            </form>
          </div>
        );
      case 3:
        return (
          <div>
            <form onSubmit={handleSubmit}>
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
                <InputsFields
                  label='Father yearly income(in Lpa)'
                  id='father_yearly_income'
                  name='father_yearly_income'
                  type='number'
                  value={formData.father_yearly_income}
                  onChange={handleNumberChange}
                />
              </div>
              <div>
                <Dropdown
                  label='Category'
                  id='category'
                  name='category'
                  options={categoryOptions}
                  onSelect={(value) => handleDropdownChange('category', value)}
                />
              </div>
            </form>
          </div>
        );
      case 4:
        return (
          <div>
            <form onSubmit={handleSubmit}>
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
                <Dropdown
                  label='Education (currently pursuing course)'
                  id='field_of_study'
                  name='field_of_study'
                  options={studyOptions}
                  onSelect={(value) => handleDropdownChange('field_of_study', value)}
                />
              </div>
              <div className='mb-2'>
                <InputField
                  name='level_of_study'
                  id='level_of_study'
                  label='Course'
                  type='Course'
                  value={formData.level_of_study}
                  onChange={handleInputChange}
                />
                <div>
                  <InputsFields
                    id='twelve_percentage'
                    name='twelve_percentage'
                    label='12th Percent'
                    type='number'
                    value={formData.twelve_percentage}
                    onChange={handleNumberChange}
                  />
                </div>
              </div>
            </form>
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
                    <form onSubmit={handleSubmit}>
                      <button
                        type='submit'
                        onClick={handleClick}
                        className='inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black sm:w-auto sm:text-sm'
                      >
                        Submit
                      </button>
                    </form>
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
