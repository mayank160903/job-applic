import React from 'react';

const InputField = ({ label, type, name, value, onChange, error, placeholder }) => {
  return (
    <div className="mb-4">
      <label className="block mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border rounded-lg"
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
