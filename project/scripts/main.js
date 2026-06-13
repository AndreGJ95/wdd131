const hiddenGemsData = [
    {
        name: "Cerro Blanco Protected Forest",
        category: "nature",
        description: "A vast tropical dry forest reserve right outside the city limits. Home to the green macaw, hiking trails, and incredible local biodiversity.",
        highlight: "Ideal for early morning birdwatching and hiking.",
        image: "images/cerro-blanco.webp"
    },
    {
        name: "Presidents Alley & General Cemetery",
        category: "culture",
        description: "An open-air museum featuring stunning white marble sculptures and classical architecture. It holds the remains of many national historical figures.",
        highlight: "Remarkable architecture and quiet historical paths.",
        image: "images/cemetery.webp"
    },
    {
        name: "El Mono Goloso Café",
        category: "gastronomy",
        description: "A cozy, hidden traditional spot near the historic center. Known for serving some of the most authentic local pastries and premium Ecuadorian coffee.",
        highlight: "Must try: traditional humitas and artisanal dark coffee.",
        image: "images/mono-goloso.webp"
    },
    {
        name: "Santay Island Wetlands",
        category: "nature",
        description: "Accessible via a pedestrian bridge from Guayaquil, this island is a protected wetland area full of mangroves and an eco-village.",
        highlight: "Rent a bicycle to cross the bridge and explore the trails.",
        image: "images/santay.webp"
    }
];


function setDynamicGreeting() {
    const greetingElement = document.querySelector('#greeting');
    if (!greetingElement) return; 

    const currentHour = new Date().getHours();
    let greetingText = '';

    if (currentHour < 12) {
        greetingText = 'Good morning! Ready to discover Guayaquil?';
    } else if (currentHour < 18) {
        greetingText = 'Good afternoon! Explore Guayaquil\'s hidden spots';
    } else {
        greetingText = 'Good evening! Plan your next Guayaquil adventure';
    }

    
    greetingElement.textContent = `${greetingText}`;
}


function setFooterData() {
    const yearElement = document.querySelector('#currentyear');
    const modifiedElement = document.querySelector('#lastModified');

    if (yearElement) {
        yearElement.textContent = `${new Date().getFullYear()}`;
    }

    if (modifiedElement) {
       
        modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }
}


function renderGems(filteredList) {
    const container = document.querySelector('#gems-container');
    if (!container) return; 

    
    container.innerHTML = '';

    
    filteredList.forEach(gem => {
        
        const gemCardHtml = `
            <div class="gem-card">
                <img src="${gem.image}" alt="${gem.name}" loading="lazy" class="gem-img">
                <div class="gem-info">
                    <span class="category-tag ${gem.category}">${gem.category.toUpperCase()}</span>
                    <h3>${gem.name}</h3>
                    <p>${gem.description}</p>
                    <p class="gem-highlight"><strong>Highlight:</strong> ${gem.highlight}</p>
                </div>
            </div>
        `;
        container.innerHTML += gemCardHtml; 
    });
}


function setupFilterButtons() {
    const buttons = document.querySelectorAll('.filter-btn');
    if (buttons.length === 0) return;

    buttons.forEach(button => {
        
        button.addEventListener('click', (e) => {
            
            buttons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const selectedCategory = e.target.getAttribute('data-category');

            
            if (selectedCategory === 'all') {
                renderGems(hiddenGemsData);
            } else {
                
                const filtered = hiddenGemsData.filter(gem => gem.category === selectedCategory);
                renderGems(filtered);
            }
        });
    });
}


function setupFormSubmission() {
    const form = document.querySelector('#gem-suggestion-form');
    const feedback = document.querySelector('#form-feedback');
    if (!form || !feedback) return;

    form.addEventListener('submit', (event) => {
        event.preventDefault(); 

        
        const userName = document.querySelector('#userName').value;
        const gemName = document.querySelector('#gemName').value;

       
        let totalSuggestions = parseInt(localStorage.getItem('suggestionCount')) || 0;
        totalSuggestions += 1;
        localStorage.setItem('suggestionCount', totalSuggestions);

        
        feedback.classList.remove('hidden');

        
        feedback.innerHTML = `
            <h3>Thank you, ${userName}!</h3>
            <p>Your suggestion for <strong>"${gemName}"</strong> has been successfully received.</p>
            <p class="counter-text">You have submitted <strong>${totalSuggestions}</strong> suggestion(s) so far during this session.</p>
        `;

        
        form.reset();
    });
}


document.addEventListener('DOMContentLoaded', () => {
    
    setDynamicGreeting();
    setFooterData();
    
    if (document.querySelector('#gems-container')) {
        renderGems(hiddenGemsData);
        setupFilterButtons();
    }

    if (document.querySelector('#gem-suggestion-form')) {
        setupFormSubmission();
    }
});