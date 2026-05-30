// 1. Lista (Array) de Objetos de Templos - Incluyendo tus imágenes locales
const temples = [
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 100373,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/manti-utah/400x250/manti-temple-766347-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/salt-lake-temple/400x250/salt-lake-temple-37-open-house.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/rome-italy/400x250/1-Rome-Temple-2170241.jpg"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "https://content.churchofjesuschrist.org/temples/photo-galleries/paris-france/400x250/paris-france-temple-exterior-1905615.jpg"
  },
  // --- Templos Propios usando tus imágenes locales de la carpeta /images ---
  {
    templeName: "Quito Ecuador",
    location: "Quito, Pichincha, Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    imageUrl: "images/quito-ecuador-temple-webp"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600, // Menor a 10,000 para activar el filtro 'Small'
    imageUrl: "images/lima-peru-temple.webp"
  },
  {
    templeName: "Madrid Spain",
    location: "Madrid, Spain",
    dedicated: "1999, March, 19",
    area: 23800,
    imageUrl: "images/madrid-spain-temple.webp"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642, // Mayor a 90,000 para activar el filtro 'Large'
    imageUrl: "images/mexico-city-mexico.webp"
  },
  {
    templeName: "London England",
    location: "London, England",
    dedicated: "1958, September, 7",
    area: 42652,
    imageUrl: "images/london-england-temple.webp"
  }
];

// 2. Elementos del DOM
const container = document.getElementById("temple-cards-container");
const navHome = document.getElementById("home");
const navOld = document.getElementById("old");
const navNew = document.getElementById("new");
const navLarge = document.getElementById("large");
const navSmall = document.getElementById("small");

// 3. Función para Renderizar las Tarjetas Dinámicamente
function displayTemples(filteredList) {
  // Limpiar contenedor antes de renderizar
  container.innerHTML = "";

  filteredList.forEach(temple => {
    // Crear el elemento de tarjeta <section>
    const card = document.createElement("section");
    card.classList.add("temple-card");

    // Nombre del Templo
    const title = document.createElement("h3");
    title.textContent = temple.templeName;

    // Ubicación
    const location = document.createElement("p");
    location.innerHTML = `<span>Location:</span> ${temple.location}`;

    // Dedicación
    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

    // Área / Superficie
    const area = document.createElement("p");
    area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

    // Imagen con Native Lazy Loading incorporado
    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Photograph of the ${temple.templeName} Temple`;
    img.loading = "lazy"; // Requisito clave de la tarea
    img.width = 400;      // Dimensiones para evitar saltos de layout en Lighthouse
    img.height = 250;

    // Agregar todos los elementos dentro de la tarjeta
    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    // Insertar la tarjeta al contenedor principal
    container.appendChild(card);
  });
}

// 4. Lógica de los Filtros (.filter())
navHome.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

navOld.addEventListener("click", (e) => {
  e.preventDefault();
  // Filtro: Dedicados antes de 1900
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

navNew.addEventListener("click", (e) => {
  e.preventDefault();
  // Filtro: Dedicados después del año 2000
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  // Filtro: Más de 90,000 pies cuadrados
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  // Filtro: Menos de 10,000 pies cuadrados
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});

// 5. Configuración del Footer Dinámico
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Renderizar todos los templos al cargar la página por primera vez
displayTemples(temples);