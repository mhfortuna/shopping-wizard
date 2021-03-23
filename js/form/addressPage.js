/*
 * This function add classes to form elements
 * @ author:
 */
function addClasses(input, label, p) {
  input.classList.add("input-form-error");
  label.classList.add("label-form-error");
  p.classList.remove("hide");
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
  const xLabel = document.querySelector('label[for="Fname"]');
  const xp = document.querySelector(".p-fname");
  // toggle classes
  if (this.value == "") {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}

/*
 * This function validates last name input
 * from adress page
 * @ author:
 */
export function validLastName() {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Lname"]');
  const xp = document.querySelector(".p-lname");
  // toggle classes
  if (this.value == "") {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}

/*
 * This function validates birthday input
 * from adress page
 * @ author:
 */
export function validBirthday() {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Birthday"]');
  const xp = document.querySelector(".p-birthday");
  // toggle classes
  if (!this.validity.valid) {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}

/*
 * This function validates address1 input
 * from adress page
 * @ author:
 */
export function validAdress() {
  // get DOM elements
  const xLabel = document.querySelector('label[for="address1"]');
  const xp = document.querySelector(".p-address1");
  // toggle classes
  if (!this.validity.valid) {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}

/*
 * This function validates postal code input
 * from adress page
 * @ author:
 */
export function validPostalCode() {
  // get DOM elements
  const xLabel = document.querySelector('label[for="pcode"]');
  const xp = document.querySelector(".p-pcode");
  // toggle classes
  if (!this.validity.valid) {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}

/*
 * This function validates phone number input
 * from adress page
 * @ author:
 */
export function validPhoneNumber() {
  // get DOM elements
  const xLabel = document.querySelector('label[for="Phone"]');
  const xp = document.querySelector(".p-tel");
  // toggle classes
  if (!this.validity.valid) {
    addClasses(this, xLabel, xp);
  } else {
    removeClasses(this, xLabel, xp);
  }
}
