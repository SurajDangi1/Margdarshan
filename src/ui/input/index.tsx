
import { Field } from 'formik';
import React from 'react';

interface Props {
  name: string;
  id: string;
  label: string;
  type:string;
}

const InputField: React.FC<Props> = ({ name, id, label,type }) => {
  return (
    <div className="">
      <label
        className="block text-sm font-medium leading-6 text-grey-400"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={id}
          className="border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
      </div>
    </div>
  );
};

export default InputField;