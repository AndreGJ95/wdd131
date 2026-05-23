
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const currentTemp = parseFloat(document.getElementById("temp").textContent);
const currentWind = parseFloat(document.getElementById("wind").textContent);


const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));


function displayWindChill(temp, wind) {
    const windChillElement = document.getElementById("windchill");

   
    if (temp <= 10 && wind > 4.8) {
        const chillFactor = calculateWindChill(temp, wind);
        windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
    } else {
        windChillElement.textContent = "N/A";
    }
}


displayWindChill(currentTemp, currentWind);