
import { Field } from 'formik';
import React, { ChangeEvent } from 'react';

interface Props {
  name: string;
  id: string;
  label: string;
  type: string ;
  color?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value? :  string
}

const InputField: React.FC<Props> = ({ name, id, label, type, color, onChange, value}) => {
  return (
    <div className="">
      <label
        className={`block text-sm font-medium leading-6 text-gray-900`}
      >
        {label}                     
      </label>
      <div className="mt-1">
        <input
          type={type}                                                                                                
          name={name}
          id={id}
          className="border font-medium text-grey-900 border-grey-300 sm:text-sm outline-none rounded-medium  block w-full p-2.5"
          onChange={onChange}                   
          value={value}                                                                                                                                                                                      
        />
      </div>
    </div>
  );
};
                          
export default InputField;