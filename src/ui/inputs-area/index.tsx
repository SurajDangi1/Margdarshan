import React from 'react'

export interface InputAreaProps {
  label: string
  value: string | number
}

const InputArea = ({ label, value }: InputAreaProps) => {
  return (
    <div>
      <label
        className="block text-sm font-medium leading-6 text-grey-400">
        {label}
      </label>
      <div className="mt-1">
        <label
          className=" border font-medium text-grey-900 border-grey-300 sm:text-sm rounded-medium focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" >
          {value}
        </label>
      </div>
    </div>
  )
}

export default InputArea