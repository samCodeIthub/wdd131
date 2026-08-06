function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Good morning";
    } else if (hour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

function renderGreeting() {
    const heroText = document.querySelector(".intro p");
    if (!heroText) return;
    const greeting = getGreeting();
    const savedAttractions = JSON.parse(localStorage.getItem("savedAttractions")) || [];
    const bookings = JSON.parse(localStorage.getItem("bookings")) || [];

    let extra = "";
    if (savedAttractions.length > 0) {
        extra = `You have ${savedAttractions.length} saved attraction${savedAttractions.length > 1 ? "s" : ""}.`;
    } else {
        extra = `Save your favorite attractions as you explore.`;
    }

    const note = document.createElement("p");
    note.className = "greetingNote";
    note.innerHTML = `${greeting}! ${extra} ${bookings.length > 0 ? `You have ${bookings.length} guide booking request${bookings.length > 1 ? "s" : ""} on file.` : ""}`;
    heroText.insertAdjacentElement("afterend", note);
}

document.addEventListener("DOMContentLoaded", renderGreeting);
