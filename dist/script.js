"use strict";
var input1 = document.getElementById('num1');
var input2 = document.getElementById('num2');
var button = document.getElementById('somar');
function soma(x, y) {
    return x + y;
}
button.addEventListener("click", function () {
    console.log(soma(Number(input1.value), Number(input2.value)));
});
