// Arreglo de objetos proporcionado por la actividad
const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    
    // ---- PARTE 1: LLENAR EL SELECT (Solo se ejecuta en form.html) ----
    const productSelect = document.getElementById("product-name");
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            // El valor del atributo "value" debe ser el ID del producto
            option.value = product.id; 
            
            // Convertimos la primera letra de cada palabra en mayúscula para mejor presentación visual
            option.textContent = product.name.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
                
            productSelect.appendChild(option);
        });
    }

    // ---- PARTE 2: CONTADOR DE LOCALSTORAGE (Solo se ejecuta en review.html) ----
    const counterDisplay = document.getElementById("review-counter");
    
    if (counterDisplay) {
        // Obtenemos el contador actual de localStorage o empezamos en 0 si es la primera vez
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
        
        // Incrementamos el contador por cada carga exitosa de la página de confirmación
        reviewCount += 1;
        
        // Guardamos el nuevo valor actualizado en localStorage
        localStorage.setItem("reviewCount", reviewCount);
        
        // Mostramos el número en el HTML
        counterDisplay.textContent = reviewCount;
    }
});