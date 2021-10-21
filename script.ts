const input1 = document.getElementById('num1') as HTMLInputElement;
const input2 = document.getElementById('num2') as HTMLInputElement;
const button = document.getElementById('somar')!;

function soma(x: number, y: number) {
    return x + y;
}

button.addEventListener("click", function() {
    console.log(soma(Number(input1.value), Number(input2.value)));
});