import React from 'react'
import InputField from '../input'
import { Button } from '@/ui'


const UserSignupEdit = () => {
  return (
    <div>
      <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-2  gap-5 mb-10'>
        <InputField name={'fullName'} id={'fullName'} label={'Full Name'} type={'text'} />
        <InputField name={'email'} id={'email'} label={'Email'} type={'email'} />
        <InputField name={'gender'} id={'gender'} label={'Gender'} type={'text'} />
        <InputField name={'dateOfBirth'} id={'dateOfBirth'} label={'Date Of Birth'} type={'date'} />
        <InputField name={'country'} id={'country'} label={'Country'} type={'text'} />
        <InputField name={'state'} id={'state'} label={'State'} type={'text'} />
        <InputField name={'pin'} id={'pin'} label={'pin'} type={'number'} />
        <InputField name={'level_of_study'} id={'level_of_study'} label={'Education (currently pursuing)'} type={'text'} />
        <InputField name={'field_of_study'} id={'field_of_study'} label={'Course'} type={'text'} />
      </div>
      <div className='flex justify-end items-end pb-5'>
        <Button text='Submit' type='submit' theme='primary' />
      </div>
    </div>
  )
}

export default UserSignupEdit
