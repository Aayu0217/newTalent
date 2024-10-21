// disable space on key press input email field
export const onInputChange = (e, setValue) => {
  setValue(e.target.name, e.target.value.replace(/\s/g, "")); // this remove from all string
};

// disable space on key press input
export const handleKeyPress = (e, setValue) => {
  if (e.target.value == " ") setValue(e.target.name, e.target.value.trim());
};
