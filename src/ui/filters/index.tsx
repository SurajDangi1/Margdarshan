import React from 'react'
import Dropdown from '../dropdown'

const Filter = () => {
  const options = ['Yes', 'No'];
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const marks = ['40-50%', '50-60%', '60-70%', '70-80%', '80-90%', '90-100%']
  const income = ['50K - 100k', '1Lpa - 2Lpa', '2Lpa - 3Lpa' , '3Lpa - 4Lpa']

  const handleOptionSelect = (selectedOption: string) => {
    console.log('Selected option:', selectedOption);
  };
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-3 pl-10 pr-10 gap-5 mb-5'>
       <Dropdown label={'Is Female'} options={options} onSelect={handleOptionSelect} />
       <Dropdown label={'Scholarship Start Month'} options={months} onSelect={handleOptionSelect} />
       <Dropdown label={'Scholarship End Month'} options={months} onSelect={handleOptionSelect} />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2  gap-5 pl-10 sm:pl-40 pr-10 sm:pr-40'>
      <Dropdown label={'Marks'} options={marks} onSelect={handleOptionSelect} />
       <Dropdown label={'Family Income'} options={income} onSelect={handleOptionSelect} />
      </div> 


    </div> 
  )
}


export default Filter