function parimpar() {
    let n1 = parseFloat(document.getElementById("num1").value);
    let resto = n1 % 2;
    if (resto == 0){
        document.getElementById("resultado").textContent = "par";
    } else{
        document.getElementById("resultado").textContent = "impar";
    }
}
function media(){
    let n1 = parseFloat(document.getElementById("nota1").value);
    let n2 = parseFloat(document.getElementById("nota2").value);
    let n3 = parseFloat(document.getElementById("nota3").value);
    let n4 = parseFloat(document.getElementById("nota4").value);
    let medeia = (n1 + n2 + n3 + n4) / 4;
    document.getElementById("resultado").textContent = "Resultado: " + medeia;
}
function converter(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let conversao =  (n1*9/5) + 32;
    document.getElementById("resultado").textContent = "Fahrenheit: " + conversao;
}
function imc(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let formula = n1 / (n2 * n2);
    document.getElementById("resultado").textContent = "IMC: " + formula;


}