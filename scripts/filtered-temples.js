
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


function displayTemples(filteredList) {
 
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


navHome.addEventListener("click", (e) => {
  e.preventDefault();
  displayTemples(temples);
});

navOld.addEventListener("click", (e) => {
  e.preventDefault();
  
  const oldTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year < 1900;
  });
  displayTemples(oldTemples);
});

navNew.addEventListener("click", (e) => {
  e.preventDefault();
  
  const newTemples = temples.filter(temple => {
    const year = parseInt(temple.dedicated.split(",")[0]);
    return year > 2000;
  });
  displayTemples(newTemples);
});

navLarge.addEventListener("click", (e) => {
  e.preventDefault();
  
  const largeTemples = temples.filter(temple => temple.area > 90000);
  displayTemples(largeTemples);
});

navSmall.addEventListener("click", (e) => {
  e.preventDefault();
  
  const smallTemples = temples.filter(temple => temple.area < 10000);
  displayTemples(smallTemples);
});


document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;


displayTemples(temples);