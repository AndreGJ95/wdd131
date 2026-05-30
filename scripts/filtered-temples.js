const temples = [
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 100373,
    imageUrl: "images/manti-utah-temple.webp"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl: "images/salt-lake-temple.webp"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl: "images/rome-italy-temple.webp"
  },
  {
    templeName: "Paris France",
    location: "Le Chesnay, France",
    dedicated: "2017, May, 21",
    area: 44175,
    imageUrl: "images/paris-francia-temple.webp"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Pichincha, Ecuador",
    dedicated: "2022, November, 20",
    area: 36780,
    imageUrl: "images/quito-ecuador-temple.webp"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600, 
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
    area: 116642, 
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


const container = document.getElementById("temple-cards-container");
const navHome = document.getElementById("home");
const navOld = document.getElementById("old");
const navNew = document.getElementById("new");
const navLarge = document.getElementById("large");
const navSmall = document.getElementById("small");


const menuButton = document.getElementById("menu");
const navigation = document.querySelector(".navigation");


if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
}


function displayTemples(filteredList) {
  if (!container) return;
  container.innerHTML = ""; 

  filteredList.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    const title = document.createElement("h3");
    title.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<span>Location:</span> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<span>Dedicated:</span> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<span>Size:</span> ${temple.area.toLocaleString()} sq ft`;

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = `Photograph of the ${temple.templeName} Temple`;
    img.loading = "lazy"; 
    img.width = 400;      
    img.height = 250;

    card.appendChild(title);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(img);

    container.appendChild(card);
  });
}


if (navHome) navHome.addEventListener("click", (e) => { e.preventDefault(); displayTemples(temples); });

if (navOld) navOld.addEventListener("click", (e) => {
  e.preventDefault();
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

if (navNew) navNew.addEventListener("click", (e) => {
  e.preventDefault();
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

if (navLarge) navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

if (navSmall) navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});


const yearSpan = document.getElementById("currentyear");
const modifiedSpan = document.getElementById("lastModified");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();
if (modifiedSpan) modifiedSpan.textContent = document.lastModified;


displayTemples(temples);
