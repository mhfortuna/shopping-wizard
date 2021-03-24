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
export function validFirstName(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Fname"]');
  const xp = document.querySelector(".p-fname");
  // toggle classes
  if (element.value == "") {
    addClasses(element, xLabel, xp);
    return false;
  } else {
    removeClasses(element, xLabel, xp);
    return true;
  }
}

/*
 * This function validates last name input
 * from adress page
 * @ author:
 */
export function validLastName(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Lname"]');
  const xp = document.querySelector(".p-lname");
  // toggle classes
  if (element.value == "") {
    addClasses(element, xLabel, xp);
  } else {
    removeClasses(element, xLabel, xp);
  }
}

/*
 * This function validates birthday input
 * from adress page
 * @ author:
 */
export function validBirthday(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Birthday"]');
  const xp = document.querySelector(".p-birthday");
  // toggle classes
  if (!element.validity.valid) {
    addClasses(element, xLabel, xp);
  } else {
    removeClasses(element, xLabel, xp);
  }
}

/*
 * This function validates address1 input
 * from adress page
 * @ author:
 */
export function validAdress(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="address1"]');
  const xp = document.querySelector(".p-address1");
  // toggle classes
  if (!element.validity.valid) {
    addClasses(element, xLabel, xp);
  } else {
    removeClasses(element, xLabel, xp);
  }
}

/*
 * This function validates postal code input
 * from adress page
 * @ author:
 */
export function validPostalCode(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="pcode"]');
  const xp = document.querySelector(".p-pcode");
  // toggle classes
  if (!element.validity.valid) {
    addClasses(element, xLabel, xp);
  } else {
    removeClasses(element, xLabel, xp);
  }
}

/*
 * This function validates phone number input
 * from adress page
 * @ author:
 */
export function validPhoneNumber(element = this) {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Phone"]');
  const xp = document.querySelector(".p-tel");
  // toggle classes
  if (!element.validity.valid) {
    addClasses(element, xLabel, xp);
  } else {
    removeClasses(element, xLabel, xp);
  }
}
