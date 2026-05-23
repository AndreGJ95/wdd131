// 1. Lógica del Footer: Año actual y última modificación
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = `Última modificación: ${document.lastModified}`;

// 2. Captura de datos meteorológicos estáticos desde el HTML
const currentTemp = parseFloat(document.getElementById("temp").textContent);
const currentWind = parseFloat(document.getElementById("wind").textContent);

// REQUERIMIENTO: Función de una sola línea que calcula la sensación térmica (Fórmula Métrica)
const calculateWindChill = (t, v) => 13.12 + (0.6215 * t) - (11.37 * Math.pow(v, 0.16)) + (0.3965 * t * Math.pow(v, 0.16));

// 3. Función principal para validar límites y mostrar el resultado en pantalla
function displayWindChill(temp, wind) {
    const windChillElement = document.getElementById("windchill");

    // Condiciones métricas obligatorias: Temp <= 10 °C y Viento > 4.8 km/h
    if (temp <= 10 && wind > 4.8) {
        const chillFactor = calculateWindChill(temp, wind);
        // Muestra el resultado redondeado a 1 decimal
        windChillElement.textContent = `${chillFactor.toFixed(1)} °C`;
    } else {
        // Si no cumple las condiciones, muestra Not Applicable (N/A)
        windChillElement.textContent = "N/A";
    }
}

// Ejecutar la función automáticamente al cargar la página
displayWindChill(currentTemp, currentWind);