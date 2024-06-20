import React from 'react';
import InputField from './InputField';

const FormFields = ({ formData, formErrors, handleInputChange, touched }) => {
  return (
    <>
      <InputField
        label="Full Name"
        type="text"
        name="fullName"
        value={formData.fullName}
        onChange={handleInputChange}
        error={touched && formErrors.fullName}
        placeholder={"For eg . John Doe"}
      />
      <InputField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        error={touched && formErrors.email}
        placeholder={"For eg . john3doe@gmail.com "}
      />
      <InputField
        label="Phone Number"
        type="tel"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleInputChange}
        error={touched && formErrors.phoneNumber}
        placeholder={"For eg . 9998877765"}
      />
      <div className="mb-4">
        <label className="block mb-2">Applying for Position</label>
        <select
          name="applyingForPosition"
          value={formData.applyingForPosition}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border rounded-lg"
        >
          <option value="">Select</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Manager">Manager</option>
        </select>
        {touched && formErrors.applyingForPosition && <p className="text-red-500">{formErrors.applyingForPosition}</p>}
      </div>
    </>
  );
};

export default FormFields;
