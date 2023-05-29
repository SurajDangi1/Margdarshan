import InputField from '../input';
import { Button } from '@/ui';
import React, { ChangeEvent, useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import Dropdown from '../dropdown';

interface FormData {
  fullName?: string;
  email?: string;
  gender?: string;
  dateOfBirth?: string;
  country?: string;
  state?: string;
  level_of_study?: string;
  field_of_study?: string;
  twelve_percentage?: number;
  father_yearly_income?: number;
  category?: string;
  pin?: number;
}

interface UserSignupEditProps {
  userData: FormData;
}

const UserSignupEdit: React.FC<UserSignupEditProps> = ({ userData }) => {
  const [formData, setFormData] = useState<FormData>({});
  const [updateStatus, setUpdateStatus] = useState<string>('');
  const category = ['St/Sc', 'Obc', 'General']
  const gender = ['Male', 'Female', 'Other']
  const Study = ['10th', '12th', 'UnderGraduate', 'PostGraduate']
  const incomeOptions = ['50k - 1Lpa', '1Lpa - 2Lpa', '2Lpa - 3Lpa', '3Lpa - 4Lpa', '4Lpa - 5Lpa', 'above 5 Lpa'];
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
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const accessToken = sessionStorage.getItem('token');
      const response = await axios.post('https://margdarshan.up.railway.app/on-board', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      toast.success('Update successful');
      if (response.status === 200) {
        setUpdateStatus('Update successful!');
      } else {
        setUpdateStatus('Update failed.');
      }
    } catch (error) {
      toast.error('Update failed');
      console.error(error);
      setUpdateStatus('An error occurred during the update.');
    }
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleDropdownChange = (name: string, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleInputOnChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 mb-10">
          {userData.fullName ?
            <InputField
              name="fullName"
              id="fullName"
              label="Full Name"
              type="text"
              value={formData.fullName || userData.fullName || ''}
              onChange={handleInputChange}
            /> : <></>}
          {userData.email ?
            <InputField
              name="email"
              id="email"
              label="Email"
              type="email"
              value={formData.email || userData.email || ''}
              onChange={handleInputChange}
            /> : <></>}
          {userData.gender ?
            <div>
              <label htmlFor="category" className="block  text-sm font-medium text-gray-700">
                Gender
              </label>
              <div className='mt-1'>
                <select
                  name="gender"
                  id="gender"
                  className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  value={formData.gender || userData.gender || ''}
                  onChange={handleInputOnChange}
                >
                  {gender.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>
            </div> : <></>
          }
          {userData.dateOfBirth ?
            <InputField
              name="dateOfBirth"
              id="dateOfBirth"
              label="Date Of Birth"
              type="date"
              value={formData.dateOfBirth || userData.dateOfBirth || ''}
              onChange={handleInputChange}
            /> : <></>
          }
          {/* <InputField
            name="state"
            id="state"
            label="State"
            type="text"
            value={formData.state || userData.state || ''}
            onChange={handleInputChange}
          /> */}
          {userData.state ?
            <div>
              <label htmlFor="category" className="block  text-sm font-medium text-gray-700">
                State
              </label>
              <div className='mt-1'>
                <select
                  name="state"
                  id="state"
                  className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                  value={formData.state || userData.state || ''}
                  onChange={handleInputOnChange}

                >
                  {stateOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}

                </select>
              </div>
            </div> : <></>}
          <div>
            <label htmlFor="level_of_study" className="block  text-sm font-medium text-gray-700">
              Education (currently pursuing)
            </label>
            <div className='mt-1'>

              <select
                name="level_of_study"
                id="level_of_study"
                className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
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
          {userData.field_of_study ? <div>  <InputField
            name="field_of_study"
            id="field_of_study"
            label="Course"
            type="text"
            value={formData.field_of_study || userData.field_of_study || ' '}
            onChange={handleInputChange}
          /></div> : <> </>

          }
          {userData.father_yearly_income ? <div>
            <label htmlFor="father_yearly_income" className="block  text-sm font-medium text-gray-700">
              Family Income(In Lpa)
            </label>
            <div className='mt-1'>
              <input
                type='number'
                name="father_yearly_income"
                id="father_yearly_income"
                className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formData.father_yearly_income || userData.father_yearly_income || ' '}
                onChange={handleInputChange}
              />   </div></div> : <></>
          }
          {/* {userData.twelve_percentage ? <div>
            <label htmlFor="twelve_percentage" className="block  text-sm font-medium text-gray-700">
             12th percentage
            </label>
            <div className='mt-1'>
              <input
                type='number'
                name="twelve_percentage"
                id="twelve_percentage"
                className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                value={formData.twelve_percentage || userData.twelve_percentage || ' '}
                onChange={handleInputChange}
              />   </div></div> : <></>
          } */}
          <div>
            <label htmlFor="category" className="block  text-sm font-medium text-gray-700">
              Category
            </label>
            <div className='mt-1'>

              <select
                name="category"
                id="category"
                className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-3"
                value={formData.category || userData.category || ''}
                onChange={handleInputOnChange}

              >
                {category.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}

              </select>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end pb-5">
          <Button text="Submit" type="submit" theme="primary" />
        </div>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default UserSignupEdit;
