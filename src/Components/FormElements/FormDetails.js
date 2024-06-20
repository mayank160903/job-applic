import React from "react";

const FormDetails = ({ formData, onGoBack }) => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 border rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Form Details</h2>
      <p>
        <strong>Full Name:</strong> {formData.fullName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Phone Number:</strong> {formData.phoneNumber}
      </p>
      <p>
        <strong>Applying for Position:</strong> {formData.applyingForPosition}
      </p>
      {formData.applyingForPosition === "Developer" && (
        <p>
          <strong>Relevant Experience:</strong> {formData.relevantExperience}{" "}
          years
        </p>
      )}
      {formData.applyingForPosition === "Designer" && (
        <p>
          <strong>Portfolio URL:</strong> {formData.portfolioURL}
        </p>
      )}
      {formData.applyingForPosition === "Manager" && (
        <p>
          <strong>Management Experience:</strong>{" "}
          {formData.managementExperience}
        </p>
      )}
      <p>
        <strong>Additional Skills:</strong>{" "}
        {formData.additionalSkills.join(", ")}
      </p>
      <p>
        <strong>Preferred Interview Time:</strong>{" "}
        {formData.preferredInterviewTime.toString()}
      </p>
      <button
        onClick={onGoBack}
        className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-lg"
      >
        Go Back to Form
      </button>
    </div>
  );
};

export default FormDetails;
