"use strict"
const form = document.getElementById("form");
let x = form.elements.namedItem("x");
let y = form.elements.namedItem("y");
let r = form.elements.namedItem("r");
let xError = document.getElementsByClassName("xError");


function validateX() {

    let label = $('label');
    let selectedVal = $(".selectX");
    label.removeClass('reallyRequired');
    if (selectedVal.val() === "" || selectedVal.val() == null) {
        selectedVal.prev('label').addClass('reallyRequired');
        selectedVal.classList.add("input_err");
        printError("xError", "выберите x");
        return false;
    } else {
        label.removeClass('reallyRequired');
        printError("xError", "");
        x = selectedVal.val();
        xError = false;
        return true;
    }
}

function checkIfBlank() {
    let yValue = y.value.replace(/\D/g, '');
    let rValue = r.value.replace(/\D/g, '');
    if (yValue === '' || rValue === '') {
        setErrorFor(y, 'поле не может быть пустым');
        setErrorFor(r, 'поле не может быть пустым');
        canvasContainer.classList.add("input_err");
        return false;

    } else {
        setSuccessFor(y);
        setSuccessFor(r);
        canvasContainer.classList.remove("input_err");
        return true;
    }
}

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

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

function validateY() {
    let yVal = y.value.replace(/\s/g, '')
    if (!isFinite(yVal) || (yVal <= -5 || yVal >= 3)) {
        y.classList.add('invalid');
        y.classList.remove('valid');
        return false;
    } else {
        y.classList.add('valid');
        y.classList.remove('invalid');
        setSuccessFor(y);
        return true;
    }

}

function validateR() {
    let rVal = r.value;
    if (!isFinite(rVal) || (rVal <= 2 || rVal >= 5)) {
        r.classList.add('invalid');
        r.classList.remove('valid');
        return false;
    } else {
        r.classList.add('valid');
        r.classList.remove('invalid');
        setSuccessFor(r);
        return true;

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

y.addEventListener('input', validateY);
r.addEventListener('input', validateY);
form.on('click', function () {
    validateX();
    validateY();
    validateR();


});
form.addEventListener("submit", function (e) {
    if (!validateX() || !validateY() || !validateR() || checkIfBlank()) e.preventDefault();
});

x.addEventListener("input", function () {
    x.classList.remove("input_err");

});
y.addEventListener("input", function () {
    y.classList.remove("input_err");
});





















