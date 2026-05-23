// Footer dates
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Static weather inputs (matching your HTML text values)
const tempC = parseFloat(document.getElementById("temp").textContent);
const windKmh = parseFloat(document.getElementById("wind").textContent);

// One-line return function for Wind Chill calculation (Metric)
const calculateWindChill = (t, v) => 13.12 + 0.6215 * t -  11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16);

// Function to display the result based on strict criteria
function displayWindChill(temp, wind) {
    const windChillSpan = document.getElementById("windchill");

    // Metric conditions: Temp <= 10 °C AND Wind > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        const chill = calculateWindChill(temp, wind);
        windChillSpan.textContent = `${chill.toFixed(1)} °C`;
    } else {
        windChillSpan.textContent = "N/A";
    }
}

// Execute on load
displayWindChill(tempC, windKmh);