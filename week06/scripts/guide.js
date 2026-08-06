const guides = [
    { id: "g1", name: "Kwesi Mensah", specialty: "Beaches & coastline" },
    { id: "g2", name: "Abena Owusu", specialty: "Festivals & culture" },
    { id: "g3", name: "Yaw Boateng", specialty: "Campus & town tour" },
    { id: "g4", name: "Efua Dadzie", specialty: "Markets & food" }
];

function getBookings() {
    return JSON.parse(localStorage.getItem("bookings")) || [];
}

function setBookings(list) {
    localStorage.setItem("bookings", JSON.stringify(list));
}

function populateGuideSelect() {
    const select = document.getElementById("guideSelect");
    if (!select) return;

    select.innerHTML = `<option value="">Select a guide</option>${guides.map(guide => `<option value="${guide.id}">${guide.name} — ${guide.specialty}</option>`).join("")}`;
}

function findGuideById(id) {
    return guides.find(guide => guide.id === id);
}

function validateBooking(data) {
    if (!data.fullName || !data.email || !data.phone || !data.guideId || !data.visitDate) {
        return "Please fill in all required fields.";
    }
    if (data.groupSize < 1) {
        return "Group size must be at least 1.";
    }
    return "";
}

function renderBookingList() {
    const list = document.getElementById("bookingList");
    if (!list) return;
    const bookings = getBookings();

    if (bookings.length === 0) {
        list.innerHTML = `<li>No booking requests yet.</li>`;
        return;
    }

    list.innerHTML = bookings.map(booking => {
        return `<li>${booking.fullName} booked ${booking.guideName} for ${booking.visitDate} (${booking.groupSize} people)</li>`;
    }).join("");
}

function handleSubmit(event) {
    event.preventDefault();

    const guideId = document.getElementById("guideSelect").value;
    const guide = findGuideById(guideId);

    const data = {
        fullName: document.getElementById("fullName").value.trim(),
        email: document.getElementById("email").value.trim(),
        phone: document.getElementById("phone").value.trim(),
        guideId: guideId,
        guideName: guide ? guide.name : "",
        visitDate: document.getElementById("visitDate").value,
        groupSize: Number(document.getElementById("groupSize").value),
        message: document.getElementById("message").value.trim()
    };

    const messageBox = document.getElementById("formMessage");
    const error = validateBooking(data);

    if (error) {
        messageBox.innerHTML = `<span class="error">${error}</span>`;
        return;
    }

    const bookings = getBookings();
    bookings.push(data);
    setBookings(bookings);

    messageBox.innerHTML = `<span class="success">Thanks, ${data.fullName}! Your request to visit with ${data.guideName} on ${data.visitDate} has been saved.</span>`;

    document.getElementById("bookingForm").reset();
    renderBookingList();
}

function initGuidePage() {
    populateGuideSelect();
    renderBookingList();
    const form = document.getElementById("bookingForm");
    if (form) {
        form.addEventListener("submit", handleSubmit);
    }
}

document.addEventListener("DOMContentLoaded", initGuidePage);
