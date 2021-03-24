/*
 * This function add classes to form elements
 * @ author:
 */
function addClasses(input, label, p) {
  input.classList.add("input-form-error");
  label.classList.add("label-form-error");

  if (p.classList.contains("hide")) {
    p.classList.remove("hide");
  }
  return false;
}

/*
 * This function removes classes to form elements
 * @ author:
 */
function removeClasses(input, label, p) {
  input.classList.remove("input-form-error");
  label.classList.remove("label-form-error");
  p.classList.add("hide");
  return false;
}

/*
 * This function validates first name input
 * from adress page
 * @ author:
 */
export function validFirstName() {
  // get DOM elements
  const xInput = document.getElementById("fname");
  const xLabel = document.querySelector('label[for="Fname"]');
  const xp = document.querySelector(".p-fname");
  // toggle classes
  if (xInput.value == "") {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates last name input
 * from adress page
 * @ author:
 */
export function validLastName() {
  // get DOM elements
  const xInput = document.getElementById("lname");
  const xLabel = document.querySelector('label[for="Lname"]');
  const xp = document.querySelector(".p-lname");
  // toggle classes
  if (xInput.value == "") {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates birthday input
 * from adress page
 * @ author:
 */
export function validBirthday() {
  // get DOM elements
  const xInput = document.getElementById("Birthday");
  const xLabel = document.querySelector('label[for="Birthday"]');
  const xp = document.querySelector(".p-birthday");
  // toggle classes
  if (!xInput.validity.valid) {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates address1 input
 * from adress page
 * @ author:
 */
export function validAdress() {
  // get DOM elements
  const xInput = document.getElementById("address1");
  const xLabel = document.querySelector('label[for="address1"]');
  const xp = document.querySelector(".p-address1");
  // toggle classes
  if (!xInput.validity.valid) {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates postal code input
 * from adress page
 * @ author:
 */
export function validPostalCode() {
  // get DOM elements
  const xInput = document.getElementById("pcode");
  const xLabel = document.querySelector('label[for="pcode"]');
  const xp = document.querySelector(".p-pcode");
  // toggle classes
  if (!xInput.validity.valid) {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates phone number input
 * from adress page
 * @ author:
 */
export function validPhoneNumber() {
  // get DOM elements
  const xInput = document.getElementById("tel");
  const xLabel = document.querySelector('label[for="Phone"]');
  const xp = document.querySelector(".p-tel");
  // toggle classes
  if (!xInput.validity.valid) {
    addClasses(xInput, xLabel, xp);
    return false;
  } else {
    removeClasses(xInput, xLabel, xp);
    return true;
  }
}

/*
 * This function validates all inputs
 * in adress page
 * @ author:
 */
export function formAdressValidity() {
  return (
    validFirstName() &&
    validLastName() &&
    validBirthday() &&
    validAdress() &&
    validPostalCode() &&
    validPhoneNumber()
  );
}