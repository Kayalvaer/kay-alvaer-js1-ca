const form = document.querySelector("form");
const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");

function validateForm() {
  event.preventDefault();

  // validate last name
  const lastNameValue = lastName.value;

  if (checkInputLength(lastNameValue, 5)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }


  // validate first name
  const firstNameValue = firstName.value;

  console.log("firstNameValue", firstNameValue)

  if (checkInputLength(firstNameValue, 4)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

}

function checkInputLength(inputValue, lengthToCheck) {


  if (inputValue.trim().length >= lengthToCheck) {
    return true;
  }

  return false;
}

form.addEventListener("submit", validateForm);