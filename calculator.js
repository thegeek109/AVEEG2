function addition() {
    var number1 = parseFloat( document.getElementById('number1').value);
    var number2= parseFloat(document.getElementById('number2').value);
    var result = number1 + number2;
    document.getElementById("result").value = result;
    
};
function subtaction() {
    var number1 = parseFloat( document.getElementById('number1').value);
    var number2= parseFloat(document.getElementById('number2').value);
    var result = number1 - number2;
    document.getElementById("result").value = result;
    
};
function division() {
    var number1 = parseFloat( document.getElementById('number1').value);
    var number2= parseFloat(document.getElementById('number2').value);
    var result = number1 / number2;
    document.getElementById("result").value = result;
};
function modulus() {
    var number1 = parseFloat( document.getElementById('number1').value);
    var number2= parseFloat(document.getElementById('number2').value);
    var result = number1 % number2;
    document.getElementById("result").value = result;
    
};
function multiplication() {
    var number1 = parseFloat( document.getElementById('number1').value);
    var number2= parseFloat(document.getElementById('number2').value);
    var result = number1 * number2;
    document.getElementById("result").value = result;
}  
// function result() {
//     var result= result
//     document.getElementById('result').innerText = result;
    
// }