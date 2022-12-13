"use strict"
const form = document.getElementById("form");
let x = form.elements.namedItem("x");
let y = form.elements.namedItem("y");
let r = form.elements.namedItem("r");


function validateX() {
    let label = $('label');
    label.removeClass('reallyRequired');
    if (x.value === "") {
        x.prev('label').addClass('reallyRequired');
        x.classList.add("input_err");
        return false;
    } else {
        label.removeClass('reallyRequired');
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

    } else {
        setSuccessFor(y);
        setSuccessFor(r);
        canvasContainer.classList.remove("input_err");
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

function validateR() {
    let rVal = r.value;
    if (!isFinite(rVal) || (rVal <= 2 || rVal >= 5)) {
        r.classList.add('invalid');
        r.classList.remove('valid');
        setErrorFor(r);
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

form.addEventListener("submit", function (e) {
    if (!validateX() || !validateY() || !validateR() || checkIfBlank()) e.preventDefault();
});

x.addEventListener("input", function () {
    x.classList.remove("input_err");

});
y.addEventListener("input", function () {
    y.classList.remove("input_err");
});





















