function getSavedAttractions() {
    return JSON.parse(localStorage.getItem("savedAttractions")) || [];
}

function setSavedAttractions(list) {
    localStorage.setItem("savedAttractions", JSON.stringify(list));
}

function isSaved(name, savedList) {
    return savedList.some(item => item.name === name);
}

function toggleSaved(attraction) {
    let saved = getSavedAttractions();
    if (isSaved(attraction.name, saved)) {
        saved = saved.filter(item => item.name !== attraction.name);
    } else {
        saved.push(attraction);
    }
    setSavedAttractions(saved);
    return saved;
}

function buildButton(attraction, saved) {
    const btn = document.createElement("button");
    btn.className = "saveBtn";
    btn.textContent = isSaved(attraction.name, saved) ? "★ Saved" : "☆ Save";
    return btn;
}

function attachSaveButtons() {
    const cards = document.querySelectorAll(".attractionCards article");
    let saved = getSavedAttractions();

    cards.forEach(card => {
        const nameEl = card.querySelector(".attractionInfo h2");
        if (!nameEl) return;

        const attraction = { name: nameEl.textContent };
        const infoBox = card.querySelector(".attractionInfo");
        const btn = buildButton(attraction, saved);

        btn.addEventListener("click", () => {
            const updated = toggleSaved(attraction);
            btn.textContent = isSaved(attraction.name, updated) ? "★ Saved" : "☆ Save";
        });

        infoBox.appendChild(btn);
    });
}

document.addEventListener("DOMContentLoaded", attachSaveButtons);
