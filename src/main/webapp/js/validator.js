"use strict"
const form = document.querySelector('#form');
let x = form.elements.namedItem("x");
let y = form.elements.namedItem("y");
let r = form.elements.namedItem("r");
let submitForm = $('#submit');
let X, Y, R, result;

const pass_reg_y = /(^-[12345]$)|(^[0123]$)|[-]([01234](\.[0-9]+)$|\.[0-9]+)$|^[-][1234]$(\.[0-9]+$)?|^[012](\.[0-9]+)/;
const pass_reg_r = /(^[2345]$)|^[01234](\.[0-9]+)/;

let canvas = $('.graph-canvas');

window.onload = function () {

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


    function validateR(e) {
        if (e.target.name === "r")
            if (pass_reg_r.test(e.target.value.replace(/\s/g, ''))) {
                e.target.classList.add('valid');
                e.target.classList.remove('invalid');
                r.value = e.target.value;
                setSuccessFor(r);
            } else {
                e.target.classList.add('invalid');
                e.target.classList.remove('valid');
            }

    }

    submitForm.on('click', function () {
        validateR();
    });

    r.addEventListener('input', validateR);


    document.getElementById("submit").onclick = function () {

        X = x;
        Y = document.getElementById("y").value;
        R = document.getElementById("select").value;

        $.get('check.php', {x: X, y: Y, r: R}, function (data) {
            result = data;
            let array;
            array = result.split("#");
            add_table(array[0], array[1], array[2], array[3]);
            window.location.replace("a.jsp?name="+name);

        });

    }

    $.ajax({
        url: 'control', method: "GET",
        data: $(this).serialize() + "&timezone=" + new Date().getTimezoneOffset(),
        dataType: "html",

        success: function(data){
            console.log(data);
            $(".validate_button").attr("disabled", false);
            //window.localStorage.setItem("table",data["table"]);
            window.location.replace("result_page.jsp");
        },
        error: function(error){
            console.log(error);
            $(".validate_button").attr("disabled", false);

        },
    });
});


$(".reset_button").on("click",function(e){
    e.preventDefault();
    const params = {'clear': true}
    window.location.replace("control" + formatParams(params));

})






























