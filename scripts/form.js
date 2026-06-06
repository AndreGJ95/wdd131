const products = [
  { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
  { id: "fc-2050", name: "power laces", averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

document.addEventListener("DOMContentLoaded", () => {
    
   
    const productSelect = document.getElementById("product-name");
    
    if (productSelect) {
        products.forEach(product => {
            const option = document.createElement("option");
            
            option.value = product.id; 
            
            
            option.textContent = product.name.split(' ')
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
                
            productSelect.appendChild(option);
        });
    }

    
    const counterDisplay = document.getElementById("review-counter");
    
    if (counterDisplay) {
      
        let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
        
      
        reviewCount += 1;
        
        
        localStorage.setItem("reviewCount", reviewCount);
        
       
        counterDisplay.textContent = reviewCount;
    }
});