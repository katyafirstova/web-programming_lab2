"use strict"
const form = document.querySelector('#form');
let x = form.elements.namedItem("x");
let y = form.elements.namedItem("y");
let r = form.elements.namedItem("r");
let submitForm = $('#submit');

const pass_reg_y = /(^-[12345]$)|(^[0123]$)|[-]([01234](\.[0-9]+)$|\.[0-9]+)$|^[-][1234]$(\.[0-9]+$)?|^[012](\.[0-9]+)/;
const pass_reg_r = /(^[2345]$)|^[01234](\.[0-9]+)/;


function validateX() {
    let label = $('label');
    let selectedVal = $(".selectX");
    label.removeClass('reallyRequired');
    if (selectedVal.val() === "" || selectedVal.val() == null) {
        selectedVal.prev('label').addClass('reallyRequired');
        return false;
    } else {
        label.removeClass('reallyRequired');
    }
    x = selectedVal.val();
}

submitForm.on('click', function () {
    validateX();
});


function checkIfBlank() {
    let yValue = y.value.replace(/\D/g, '');
    let rValue = r.value.replace(/\D/g, '');
    if (yValue === '' || rValue === '') {
        setErrorFor(y, 'поле не может быть пустым');
        setErrorFor(r, 'поле не может быть пустым');

    } else {
        setSuccessFor(y);
        setSuccessFor(r);
    }
}

submitForm.on('click', function () {
    checkIfBlank();
});


function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

function validateY(e) {
    if (e.target.name === "y")
        if (pass_reg_y.test(e.target.value.replace(/\s/g, ''))) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            y.value = e.target.value;
            setSuccessFor(y);
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
            setErrorFor(y);
        }

}

submitForm.on('click', function () {
    validateY();
});


y.addEventListener('input', validateY);


function validateR() {
    let strR = r.value;
    if (strR.target.name === "r")
        if (pass_reg_r.test(strR.target.value.replace(/\s/g, ''))) {
            strR.target.classList.add('valid');
            strR.target.classList.remove('invalid');
            r.value = strR.target.value;
            setSuccessFor(r);
        } else {
            strR.target.classList.add('invalid');
            strR.target.classList.remove('valid');
            setErrorFor(r);
        }
    return true;
}

submitForm.on('click', function () {
    validateR();
});

r.addEventListener('input', validateR);

if (validateR && validateX && validateY) {
    submitForm.submit();
}






















