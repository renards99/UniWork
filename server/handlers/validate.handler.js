const validatePositiveIntegerNumber = (value) => {
  // Check if the value is a number
  if (isNaN(value)) {
    return false;
  }

  // Check if the value is an integer
  if (Math.floor(Math.abs(value)) !== value) {
    return false;
  }
  return true;
};

const validatePositiveNumber = (value) => {
  // Check if the value is a number
  if (isNaN(value)) {
    return false;
  }

  return true;
};

const validateStringInRange = (str, minLen, maxLen, regex) => {
  // Check if the string is not empty
  if (!str || str.trim().length === 0) {
    return false;
  }

  // Check if the string length is within the specified range
  if (str.length < minLen || str.length > maxLen) {
    return false;
  }

  // Check if the string matches the regular expression
  if (!str.match(regex)) {
    return false;
  }
  return true;
};

const validateString = (str, regex) => {
  // Check if the string is not empty
  if (typeof str !== 'string' || !str || str.trim().length === 0) {
    return false;
  }

  // Check if the string matches the regular expression
  if (!str.match(regex)) {
    return false;
  }
  return true;
};

const validateDate = (dateString) => {
  // Check if dateString can be converted to a Date object
  const date = new Date(dateString);
  if (isNaN(date.getTime())) {
    return false;
  }

  // Check if the year is within a reasonable range
  const year = date.getFullYear();
  if (year < new Date().getFullYear() || year > 3000) {
    return false;
  }

  // Check if the month is within a reasonable range
  const month = date.getMonth() + 1;
  if (month < 1 || month > 12) {
    return false;
  }

  // Check if the day is within a reasonable range
  const day = date.getDate();
  if (day < 1 || day > 31) {
    return false;
  }

  return formatDate(date);
};
const formatDate = (date) => {
  const year = date.getFullYear();
  // add '0' if month or day is less than 10
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

//prevent input null
const validateInput = (params, ...exceptions) => {
  for (const key in params) {
    if (Object.hasOwnProperty.call(params, key)) {
      // Perform validation on each field here

      const fieldValue = params[key] + '';
      if (exceptions.includes(fieldValue)) {
        continue; // Skip validation for exceptions
      }
      // Example: Check if the field is not empty
      if (!fieldValue || fieldValue.trim().length === 0) {
        return false;
      }

      // Other validation checks can be added here
    }
  }
  return true;
};
function validateYear(year) {
  return /^\d{4}$/.test(year) && parseInt(year) >= 1900 && parseInt(year) <= 2099;
}
function validateId(...inputs) {
  for (const input of inputs) {
    const parsedInput = Number(input); // This converts string "1" to number 1

    if (!Number.isInteger(parsedInput) || parsedInput <= 0) {
      return false;
    }
  }
  return true;
}
function validateState(input) {
  const validStates = ['accepted', 'waiting', 'denied'];
  return validStates.includes(input);
}
function validateStringWithNumber(...inputArray) {
  return inputArray.every((inputStr) => {
    // Check if the input is empty or only contains digits and spaces
    if (!inputStr || /^[\d\s]+$/.test(inputStr)) {
      return false;
    }

    // Check if the input contains only letters, numbers, and optional spaces
    if (/^[a-zA-Z0-9\s]*$/.test(inputStr)) {
      // Check if the input is not only composed of a single digit
      if (!/^\d$/.test(inputStr.trim())) {
        return true;
      }
    }
    return false;
  });
}
function validateGender(input) {
  return (
    input === 1 || input === '1' || input === 2 || input === '2' || input === 3 || input === '3'
  );
}
module.exports = {
  validatePositiveIntegerNumber,
  validatePositiveNumber,
  validateString,
  validateDate,
  formatDate,
  validateStringInRange,
  validateInput,
  validateYear,
  validateId,
  validateState,
  validateStringWithNumber,
  validateGender,
};
