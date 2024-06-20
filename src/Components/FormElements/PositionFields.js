import React from 'react';
import InputField from './InputField';

const PositionFields = ({ formData, formErrors, handleInputChange, touched }) => {
  return (
    <>
    
      {(formData.applyingForPosition === 'Developer' || formData.applyingForPosition === 'Designer') && (
        <InputField
          label="Relevant Experience (Years)"
          type="number"
          name="relevantExperience"
          value={formData.relevantExperience}
          onChange={handleInputChange}
          error={touched && formErrors.relevantExperience}
        />
      )}
      {formData.applyingForPosition === 'Designer' && (
        <InputField
          label="Portfolio URL"
          type="text"
          name="portfolioURL"
          value={formData.portfolioURL}
          onChange={handleInputChange}
          error={touched && formErrors.portfolioURL}
        />
      )}
      {formData.applyingForPosition === 'Manager' && (
        <InputField
          label="Management Experience"
          type="text"
          name="managementExperience"
          value={formData.managementExperience}
          onChange={handleInputChange}
          error={touched && formErrors.managementExperience}
        />
      )}
    </>
  );
};

export default PositionFields;
