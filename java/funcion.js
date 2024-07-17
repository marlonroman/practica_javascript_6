const textBox = document.getElementById("textBox");
const aFahrenheit = document.getElementById("aFahrenheit");
const aCelsius = document.getElementById("aCelsius");
const result = document.getElementById("resultado");

let temp;

function convertir(){

    if(aFahrenheit.checked){
        temp=Number(textBox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(aCelsius.checked){
        temp=Number(textBox.value);
        temp=(temp - 32) / (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Ingrese temperatura";
    }
}