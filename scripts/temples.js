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
    
