import React from 'react';
import CheckboxGroup from './CheckboxGroup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const SkillsAndDatePicker = ({ formData, formErrors, handleCheckboxChange, handleDateChange, touched }) => {
  return (
    <>
      <CheckboxGroup
        label="Additional Skills"
        options={['JavaScript', 'CSS', 'Python', 'React', 'Angular', 'Vue']}
        selectedOptions={formData.additionalSkills}
        onChange={handleCheckboxChange}
        error={touched && formErrors.additionalSkills}
      />
      <div className="mb-4">
        <label className="block mb-2">Preferred Interview Time</label>
        <DatePicker
          selected={formData.preferredInterviewTime}
          onChange={handleDateChange}
          showTimeSelect
          dateFormat="MMMM d, yyyy h:mm aa"
          className="w-full px-3 py-2 border rounded-lg"
        />
        {touched && formErrors.preferredInterviewTime && <p className="text-red-500">{formErrors.preferredInterviewTime}</p>}
      </div>
    </>
  );
};

export default SkillsAndDatePicker;
