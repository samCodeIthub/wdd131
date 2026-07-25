document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;    

const button = document.querySelector("#hamburger");
const nav = document.querySelector("nav");


button.addEventListener("click", function () {
    nav.classList.toggle("open")
    if (nav.classList.contains("open")) {
        button.textContent="✕"
    }
    else {
        button.textContent="☰"
    }
});

const temples = [
    {
        templeName: "Accra Ghana Temple",
        location: "Accra, Ghana",
        dedicated: "2004, January, 11",
        area: 17500,
        image: "images/accraghana.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/accra-ghana-temple/"
    },
    {
        templeName: "Hong Kong China Temple",
        location: "Hong Kong, China",
        dedicated: "1992, October, 3",
        area: 51921,
        image: "images/hongkongchina.jpg",
        imageUrl: "http://churchofjesuschristtemples.org/hong-kong-china-temple/"
    },
    {
        templeName: "Kirtland Temple",
        location: "Kirtland, Ohio",
        dedicated: "1832, December, 27",
        area: 15000,
        image: "images/kirtland.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/kirtland-temple/"
    },
    {
        templeName: "London England Temple",
        location: "London, England",
        dedicated: "1953, August, 10",
        area: 42652,
        image: "images/londonengland.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/london-england-temple/"
    },
    {
        templeName: "Provo City Center Temple",
        location: "Provo, Utah",
        dedicated: "2011, October, 01",
        area: 85084,
        image: "images/provocitycenter.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/provo-city-center-temple/"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2008, October, 04",
        area: 41010,
        image: "images/romeitaly.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/rome-italy-temple/"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah ",
        dedicated: "1847, July, 28",
        area: 382207,
        image: "images/saltlake.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/salt-lake-temple/"
    },
    {
        templeName: "Sydney Australia Temple",
        location: "Sydney, Australia",
        dedicated: "1980, April, 2",
        area: 30067,
        image: "images/sydneyaustralia.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/sydney-australia-temple/"
    },
    {
        templeName: "São PauloBrazil Temple",
        location: "São Paulo, Brazil",
        dedicated: "1975, March, 1",
        area: 59246,
        image: "images/saopaulobrazil.jpg",
        imageUrl: "https://churchofjesuschristtemples.org/sao-paulo-brazil-temple/"
    },
    {
        templeName: "Mérida Mexico Temple",
        location: "Mérida, Mexico",
        dedicated: "2000, July, 08",
        area: 10700,
        image: "images/meridaMexico.webp",
        imageUrl: "https://churchofjesuschristtemples.org/merida-mexico-temple/"
    }
];
    

const gallery = document.querySelector(".gallery");

function renderTemples(templeArray) {
    let cards = "";
    for (const temple of templeArray) {
        cards += `<figure>
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><span class="label-location">Location:</span> ${temple.location}</p>
                <p><span class="label-dedicated">Dedicated:</span> ${temple.dedicated}</p>
                <p><span class="label-size">Size:</span> ${temple.area.toLocaleString()} sq ft</p>
            </figcaption>
            <a href="${temple.imageUrl}" target="_blank">
                <img src="${temple.image}" alt="${temple.templeName}" loading="lazy">
            </a>
        </figure>`;
    }
    gallery.innerHTML = cards;
}

renderTemples(temples);

const navLinks = document.querySelectorAll("nav a");

navLinks[0].addEventListener("click", function (e) {
    e.preventDefault();
    renderTemples(temples); // Home = show all
});

navLinks[1].addEventListener("click", function (e) {
    e.preventDefault();
    const oldTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
    });
    renderTemples(oldTemples);
});

navLinks[2].addEventListener("click", function (e) {
    e.preventDefault();
    const newTemples = temples.filter(temple => {
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    renderTemples(newTemples);
});

navLinks[3].addEventListener("click", function (e) {
    e.preventDefault();
    const largeTemples = temples.filter(temple => temple.area > 90000);
    renderTemples(largeTemples);
});

navLinks[4].addEventListener("click", function (e) {
    e.preventDefault();
    const smallTemples = temples.filter(temple => temple.area < 10000);
    renderTemples(smallTemples);
});