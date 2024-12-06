function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9 / 5) + 32;
        document.getElementById("fahrenheitResult").innerText = 
            `${celsius} °C = ${fahrenheit.toFixed(2)} °F`;
    } else {
        document.getElementById("fahrenheitResult").innerText = "Zadejte platnou hodnotu!";
    }
}

function convertToCelsius() {
    const fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    if (!isNaN(fahrenheit)) {
        const celsius = (fahrenheit - 32) * 5 / 9;
        document.getElementById("celsiusResult").innerText = 
            `${fahrenheit} °F = ${celsius.toFixed(2)} °C`;
    } else {
        document.getElementById("celsiusResult").innerText = "Zadejte platnou hodnotu!";
    }
}