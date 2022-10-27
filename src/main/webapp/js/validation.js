"use strict"
const form = document.querySelector('#form');
let x = form.elements.namedItem("x");
let y = form.elements.namedItem("y");
let r = form.elements.namedItem("r");
let xError = document.getElementsByClassName("xError");
let submitForm = $('#submit');
let X, Y, R, result;

const pass_reg = /(^-[123]$)|(^[012345]$)|^[-]?([012](\.[0-9]+)$|\.[0-9]+)$|^[01234](\.[0-9]$)?/;

window.onload = function () {

    let buttons = document.querySelectorAll("input[name = x]");
    buttons.forEach(click);

    function click(element) {
        element.onclick = function () {
            x = element.value;
            buttons.forEach(function (element) {
                element.style.boxShadow = "";
                element.style.transform = "";
            });
            this.style.boxShadow = "0 0 40px 5px #f41c52";
            this.style.transform = "scale(1.05)";
        }
        return true;
    }


    function validateX() {
        if (x.value === "") {
            printError("xError", "выберите x");
        } else {
            printError("xError", "");
            xError = false;
        }
    }

    submitForm.on('click', function () {
        validateX();
    });
};


form.addEventListener('submit', function (e) {
    e.preventDefault();

    return true;
});

function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


submitForm.on('click', function () {
    checkIfBlank();
});


function checkIfBlank() {
    let yValue = y.value.replace(/\D/g, '');
    if (yValue === '') {
        setErrorFor(y, 'поле не может быть пустым');
    } else {
        setSuccessFor(y);
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

submitForm.on('click', function () {
    validateY();
});

function validateY(e) {
    if (e.target.name === "y")
        if (pass_reg.test(e.target.value.replace(/\s/g, ''))) {
            e.target.classList.add('valid');
            e.target.classList.remove('invalid');
            y.value = e.target.value;
            setSuccessFor(y);
        } else {
            e.target.classList.add('invalid');
            e.target.classList.remove('valid');
        }

}

y.addEventListener('input', validateY);


submitForm.on('click', function () {
    validateR();
});

function validateR() {
    let label = $('label');
    let selectedVal = $(".selectR");
    label.removeClass('reallyRequired');
    if (selectedVal.val() === "" || selectedVal.val() == null) {
        selectedVal.prev('label').addClass('reallyRequired');
        return false;
    } else {
        label.removeClass('reallyRequired');
    }
    r = selectedVal.val();
}



document.getElementById("submit").onclick = function () {

    X = x;
    Y = document.getElementById("y").value;
    R = document.getElementById("select").value;

    $.get('check.php', {x: X, y: Y, r: R}, function (data) {
        result = data;
        let array;
        array = result.split("#");
        add_table(array[0], array[1], array[2], array[3]);

    });

}

function add_table(xyr, res, current_time,computation_time) {


    let tbody = document.getElementById('result-table').getElementsByTagName('TBODY')[0];
    let row = document.createElement("TR");
    tbody.appendChild(row);

    let td1 = document.createElement("th");
    let td2 = document.createElement("th");
    let td3 = document.createElement("th");
    let td4 = document.createElement("th");

    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    row.appendChild(td4);

    td1.innerHTML = xyr;
    td2.innerHTML = res;
    td3.innerHTML = current_time;
    td4.innerHTML = computation_time;

}



























