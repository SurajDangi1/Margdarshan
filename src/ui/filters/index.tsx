import React, { useState } from 'react';
import Dropdown from '../dropdown';
import InputField from '../input';



const Filter = () => {
  const [selectedValues, setSelectedValues] = useState<{
    isFemale: string | null;
    scholarshipStartMonth: string | null;
    scholarshipEndMonth: string | null; 
    father_yearly_income: number | null;
    twelvePercentage: number | null; 
  }>({
    isFemale: null,
    scholarshipStartMonth: null,
    scholarshipEndMonth: null,

    father_yearly_income: null,
    twelvePercentage: null, 
  });

  const options = ['Yes', 'No'];
  const months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];


  const handleOptionSelect = (selectedOption: string, label: string) => {
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [label]: selectedOption,
    }));
  };

  console.log(selectedValues)

  const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const parsedValue = parseFloat(value);
    setSelectedValues((prevValues) => ({
      ...prevValues,
      [name]: parsedValue
    }));
  };



  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-3 pl-10 pr-10 gap-5 mb-5'>
        <Dropdown label={'Is Female'} options={options} onSelect={(selectedOption) => handleOptionSelect(selectedOption, 'isFemale')} />
        <Dropdown label={'Scholarship Start Month'} options={months} onSelect={(selectedOption) => handleOptionSelect(selectedOption, 'scholarshipStartMonth')} />
        <Dropdown label={'Scholarship End Month'} options={months} onSelect={(selectedOption) => handleOptionSelect(selectedOption, 'scholarshipEndMonth')} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-5 pl-10 sm:pl-40 pr-10 sm:pr-40'>
        <InputField
          label={'12th Percentage'}
          name={'twelvePercentage'}
          onChange={handleNumberChange} id={'twelve_percentage'} type={'number'} />
        <InputField
          label={'Family Income(In Lpa)'}
          name={'father_yearly_income'}
          onChange={handleNumberChange} id={'father_yearly_income'} type={'number'} />
      </div>
    </div>
  );
};

export default Filter;
