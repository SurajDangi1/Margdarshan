import React, { useState } from 'react';

type DropdownProps = {
  label: string;
  name?: string
  id?: string
  options: string[];
  onSelect: (value: string) => void;
};

const Dropdown: React.FC<DropdownProps> = ({ label, options, onSelect, id, name }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (value: string) => {
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div>
      <label className="block text-sm font-medium leading-6 text-black">
        {label}
      </label>
      <div className='mt-1'>
        <select id={id}
          name={name} className="border font-medium outline-none text-grey-900 border-grey-300 rounded-medium sm:text-sm  w-full p-3.5" value={selectedOption} onChange={(e) => handleOptionSelect(e.target.value)}>
          <option value="">Select an option</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Dropdown;
