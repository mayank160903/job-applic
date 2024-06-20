import React, { useEffect, useState } from 'react';
import FormDetails from './FormElements/FormDetails';
import FormContainer from './FormElements/FormContainer';
import FormFields from './FormElements/FormFields';
import PositionFields from './FormElements/PositionFields';
import SkillsAndDatePicker from './FormElements/SkillsAndDatePicker';
import validateForm from './FormElements/Validation';
import Content from './Content';

const FormTwo = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    applyingForPosition: '',
    relevantExperience: '',
    portfolioURL: '',
    managementExperience: '',
    additionalSkills: [],
    preferredInterviewTime: null,
  });

  const [formErrors, setFormErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if(touched){
      const errors = validateForm(formData);
      setFormErrors(errors);
    }
    
  }, [formData, touched]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (checkedSkills) => {
    setFormData({
      ...formData,
      additionalSkills: checkedSkills,
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      preferredInterviewTime: date,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched(true);
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      setSubmitted(true);
    } else {
      setFormErrors(errors);
      alert("Form is Incomplete. Kindly complete it and then submit.");
    }
  };

  const handleGoBack = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phoneNumber: '',
      applyingForPosition: '',
      relevantExperience: '',
      portfolioURL: '',
      managementExperience: '',
      additionalSkills: [],
      preferredInterviewTime: null,
    });
    setFormErrors({});
    setTouched(false);
  };

  return (
    <>
      <Content />
      <FormContainer>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <FormFields formData={formData} formErrors={formErrors} handleInputChange={handleInputChange} touched={touched}  />
            <PositionFields formData={formData} formErrors={formErrors} handleInputChange={handleInputChange} touched={touched}  />
            <SkillsAndDatePicker formData={formData} formErrors={formErrors} handleCheckboxChange={handleCheckboxChange} handleDateChange={handleDateChange} touched={touched}  />
            <button type="submit" className="w-full px-3 py-2 bg-blue-500 text-white rounded-lg">Submit</button>
          </form>
        ) : (
          <FormDetails formData={formData} onGoBack={handleGoBack} />
        )}
      </FormContainer>
    </>
  );
};

export default FormTwo;
