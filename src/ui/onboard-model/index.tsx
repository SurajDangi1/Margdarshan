import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import InputField from '../input';
import Dropdown from '../dropdown';
import { useState } from 'react';
import axios from 'axios';
import InputsFields from '../input-form';


interface FormData {
  fullName?: string;
  twelve_percentage?: number;
  father_yearly_income?: number
  category?: string
  state?: string;
  level_of_study?: string;
  field_of_study?: string;
}

interface DropdownOption {
  value: string;
  label: string;
}

export default function OnboardModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    twelve_percentage: 79,
    father_yearly_income: 777,
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

      if (response.status === 200) {
        setUpdateStatus('Update successful!');
      } else {
        setUpdateStatus('Update failed.');
      }
    } catch (error) {
      console.error(error);
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

  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const state = ["Andhra Pradesh",
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
    "Puducherry"];
  const category = ['St/Sc', 'Obc', 'General']
  const Income = ['50k - 1Lpa', '1Lpa - 2Lpa', '2Lpa - 3Lpa', '3Lpa - 4Lpa', '4Lpa - 5Lpa']
  const Study = ['10th', '12th', 'UnderGraduate', 'PostGraduate']
  const Marks = ['50%-60%', '60%-70%', '70%-80%', '80%-90%', '90%-100%',]
  const handleOptionSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };

  const [step, setStep] = React.useState(1);
  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleRefreshClick = () => {
    window.location.href = "/profile";
  };

  const renderFormStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <div className='mb-2'>
              <InputField
                name='fullName'
                id='fullName'
                label='full Name(as per Aadhar)'
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
                options={state}
                onSelect={(value) => handleDropdownChange('state', value)}
              />
            </div>
          </div>


        );
      case 2:
        return (
          <div>
            <div className='mb-2'>
              <InputsFields
                label='Father yearly income'
                id='father_yearly_income'
                name='father_yearly_income'
                type='number'
                value={formData.father_yearly_income}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <Dropdown
                label='category'
                id='category'
                name='category'
                options={category}
                onSelect={(value) => handleDropdownChange('category', value)}

              />
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <div className='mb-2'>
              <Dropdown
                label='Education (currently pursuing course)'

                id='field_of_study'
                name='field_of_study'
                options={Study}
                onSelect={(value) => handleDropdownChange('level_of_study', value)}

              />
            </div>
            <div className='mb-2'>
              <Dropdown
                id='level_of_study'
                name='level_of_study'
                label='Course'
                options={Study}
                onSelect={(value) => handleDropdownChange('field_of_study', value)}

              />
              <div>
                <InputsFields
                  id='twelve_percentage'
                  name='twelve_percentage'
                  label='12th Percent'
                  type='number'
                  value={formData.twelve_percentage}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };


  return (
    <div className=' '>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <form onSubmit={handleSubmit}>
              <div className="font-serif font-semibold relative inline-block align-bottom bg-white rounded-large px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-[512px] sm:p-6">
                {renderFormStep()}
                <div className="mt-5 sm:mt-4   sm:flex justify-between">
                  {step > 1 && (
                    <button
                      type="button"
                      className="mt-3 w-full inline-flex justify-center rounded-medium border border-gray-300 px-4 py-2 bg-white text-base font-medium text-gray-700 shadow-sm  sm:mt-0  sm:w-auto sm:text-sm"
                      onClick={handleBack}
                    >
                      Back
                    </button>
                  )}
                  {step < 3
                    ? (
                      <button
                        type="button"
                        className="inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black  sm:w-auto sm:text-sm"
                        onClick={handleNext}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="submit"
                        onClick={handleRefreshClick}
                        className="inline-flex justify-center w-full rounded-medium border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-black  sm:w-auto sm:text-sm"
                      >
                        Submit
                      </button>
                    )}
                </div>

              </div>
            </form>
          </div>
        </div>


      </Modal>
    </div>
  );
}