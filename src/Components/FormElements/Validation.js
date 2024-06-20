const validateForm = (formData) => {
  let errors = {};
  const {
    fullName,
    email,
    phoneNumber,
    applyingForPosition,
    relevantExperience,
    portfolioURL,
    managementExperience,
    additionalSkills,
    preferredInterviewTime,
  } = formData;

  if (!fullName) errors.fullName = "Full Name is required";
  if (!email) errors.email = "Email is required";
  if (!/\S+@\S+\.\S+/.test(email)) errors.email = "Email is invalid";
  if (!phoneNumber) errors.phoneNumber = "Phone Number is required";
  if (phoneNumber.length < 10) errors.phoneNumber = "Invalid Phone Number";
  if (isNaN(phoneNumber))
    errors.phoneNumber = "Phone Number must be a valid number";
  if (!applyingForPosition)
    errors.applyingForPosition = "Applying for Position is required";

  if (
    (applyingForPosition === "Developer" ||
      applyingForPosition === "Designer") &&
    !relevantExperience
  ) {
    errors.relevantExperience =
      "Relevant Experience is required for Developer or Designer";
  }

  if (applyingForPosition === "Designer" && !portfolioURL) {
    errors.portfolioURL = "Portfolio URL is required for Designer";
  }

  if (applyingForPosition === "Manager" && !managementExperience) {
    errors.managementExperience =
      "Management Experience is required for Manager";
  }

  if (additionalSkills.length === 0)
    errors.additionalSkills = "At least one skill must be selected";

  if (!preferredInterviewTime)
    errors.preferredInterviewTime = "Preferred Interview Time is required";

  return errors;
};

export default validateForm;
