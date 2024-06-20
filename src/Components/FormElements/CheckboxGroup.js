import React from 'react';

const CheckboxGroup = ({ label, options, selectedOptions, onChange, error }) => {
  const handleCheckboxChange = (option) => {
    const newSelectedOptions = selectedOptions.includes(option)
      ? selectedOptions.filter(item => item !== option)
      : [...selectedOptions, option];
    onChange(newSelectedOptions);
  };

  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      {options.map(option => (
        <div key={option} className="flex items-center">
          <input
            type="checkbox"
            id={option}
            name={option}
            checked={selectedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
            className="mr-2"
          />
          <label htmlFor={option}>{option}</label>
        </div>
      ))}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default CheckboxGroup;
