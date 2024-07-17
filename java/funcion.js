const textBox = document.getElementById("textBox");
const aFahrenheit = document.getElementById("aFahrenheit");
const aCelsius = document.getElementById("aCelsius");
const result = document.getElementById("resultado");

let temp;

function convertir(){

    if(aFahrenheit.checked){
        temp=Number(textBox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent = temp + "°F";
    }
    else if(aCelsius.checked){

    }
    else{

    }
}