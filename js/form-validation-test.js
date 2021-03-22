let labelFormValidation = document.querySelectorAll('.label-form');
let inputFormValidation = document.querySelectorAll('.input-form');
let pFormValidation = document.querySelectorAll('.text-form-error')

function formValidation(){
    for (let i = 0; i < labelFormValidation.length; i++) {
        labelFormValidation[i].classList.toggle("label-form-error");
    }
    for (let i = 0; i < inputFormValidation.length; i++) {
        inputFormValidation[i].classList.toggle("input-form-error");
    }
    for (let i = 0; i < pFormValidation.length; i++) {
        pFormValidation[i].classList.toggle("hide");
    }
}