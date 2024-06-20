import React from 'react';

const FormContainer = ({ children }) => {
  return (
    <div className="max-w-lg mx-auto mb-10 p-4 border rounded-lg">
      {children}
    </div>
  );
};

export default FormContainer;
