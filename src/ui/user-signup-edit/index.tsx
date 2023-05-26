
import InputField from '../input'
import { Button } from '@/ui'
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';
import InputsFields from '../input-form';

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
  father_yearly_income?: number
  category?: string;
  pin?: string;
}




const UserSignupEdit = () => {
  const [formData, setFormData] = useState<FormData>({});
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
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleRefreshClick = () => {
    window.location.href = "/profile";
  };

  return (
    <div><form onSubmit={handleSubmit}>
      <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2  gap-5 mb-10'>
        <InputField name={'fullName'} id={'fullName'} label={'Full Name'} type={'text'} value={formData.fullName || ''}
          onChange={handleInputChange} />
        <InputField name={'email'} id={'email'} label={'Email'} type={'email'} value={formData.email || ''}
          onChange={handleInputChange} />
        <InputField name={'gender'} id={'gender'} label={'Gender'} type={'text'} value={formData.gender || ''}
          onChange={handleInputChange} />
        <InputField name={'dateOfBirth'} id={'dateOfBirth'} label={'Date Of Birth'} type={'date'} value={formData.dateOfBirth || ''}
          onChange={handleInputChange} />
        <InputField name={'country'} id={'country'} label={'Country'} type={'text'} value={formData.country || ''}
          onChange={handleInputChange} />
        <InputField name={'state'} id={'state'} label={'State'} type={'text'} value={formData.state || ''}
          onChange={handleInputChange} />
        <InputField name={'level_of_study'} id={'level_of_study'} label={'Education (currently pursuing)'} type={'text'} value={formData.level_of_study || ''}
          onChange={handleInputChange} />
        <InputField name={'field_of_study'} id={'field_of_study'} label={'Course'} type={'text'} value={formData.field_of_study || ''}
          onChange={handleInputChange} />
        <InputsFields name={'twelve_percentage'} id={'twelve_percentage'} label={'12th Percent'} type={'number'} value={formData.twelve_percentage}
          onChange={handleInputChange} />
        <InputsFields name={'father_yearly_income'} id={'father_yearly_income'} label={'Father yearly Income'} type={'number'} value={formData.father_yearly_income}
          onChange={handleInputChange} />
        <InputsFields name={'pin'} id={'pin'} label={'Pin'} type={'number'} value={formData.pin}
          onChange={handleInputChange} />
        <InputField name={'category'} id={'category'} label={'category'} type={'text'} value={formData.category || ''}
          onChange={handleInputChange} />
      </div>
      <div className='flex justify-end items-end pb-5'>
        <Button text='Submit' type='submit' theme='primary' onClick={handleRefreshClick} />
      </div>
    </form>
    </div>
  )
}

export default UserSignupEdit
