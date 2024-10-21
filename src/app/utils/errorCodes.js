const errorMessages = {
  100: "HEADER_IS_MISSING",
  101: "DEVICE_TYPE_NOT_ALLOWED",
  104: "INVALID_TOKEN",
  400: "BAD_REQUEST_PLEASE_CHECK_YOUR_INPUT",
  404: "RESOURCE_NOT_FOUND",
  500: "INTERNAL_SERVER_ERROR",
  200: "SUCCESS",
};

export const getErrorMessage = (code) => {
  return errorMessages[code] || "An unexpected error occurred.";
};

//invalid email
