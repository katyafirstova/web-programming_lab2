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
        canvasContainer.classList.add("input_err");

    } else {
        setSuccessFor(y);
        setSuccessFor(r);
        canvasContainer.classList.remove("input_err");
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

function validateY() {
    let yVal = y.value.replace(/\s/g, '')
    if (!isFinite(yVal) || (yVal <= -5 || yVal >= 3)) {
        y.classList.add('invalid');
        y.classList.remove('valid');
        setErrorFor(y);
        return false;
    } else {
        y.classList.add('valid');
        y.classList.remove('invalid');
        setSuccessFor(y);
        return true;
    }

}

submitForm.on('click', function () {
    validateY();
});


y.addEventListener('input', validateY);


function validateR() {
    let rVal = r.value;
    if (pass_reg_r.test(rVal.replace(/\s/g, ''))) {
        r.classList.add('valid');
        r.classList.remove('invalid');
        setSuccessFor(r);
        return true;
    } else {
        r.classList.add('invalid');
        r.classList.remove('valid');
        setErrorFor(r);
        return false;
    }
}

function changeR() {
    let rValue = document.getElementById("r").value;
    let input = document.getElementById("r");
    if (input.classList.contains("sel")) {
        r.value = "";
        input.classList.remove("sel");
    } else {
        r.value = rValue;
        let oldValue = document.querySelector(".sel");
        if (oldValue !== null)
            oldValue.classList.remove("sel");
        input.classList.add("sel");
        validateR();

    }
}

submitForm.on('click', function () {
    validateR();
});

r.addEventListener('input', validateR);

if (validateR && validateX && validateY) {
    submitForm.submit();
}






















