let canvasContainer = document.getElementById("visualization_container");
let canvas = document.getElementById("areas");
let ctx = canvas.getContext("2d");
let width = 320;
let canvasR = 117;
let submitForm = $('#submit');

canvas.addEventListener("click", function (e) {
        let canvasX = e.pageX - this.offsetLeft;
        let canvasY = e.pageY - this.offsetTop;
        drawPoints(canvasX, canvasY);
        sendDataToForm(canvasX - width / 2, width / 2 - canvasY);

});

window.onload = function () {
    let coordX = document.querySelectorAll(".selectX");
    let coordY = document.querySelectorAll(".inputY");
    let coordR = document.querySelectorAll(".inputR");
    for (let i = 0; i < coordX.length; i++) {
        console.log(coordX[i].innerHTML * canvasR / coordR[i].innerHTML, coordY[i].innerHTML * canvasR / coordR[i].innerHTML);
        drawPoints(coordX[i].innerHTML * canvasR / coordR[i].innerHTML + width / 2, width / 2 - coordY[i].innerHTML * canvasR / coordR[i].innerHTML);
    }
};

function sendDataToForm(xVal, yVal) {
    x.value = Math.round(document.querySelectorAll(".selectX") * r.value / canvasR);
    y.value = (document.querySelectorAll(".inputY") * r.value / canvasR).toString();
    submitForm.submit();
}

function drawPoints(canvasX, canvasY) {
    ctx.beginPath();
    ctx.arc(canvasX, canvasY, 5, 0, 2 * Math.PI);
    ctx.fillStyle = "#E40045";
    ctx.fill();
    console.log(`${canvasX - width / 2} ${width / 2 - canvasY}`);
    ctx.closePath();
}














